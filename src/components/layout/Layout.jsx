import React, { Suspense, useEffect, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux/es/exports.js';

const Header = lazy(() => import('./Header.jsx'));
const HeaderMobile = lazy(() => import('./HeaderMobile.jsx'))
import Contacts from './Contacts.jsx';
import Footer from './Footer.jsx';
import { Helmet } from 'react-helmet';

import { getMainSettings } from '../../services/settingApiService';
import { mainSettingsSlice } from '../../redux/slices/mainSettingsSlice.js';
import Breadcrumbs from './Breadcrumbs.jsx';

export const Layout = ({ children }) => {
  const mainSettings = useSelector(state => state.mainSettings); 
  const dispatch = useDispatch();

  useEffect(() => {
    getMainSettings().then(res => {
      dispatch(mainSettingsSlice.actions.update(res))
    })
  }, [])

  const isDesktop = useMediaQuery('(min-width:991px)');

  const { pathname } = useLocation()
  useEffect(() => {    
    window.scrollTo({ top: window.scrollY<40 ? 0 : 40 })
  }, [pathname])

  return (
    <>
      <Helmet>
        {mainSettings?.favicon && <link rel="icon" type="image/x-icon" href={mainSettings?.favicon} />}
        {mainSettings?.siteName && <title>{mainSettings?.siteName}</title>}
      </Helmet>
      {isDesktop && <Contacts />}
      <>
        <Suspense
          fallback={
            <div style={{ width: '100%', height: '40px', backgroundColor: 'var(--white)' }}></div>
          }>
          {
            isDesktop
              ? <Header />
              : <HeaderMobile />
          }
        </Suspense>
        <Breadcrumbs/>
        <main
          style={{
            margin: '0 auto',
            width: '100%',
            minHeight: 'calc(100vh - var(--footer-height))',
            overflowX: 'hidden'
          }}
        >
          {children}
        </main>
        <Footer />
      </>
    </>
  )
}


