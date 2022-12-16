import React, { useState, useEffect, Suspense } from 'react';
import PageBlock from './PageBlock.jsx';
import { getBlocks } from './blocks.js';
import { Spinner } from '../common/Spinner.jsx';
import { Links } from '../../services/nav-routes-service.js';
import { Breadcrumbs, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { styled } from '@mui/system';

const HomeIcon = styled(HomeOutlinedIcon)({
  height: '35px',
  width: '35px',
  display: 'flex',
  alignItems: 'center'
})

const BlocksList = ({ blocksData, blockTypes }) => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    setBlocks(blockTypes.map(blockType => getBlocks(blockType)).filter(block => block))
  }, [blockTypes])

  const breadcrumbs = useReactRouterBreadcrumbs([...Links, { breadcrumb: HomeIcon, path: '/' }])
  const { pathname } = useLocation()

  return (
    <>
      {pathname !== '/' &&
        <div style={{
          background: 'linear-gradient(90deg, #252C22 0%, #2A2F23 100%)',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              width: '100%', maxWidth: 'var(--max-content-width)', padding: '0 20px',
              '& .MuiBreadcrumbs-ol': {
                gap: '10px'
              }
            }}
            separator={<ArrowForwardIosOutlinedIcon sx={{ fontSize: '20px', color: 'var(--theme-color)', opacity: '0.6' }} />}
          >
            {breadcrumbs.map(({ match, breadcrumb }, index) => (
              <div key={match.pathname}>
                {index !== breadcrumbs.length - 1
                  ? <Link to={match.pathname}
                    style={{
                      color: 'var(--theme-color)',
                      textDecoration: 'none',
                      fontSize: '22px',
                      fontWeight: '500',
                      fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
                    }}
                  >
                    {breadcrumb}
                  </Link>
                  : <Typography sx={{
                    fontSize: '22px',
                    color: 'var(--theme-color)',
                    opacity: '0.8',
                    fontWeight: '500',
                    fontFamily: 'Montserrat, Arial, Helvetica, sans-serif'
                  }}>{breadcrumb}</Typography>}
              </div>
            ))}
          </Breadcrumbs>
        </div>
      }

      {blocks.map((block, idx) => {
        const Component = block?.component;
        const blockData = blocksData?.find(blockData => blockData?.type === block?.type)

        return Component && (
          <Suspense fallback={<Spinner />} key={`${idx}`} >
            <PageBlock
              component={Component}
              fullWidth={block.fullWidth}
              blockData={blockData}
            />
          </Suspense>
        )
      })}
    </>
  )
}

export default BlocksList