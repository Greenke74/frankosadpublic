import React from 'react'
import { useQuery } from 'react-query'

import { Grid, Box, useMediaQuery } from '@mui/material'
import ServiceCard from './ServiceCard.jsx'

import { getServices } from '../../../services/services-api-service.js'

import './services.scss'
import { useNavigate } from 'react-router-dom'

const Services = () => {

  const { data: servicesData } = useQuery('services', getServices)

  const navigate= useNavigate()

  const isLarge = useMediaQuery('(min-width:1641px)');
  const isLaptop = useMediaQuery('(max-width: 1400px)')

  return (
    <Box className='services-container' style={{
      margin: '0 auto',
      width: '100%',
      maxWidth: isLarge
          ? 'var(--max-content-width)'
          : `calc(100% - ${isLaptop? '20px' : '40px'})`
    }}>
      <Grid container spacing={'45px'}>
        {(servicesData ?? []).map((elem, index) =>
          <Grid xs={12} sm={6} key={index} item >
            <ServiceCard data={elem} onClick={() => {navigate(elem?.alias)}}/>
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default Services