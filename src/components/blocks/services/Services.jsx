import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ServiceCard from './ServiceCard.jsx'
import './services.scss'

const Services = () => {

  const data = [
    {
      service: 'Озеленення',
      img: 'img.jpg'
    },
    {
      service: 'Озеленення',
      img: 'img.jpg'
    },
    {
      service: 'Озеленення',
      img: 'img.jpg'
    },
    {
      service: 'Озеленення',
      img: 'img.jpg'
    },
    {
      service: 'Озеленення',
      img: 'img.jpg'
    },
    {
      service: 'Озеленення',
      img: 'img.jpg'
    }
  ]

  return (
    <Box className='services-container'>
      <Grid container spacing={'45px'}>
        {data.map((elem, index) => 
          <Grid xs={12} sm={6} key={index} item >
            <ServiceCard data={elem}/>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default Services