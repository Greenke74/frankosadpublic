import { Button, Grid, MenuItem, Select, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import PortfolioCard from './PortfolioCard.jsx'
import './portfolio.scss'
import { useQuery } from 'react-query'
import { selectProjects } from '../../../services/projects-api-service.js'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const Portfolio = () => {

  const navigate = useNavigate()

  const isLaptop = useMediaQuery('(max-width: 1400px)')
  const isTablet = useMediaQuery('(max-width: 769px)')
  const isMobile = useMediaQuery('(max-width: 436px)')
  const isLarge = useMediaQuery('(min-width:1641px)');

  const [start, setStart] = useState(0)
  const [count, setCount] = useState(12)
  const [typeFilter, setTypeFilter] = useState('Всі проекти')

  const projectTypes = ['Всі проекти', 'Приватний будинок', 'Житловий комплекс', 'Підприємство']

  const [tempProjectsData, setTempProjectsData] = useState([])

  const { data: projectsData, isFetched } = useQuery(`projectsId+${typeFilter}+${count}`, () => typeFilter === 'Всі проекти'
    ? selectProjects({ start: start, count: count })
    : selectProjects({ start: start, count: count, typeFilter: typeFilter }))

  useEffect(() => {
    isFetched && setTempProjectsData(projectsData?.data)
  }, [projectsData])


  return (
    <>
      <div className='portfolio-container' style={{
        margin: '0 auto',
        width: '100%',
				maxWidth: isLarge
						? 'var(--max-content-width)'
						: `calc(100% - ${isLaptop? '20px' : '40px'})`
      }}>
        <Typography className='preview-title'>Наші роботи</Typography>
        <Select value={typeFilter} onChange={(event) => { setTypeFilter(event.target.value); setCount(12) }}
          sx={{
            color: 'var(--theme-color)',
            fontFamily: 'inherit',
            fontSize: 'calc(12px + 0.4vw)',
            marginBottom: '1.2vw',
            marginLeft: '20px',
            '& .MuiSelect-icon': { color: 'var(--theme-color)' }
          }}
          variant={'standard'}
          disableUnderline
        >
          {projectTypes.map((item, idx) =>
            <MenuItem sx={{
              color: 'var(--theme-color)',
              fontFamily: 'inherit'
            }} key={idx} value={item}>{item}</MenuItem>
          )}
        </Select>
        <Grid container spacing={isMobile ? '15px' : isLaptop ? '20px' : '25px'} >
          {tempProjectsData?.map((elem, index) =>
            <Grid xs={12} sm={6} lg={4} item key={index} >
              <PortfolioCard data={elem} onClick={() => navigate(elem?.alias)} />
            </Grid>
          )}
        </Grid>
        <Grid display={'flex'} justifyContent={'center'} marginTop={isTablet ? '20px' : '45px'}>
          <Button className='btn-review' variant='standart' onClick={() => setCount(count + 12)}>Переглянути ще</Button>
        </Grid>
      </div>
    </>

  )
}

export default Portfolio