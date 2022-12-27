import { Breadcrumbs as MuiBreadcrumbs, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../../services/nav-routes-service'
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';

const MyBreadcrumbs = () => {
  
  const isLaptop = useMediaQuery('(max-width:1600px)')

  const HomeIcon = styled(HomeOutlinedIcon)({
    height: isLaptop ? '24px' : '35px',
    width: isLaptop ? '24px' : '35px',
    display: 'flex',
    alignItems: 'center'
  })

  const breadcrumb = useSelector(state => state.breadcrumbs); 

  const breadcrumbs = useReactRouterBreadcrumbs([...navLinks, { breadcrumb: HomeIcon, path: '/' }, breadcrumb])
  const { pathname } = useLocation()

  return (
    <>
    {pathname !== '/' &&
        <div style={{
          //background: 'linear-gradient(90deg, #252C22 0%, #2A2F23 100%)',
          padding: isLaptop ? '10px 0' : '20px 0',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <MuiBreadcrumbs
            aria-label="breadcrumb"
            sx={{
              width: '100%', maxWidth: 'var(--max-content-width)', padding: '0 20px',
              '& .MuiBreadcrumbs-ol': {
                gap: isLaptop? '2px' : '10px'
              }
            }}
            separator={<ArrowForwardIosOutlinedIcon sx={{ fontSize: isLaptop ? '16px' : '20px', color: 'var(--theme-color)', opacity: '0.6' }} />}
          >
            {breadcrumbs.map(({ match, breadcrumb }, index) => (
              <div key={match.pathname}>
                {index !== breadcrumbs.length - 1
                  ? <Link to={match.pathname}
                    style={{
                      color: 'var(--theme-color)',
                      textDecoration: 'none',
                      fontSize: isLaptop ? '18px' : '22px',
                      fontWeight: '500',
                      fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
                    }}
                  >
                    {breadcrumb}
                  </Link>
                  : <Typography sx={{
                    fontSize: isLaptop ? '18px' : '22px',
                    color: 'var(--theme-color)',
                    opacity: '0.8',
                    fontWeight: '500',
                    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
                  }}>{breadcrumb}</Typography>}
              </div>
            ))}
          </MuiBreadcrumbs>
        </div>
      }
    </>
    
  )
}

export default MyBreadcrumbs