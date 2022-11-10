import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import PortfolioCard from './PortfolioCard.jsx'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import './portfolio.scss'
import { useNavigate } from 'react-router-dom';

const PortfolioPreview = () => {

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
    }
  ]

  const navigate = useNavigate()
  

  return (
    <Box sx={{ backgroundColor: 'red' }} className='portfolio-container'>
      <Typography className='preview-title'>Наші роботи</Typography>
      <Grid container spacing={'45px'} >
        {data.map((elem, index) =>
          <Grid xs={12} sm={6} lg={4} item key={index} >
            <PortfolioCard data={elem} size={'small'}/>
          </Grid>
        )}
      </Grid>
      <Grid display={'flex'} justifyContent={'right'} marginTop={'45px'}>
        <Button className='btn-review' onClick={() => navigate('/portfolio')}>
          Портфоліо <ArrowForwardIosOutlinedIcon />
        </Button>
      </Grid>
    </Box>
  )
}

export default PortfolioPreview