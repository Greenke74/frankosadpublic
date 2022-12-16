import { Box, Typography } from '@mui/material'
import React from 'react'
import { getImageSrc } from '../../../services/settingApiService'

import './pictureDescription.scss'

const PictureDescription = ({ blockData }) => {

  return (
    <Box className='description-container'
      sx={{
        backgroundImage: `url(${getImageSrc(blockData?.data.image)})`,
        backgroundSize: 'cover',
        aspectRatio: 'calc(4 / 1)',
      }}
      width={'var(--max-content-width)'}
      borderRadius={'var(--block-border-radius)'}
      display={'flex'}
      alignItems={'end'}
    >
      <Box 
        borderRadius={'var(--block-border-radius)'}
        margin={'20px'}
        padding={'20px'}
        bgcolor='var(--block-background-color)'
      >
        <Typography
          fontSize={30}
          >
          {blockData?.data?.description}
        </Typography>
      </Box>
    </Box>
  )
}

export default PictureDescription