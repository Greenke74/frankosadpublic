import React, { useState } from "react";
import { useSelector } from 'react-redux/es/hooks/useSelector';

import { SwipeableDrawer } from "@mui/material";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { navLinks } from '../../services/nav-routes-service';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import './header.scss'

const StyledDrawer = styled(SwipeableDrawer)({
  '& .MuiDrawer-paper': {
    width: '400px',
    maxWidth: '100%'
  },
  '& .MuiBackdrop-root': {
    opacity: '0.4 !important'
  }
})

const HeaderMobile = () => {
	const mainSettings = useSelector(state => state.mainSettings); 
  const [open, setOpen] = useState(false)

  const contactLinkStyle = {
    textDecoration: 'none',
    color: '#e9fbf09e',
    fontSize: '13px'
  }

  return (
    <>
    <header className='header' style={{position: 'fixed'}}>
      <div className='navWrapper' style={{ minHeight: '60px' }}>
        <nav className='nav' style={{ padding: '0 15px' }}>
          <Link className='siteName'
            to='/'
            style={{ fontSize: '22px' }}
          >
            {mainSettings.siteName}</Link>
          <MenuIcon
            sx={{
              border: "none",
              width: 20,
              height: 20,
              color: "var(--white)",
              bgcolor: "var(--background-color)"
            }}
            onClick={() => setOpen(true)}
          />
          <StyledDrawer open={open} anchor={"left"} onClose={() => setOpen(false)} >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              backgroundColor: 'var(--background-color)',
              height: '100%',
              overflow: 'hidden',
              paddingBottom: '25px'
            }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
                padding: '0 15px'
              }}>
                <Link to='/' style={{
                  width: '90%',
                  lineHeight: '60px',
                  fontWeight: '600',
                  fontSize: '22px',
                  color: 'var(--white)',
                  textDecoration: 'none',
                  flexShrink: '0',
                }}
                  onClick={() => setOpen(false)}>
                  {mainSettings.siteName}
                </Link>
                <CloseIcon sx={{ color: 'var(--white)', width: 20, height: 20 }} onClick={() => setOpen(false)} />
              </div>
              {(navLinks).map(elem => (
                <Link
                  to={elem.to}
                  key={elem.to}
                  style={{
                    fontWeight: '400',
                    fontSize: '16px',
                    textDecoration: 'none',
                    color: 'var(--white)',
                    width: '100%',
                    padding: '15px 25px'
                  }}
                  onClick={() => setOpen(false)}>
                  {elem.title}
                </Link>
              ))}
              <div style={{
                display: 'flex',
                flexWrap: 'nowrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 25px',
                marginTop: '15px'
              }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  flexGrow: '0.9'
                }}>
                  {mainSettings.contactPhone &&
                    <a
                      href={`tel:${mainSettings.contactPhone}`}
                      style={contactLinkStyle}
                    >{mainSettings.contactPhone}</a>}
                  {mainSettings.contactMail &&
                    <a
                      href={`mailto:${mainSettings.contactMail}`}
                      style={contactLinkStyle}
                    >{mainSettings.contactMail}</a>}
                  {mainSettings.geoLocation &&
                    <a
                      href={(mainSettings.geoLocation ?? {}).url}
                      target='_blank_'
                      style={contactLinkStyle}
                    >{(mainSettings.geoLocation ?? {}).address}</a>}
                </div>
                <a href={mainSettings?.mediaLinks?.instagramUrl ?? ''}>
                  <InstagramIcon style={{ color: '#e9fbf09e' }} />
                </a>
                <a href={mainSettings?.mediaLinks?.facebookUrl ?? ''}>
                  <FacebookIcon style={{ color: '#e9fbf09e' }} />
                </a>
              </div>
            </div>
          </StyledDrawer>
        </nav>
      </div>
    </header>
    <div style={{ minHeight: '60px' }} />
    </>
  )
}

export default HeaderMobile