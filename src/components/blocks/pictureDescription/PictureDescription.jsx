import { Box, Typography } from '@mui/material'
import React from 'react'
import { getImageSrc } from '../../../services/settingApiService'

import './pictureDescription.scss'

const PictureDescription = ({ blockData }) => {

  return (
    <Box className='description-container'
      sx={{
        backgroundImage: `url(${getImageSrc(blockData?.data.image.url)})`,
        backgroundSize: 'cover',
        aspectRatio: 'calc(4 / 1)',
        maxWidth: '100%'
      }}
      width={'var(--max-content-width)'}
      borderRadius={'var(--block-border-radius)'}
      display={'flex'}
      alignItems={'end'}
    >
      <Box
        sx={{
          borderRadius: 'var(--block-border-radius)',
          m: 2,
          px: 4,
          py: 1,
          bgcolor: 'var(--block-background-color)'
        }}
      >
        <Typography
          variant='body1'
          color='theme.palette.primary'
        >
          {blockData?.data?.description}
        </Typography>
      </Box>
    </Box>
  )
}

export default PictureDescription