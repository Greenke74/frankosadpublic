import { Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


const PortfolioCard = ({ data, size }) => {

  const isDesktop = useMediaQuery('(min-width:991px)')

  return (
    <>
      <Grid
        sx={{ backgroundImage: `url(${data.img})`, backgroundSize: 'cover' }}
        className='portfolio-card'
        display={'flex'}
        alignItems={'end'}
      >
        <Grid className='card-content'>
          <Typography className='type-of-building'
            fontSize={size === 'small' ? '16px' : '22px'}>{data.typeOfBuilding}</Typography>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <LocationOnOutlinedIcon fontSize={isDesktop ? 'medium' : 'small'} />
            <Typography className='location'
              fontSize={size === 'small' ? '20px' : '26px'}>{data.location}</Typography>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default PortfolioCard