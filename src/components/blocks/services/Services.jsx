import React from 'react'
import { useQuery } from 'react-query'

import { Grid, Box } from '@mui/material'
import ServiceCard from './ServiceCard.jsx'

import { getServices } from '../../../services/services-api-service.js'

import './services.scss'

const Services = () => {

  const { data: servicesData } = useQuery('services', getServices)

  console.log(servicesData);

  return (
    <Box className='services-container'>
      <Grid container spacing={'45px'}>
        {(servicesData ?? []).map((elem, index) =>
          <Grid xs={12} sm={6} key={index} item >
            <ServiceCard data={elem} />
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default Services