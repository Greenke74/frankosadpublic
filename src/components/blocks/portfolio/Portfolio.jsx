import { Button, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import PortfolioCard from './PortfolioCard.jsx'
import './portfolio.scss'
import { useQuery } from 'react-query'
import { getProjects } from '../../../services/projects-api-service.js'
import { useNavigate } from 'react-router-dom'

const Portfolio = () => {

  const{data: projectsData} = useQuery('projectsId', getProjects)

  const navigate = useNavigate()

  const isLaptop = useMediaQuery('(max-width: 1400px)')
  const isTablet = useMediaQuery('(max-width: 769px)')
  const isMobile = useMediaQuery('(max-width: 436px)')

  return (
    <>
      <div className='portfolio-container' >
        <Typography className='preview-title'>Наші роботи</Typography>
        <Grid container spacing={isMobile ? '15px' : isLaptop ? '30px' : '50px'} >
          {projectsData?.map((elem, index) =>
            <Grid xs={12} sm={6} lg={6} item key={index} >
              <PortfolioCard data={elem} onClick={() => navigate(elem?.alias)}/>
            </Grid>
          )}
        </Grid>
        <Grid display={'flex'} justifyContent={'center'} marginTop={ isTablet ? '20px' : '45px'}>
          <Button className='btn-review' variant='standart'>Переглянути ще</Button>
        </Grid>
      </div>
    </>

  )
}

export default Portfolio