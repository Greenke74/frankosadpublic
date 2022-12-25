import { Box, Button, Grid, MenuItem, Select, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import PortfolioCard from './PortfolioCard.jsx'
import './portfolio.scss'
import { useInfiniteQuery } from 'react-query'
import { selectProjects } from '../../../services/projects-api-service.js'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Portfolio = () => {

  const navigate = useNavigate()

  const isLaptop = useMediaQuery('(max-width: 1400px)')
  const isTablet = useMediaQuery('(max-width: 769px)')
  const isMobile = useMediaQuery('(max-width: 436px)')
  const isLarge = useMediaQuery('(min-width:1641px)');

  const count = 12
  const [typeFilter, setTypeFilter] = useState('Всі проекти')

  const projectTypes = ['Всі проекти', 'Приватний будинок', 'Житловий комплекс', 'Підприємство']


  const { data: projectsData, fetchNextPage } = useInfiniteQuery(
    'projects', selectProjects , { getNextPageParam: (lastPage) => { console.log(lastPage); return {start: lastPage.offset, count};}}
  )

  return (
    <>
      <div className='portfolio-container' style={{
        margin: '0 auto',
        width: '100%',
        maxWidth: isLarge
          ? 'var(--max-content-width)'
          : `calc(100% - ${isLaptop ? '20px' : '40px'})`
      }}>
        <Box
          display='flex'
          justifyContent={'space-between'}
          alignItems={'end'}
          sx={{ background: 'linear-gradient(90deg, #2A2F23 0%, #1D2620 100%)' }}
          boxShadow='0px 0px 15px rgba(69, 84, 74, 0.2)'
          borderRadius='var(--page-border-radius)'
          marginBottom={'40px'}
          padding={'0.3vw 3vw'}
        >
          <Typography className='projects-title'>Наші роботи</Typography>
          <Select value={typeFilter} onChange={(event) => { setTypeFilter(event.target.value); }}
            sx={{
              color: 'var(--theme-color)',
              fontFamily: 'inherit',
              fontSize: 'calc(12px + 0.4vw)',
              fontWeight: '500',
              '& .MuiSelect-icon': { color: 'var(--theme-color)' }
            }}
            variant={'standard'}
            disableUnderline
          >
            {projectTypes.map((item, idx) =>
              <MenuItem sx={{
                color: 'var(--theme-color)',
                fontFamily: 'inherit',
                fontSize: 'calc(12px + 0.4vw)',
                fontWeight: '500',
              }} key={idx} value={item}>{item}</MenuItem>
            )}
          </Select>
        </Box>
        <Grid container spacing={isMobile ? '15px' : isLaptop ? '20px' : '25px'} >
          {projectsData?.pages?.map(item => item?.data?.map((elem, index) =>
            <Grid xs={12} sm={6} lg={4} item key={index} >
              <PortfolioCard data={elem} onClick={() => navigate(elem?.alias)} />
            </Grid>
          ))}
        </Grid>
        <Grid display={'flex'} justifyContent={'center'} marginTop={isTablet ? '20px' : '45px'}>
          <Button className='btn-review' variant='standart' onClick={()=>fetchNextPage()}>Переглянути ще</Button>
        </Grid>
      </div>
    </>

  )
}

export default Portfolio