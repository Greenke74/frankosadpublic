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
import "normalize.css";
import './styles/main.css';

// pages
const MainPage = lazy(() => import("./pages/MainPage.jsx"));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));
const ServicePage = lazy(() => import('./pages/ServicePage.jsx'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage.jsx'));

const App = () => {

  const routes = [
    {
      path: '/',
      element: <MainPage/>
    },
    {
      path: '/services',
      element: <ServicePage />
    },
    {
      path: '/portfolio',
      element: <PortfolioPage />
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
        refetchOnWindowFocus: false
      }
    }
  })

  return <>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </Provider>
  </>;
};

export default App;
