import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import PortfolioCard from './PortfolioCard.jsx'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import './portfolio.scss'
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';


const PortfolioPreview = ({blockData}) => {

  const navigate = useNavigate()
  const isLaptop = useMediaQuery('(max-width: 1400px)')
  const isMobile = useMediaQuery('(max-width: 436px)')

  return (
    <Box sx={{ backgroundColor: 'red' }} className='portfolio-container'>
      <Typography className='preview-title' marginBottom={isMobile ? '15px' : isLaptop ? '20px' : '25px'}>Наші роботи</Typography>
      <Grid container spacing={isMobile ? '15px' : isLaptop ? '20px' : '25px'} >
        {blockData?.projects?.map((elem, index) =>
          <Grid xs={12} sm={6} lg={4} item key={index} >
            <PortfolioCard data={elem} onClick={() => navigate(`/portfolio/${elem?.alias}`)}/>
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