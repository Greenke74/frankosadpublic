import { Grid, Typography } from '@mui/material'
import React from 'react'

const ServiceCard = ({data}) => {
  return (
    <>
     <Grid xs={12}
        sx={{ backgroundImage: `url(${data.img})`, backgroundSize: 'cover' }}
        className='service-card'
        alignItems={'end'}
        height={'450px'}
        width={'100%'}
        borderRadius={'8px'}
        container
        item>
        <Typography
        variant='h2'
        fontFamily={'inherit'}
        fontWeight={'600'}
        color={'var(--theme-color)'}
        padding={'15px'}
        margin={'10px'}
        bgcolor={'var(--background-color)'}
        borderRadius={'8px'}
        >{data.service}</Typography>
      </Grid>
    </>
  )
}

export default ServiceCard