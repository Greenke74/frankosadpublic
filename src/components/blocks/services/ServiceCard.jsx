import { Grid, Typography } from '@mui/material'
import React from 'react'
import { getImageSrc } from '../../../services/settingApiService'

const ServiceCard = ({ data }) => {
  return (
    <>
      <Grid xs={12}
        sx={{ backgroundImage: `url(${getImageSrc(data.image)})`, backgroundSize: 'cover' }}
        className='service-card'
        alignItems={'end'}
        height={'350px'}
        width={'100%'}
        borderRadius={'8px'}
        container
        item>
        <Typography
          variant='h5'
          fontFamily={'inherit'}
          fontWeight={'600'}
          color={'var(--theme-color)'}
          padding={'5px 15px'}
          margin={'10px'}
          bgcolor={'var(--background-color)'}
          borderRadius={'8px'}
        >{data.title}</Typography>
      </Grid>
    </>
  )
}

export default ServiceCard