import { Box, Typography } from '@mui/material'
import React from 'react'
import { getImageSrc } from '../../../services/settingApiService'

const PictureParagraph = ({ blockData }) => {

  return (
    <Box
      display={'flex'}
      gap={'45px'}
      bgcolor={'var(--block-background-color)'}
      padding={'45px'}
      borderRadius={'var(--page-border-radius)'}
    >
      <img
        src={getImageSrc(blockData?.data?.image)}
        alt='image'
        style={{
          width: 'calc(var(--max-content-width) / 2)',
          minWidth:'200px',
          aspectRatio: '3/1',
          borderRadius:'var(--block-border-radius)'
        }}
      />
      <Typography fontSize={24}>{blockData?.data?.paragraph} </Typography>
    </Box>
  )
}

export default PictureParagraph