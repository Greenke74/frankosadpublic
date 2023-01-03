import React, { lazy, Suspense } from "react";
import { Layout } from "./components/layout/Layout.jsx";

import { StyledLinearProgress } from "./components/common/Spinner.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/index.js";
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "./theme/index.js";

import "normalize.css";
import './styles/main.css';

// pages
const MainPage = lazy(() => import("./pages/MainPage.jsx"));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'));
const ServicePage = lazy(() => import('./pages/ServicePage.jsx'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage.jsx'));
const Project = lazy(() => import("./pages/ProjectPage.jsx"))

const App = () => {

  const routes = [
    {
      path: '/',
      element: <MainPage />
    },
    {
      path: '/services',
      element: <ServicesPage />
    },
    {
      path: '/services/:alias',
      element: <ServicePage />
    },
    {
      path: '/portfolio',
      element: <PortfolioPage />
    },
    {
      path: '/portfolio/:alias',
      element: <Project />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      }
    }
  })

  return <>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={muiTheme}>
          <Router>
            <Layout>
              <Suspense fallback={<StyledLinearProgress />}>
                <Routes>
                  {routes.map(({ path, element }) => (
                    <Route path={path} element={element} key={path} />
                  ))}
                </Routes>
              </Suspense>
            </Layout>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </>;
};

export default App;
