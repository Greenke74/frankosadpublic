import React from 'react'
import { useQuery } from 'react-query'

import { Grid, Box, useMediaQuery } from '@mui/material'
import Masonry from '@mui/lab/Masonry';
import ServiceCard from './ServiceCard.jsx'

import { getServices } from '../../../services/services-api-service.js'

import { useNavigate } from 'react-router-dom'

const Services = () => {

  const { data: servicesData } = useQuery('services', getServices)

  const navigate = useNavigate()

  const isLarge = useMediaQuery('(min-width:1641px)');
  const isLaptop = useMediaQuery('(max-width: 1400px)')
  const isMobile = useMediaQuery('(max-width: 436px)')


  return (
    <Box sx={{
      m: '0 auto',
      width: 'auto',
      maxWidth: isLarge
        ? 'var(--max-content-width)'
        : `calc(100% - ${isLaptop ? '20px' : '40px'})`,
      overflow: 'hidden',
      paddingRight: isMobile ? '15px' : isLaptop ? '20px' : '25px'
    }}>
      <Masonry columns={2} spacing={isMobile ? '15px' : isLaptop ? '20px' : '25px'}>
        {(servicesData ?? []).map((elem, index) =>
          <Box key={index} >
            <ServiceCard data={elem} onClick={() => { navigate(elem?.alias) }} />
          </Box>
        )}
      </Masonry>
    </Box>
  )
}

export default Services