import React, { useState } from 'react'
import { useInfiniteQuery, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { Box, Button, Grid, MenuItem, Select, Typography, useMediaQuery } from '@mui/material'
import PortfolioCard from './PortfolioCard.jsx'

import { selectProjects, getProjectCount } from '../../../services/projects-api-service.js'

import './portfolio.scss'

const projectTypes = ['Всі проєкти', 'Приватний будинок', 'Житловий комплекс', 'Підприємство']

const Portfolio = () => {

  const navigate = useNavigate()

  const isLaptop = useMediaQuery('(max-width: 1400px)')
  const isTablet = useMediaQuery('(max-width: 769px)')
  const isMobile = useMediaQuery('(max-width: 436px)')
  const isLarge = useMediaQuery('(min-width:1641px)');

  const [typeFilter, setTypeFilter] = useState(projectTypes[0])

  const { data: count } = useQuery({
    queryKey: [`projects-count`, typeFilter],
    queryFn: getProjectCount,
  });

  const {
    data: projectsData,
    fetchNextPage,
    isLoading
  } = useInfiniteQuery(
    [`projects`, typeFilter],
    ({ pageParam }) =>
      selectProjects({ start: pageParam?.start ?? 0, count: pageParam?.count ?? 12, typeFilter }),
    {
      getNextPageParam:
        (lastPage) => ({ start: lastPage.offset, count: 12, typeFilter: lastPage?.typeFilter }),
    }
  )

  let projects = [];
  (projectsData?.pages ?? []).forEach(page => projects = [...projects, ...page?.data])

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
          {projects.map((elem, index) =>
            <Grid xs={12} sm={6} lg={4} item key={index} >
              <PortfolioCard data={elem} onClick={() => navigate(elem?.alias)} />
            </Grid>
          )}
        </Grid>
        {!isLoading && count !== projects.length ? (
          <Grid display={'flex'} justifyContent={'center'} marginTop={isTablet ? '20px' : '45px'}>
            <Button className='btn-review' variant='standart' onClick={() => fetchNextPage()}>Переглянути ще</Button>
          </Grid>
        ) : null}
      </div>
    </>

  )
}

export default Portfolio