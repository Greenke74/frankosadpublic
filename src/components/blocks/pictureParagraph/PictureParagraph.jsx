import { Box, Grid, Typography } from '@mui/material'
import { borderRadius } from '@mui/system';
import React from 'react'
import { getImageSrc } from '../../../services/settingApiService'

const IMAGE_ASPECT_RATIO = 5 / 3;

const PictureParagraph = ({ blockData }) => {

  return (
    <Box sx={{
      bgcolor: 'var(--block-background-color)',
      borderRadius: 'var(--page-border-radius)',
      padding: '45px'
    }}>
      <Grid
        container
        spacing='45px'
      >
        <Grid item xs={12} md={6} sx={{order: blockData?.data?.imageFirst? undefined : 1}}>
          <img
            src={getImageSrc(blockData?.data?.image?.url)}
            alt='image'
            style={{
              aspectRatio: `${IMAGE_ASPECT_RATIO}`,
              borderRadius: 'var(--block-border-radius)',
              width:'100%'
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} >
          <Typography fontSize={24} whiteSpace='break-spaces'>{blockData?.data?.paragraph}</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PictureParagraph