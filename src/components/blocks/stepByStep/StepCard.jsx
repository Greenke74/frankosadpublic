import React from 'react'
import { Grid, useMediaQuery } from '@mui/material';
import { getImageSrc } from '../../../services/settingApiService';

const StepCard = (props) => {

  const isDesktop = useMediaQuery('(min-width:900px)');

  return (
    <div>
      <Grid container spacing={isDesktop ? 5 : 2} className='step-by-step-card'>
        <Grid item container direction='column' sm={12} md={6}>
          <div className='title-container'>
            <h4 className='card-number'>{props.data.number}</h4>
            <h3 className='card-title'
            >{props.data.title}</h3>
          </div>
          <Grid item container justifyContent='start' >
            <Grid item xs={11} sm={10} margin={'25px'} className='card-description'>
              <p>
                {props.data.description}
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={12} xs={12} md={6}>
          <div className='card-image' style={{
            backgroundImage: `url(${getImageSrc(props.data.image)})`,
          }} />
        </Grid>
      </Grid>
    </div>
  )
}

export default StepCard