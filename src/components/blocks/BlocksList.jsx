import React, { useState, useEffect, Suspense } from 'react';
import PageBlock from './PageBlock.jsx';
import { getBlocks } from './blocks.js';
import { Spinner } from '../common/Spinner.jsx';
import { Links, navLinks } from '../../services/nav-routes-service.js';
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

  return (
    <>
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