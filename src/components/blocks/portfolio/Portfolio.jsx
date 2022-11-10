import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import PortfolioCard from './PortfolioCard.jsx'
import './portfolio.scss'

const Portfolio = () => {

  const data = [
    {
      location: 'с. Ісаків',
      typeOfBuilding: 'Приватний будинок',
      img: './img.jpg'
    },
    {
      location: 'с. Ісаків',
      typeOfBuilding: 'Приватний будинок',
      img: './img.jpg'
    },
    {
      location: 'с. Ісаків',
      typeOfBuilding: 'Приватний будинок',
      img: './img.jpg'
    },
    {
      location: 'с. Ісаків',
      typeOfBuilding: 'Приватний будинок',
      img: './img.jpg'
    },
    {
      location: 'с. Ісаків',
      typeOfBuilding: 'Приватний будинок',
      img: './img.jpg'
    },
    {
      location: 'с. Ісаків',
      typeOfBuilding: 'Приватний будинок',
      img: './img.jpg'
    },
    {
      location: 'с. Ісаків',
      typeOfBuilding: 'Приватний будинок',
      img: './img.jpg'
    },
    {
      location: 'с. Ісаків',
      typeOfBuilding: 'Приватний будинок',
      img: './img.jpg'
    },
    {
      location: 'с. Ісаків',
      typeOfBuilding: 'Приватний будинок',
      img: './img.jpg'
    }
  ]

  return (
    <>
      <div className='portfolio-container' >
        <Typography className='preview-title'>Наші роботи</Typography>
        <Grid container spacing={'45px'} >
          {data.map((elem, index) =>
            <Grid xs={12} sm={6} lg={6} item key={index} >
              <PortfolioCard data={elem} size={''} />
            </Grid>
          )}
        </Grid>
        <Grid display={'flex'} justifyContent={'center'} marginTop={'45px'}>
          <Button className='btn-review' variant='standart'>Переглянути ще</Button>
        </Grid>
      </div>
    </>

  )
}

export default Portfolio