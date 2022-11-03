import React, { lazy, Suspense, useEffect } from "react";
import { Layout } from "./components/layout/Layout.jsx";

import { StyledLinearProgress } from "./components/common/Spinner.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/index.js";
import "normalize.css";
import './styles/main.css';

// pages
const MainPage = lazy(() => import("./pages/MainPage.jsx"));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));
const ServicePage = lazy(() => import('./pages/ServicePage.jsx'));

const App = () => {

  const routes = [
    {
      path: '/',
      element: <MainPage />
    },
    {
      path: '/services/:alias',
      element: <ServicePage />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]

  return <>
    <Provider store={store}>
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
    </Provider>
  </>;
};

export default App;
