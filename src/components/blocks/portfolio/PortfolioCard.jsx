import { Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { getImageSrc } from '../../../services/settingApiService';


const PortfolioCard = ({ data, onClick }) => {

  const isDesktop = useMediaQuery('(min-width:991px)')

  return (
    <>
      <Grid
        sx={{ backgroundImage: `url(${getImageSrc(data.image)})`, backgroundSize: 'cover', cursor: 'pointer' }}
        className='portfolio-card'
        display={'flex'}
        alignItems={'end'}
        onClick={onClick}
      >
        <Grid className='card-content'>
          <LocationOnOutlinedIcon fontSize={isDesktop ? 'medium' : 'small'} sx={{marginBottom: '4px'}}/>
          <div>
            <Typography className='type-of-building'>{data.type}</Typography>
            <Typography className='location'>{data.location.length > 30 ? data.location.substr(0, 30) + '...' : data.location}</Typography>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default PortfolioCard