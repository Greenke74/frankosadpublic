import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, Button, Grid, MenuItem, Select, Typography, useMediaQuery } from '@mui/material'
import PortfolioCard from './PortfolioCard.jsx'

import { selectProjects, getPublishedProjectsCount } from '../../../services/projects-api-service.js'

import './portfolio.scss'
import { useInfiniteQuery, useQuery } from 'react-query'

const projectTypes = [
  "Всі проєкти",
  "Приватний будинок",
  "Житловий комплекс",
  "Підприємство",
];

const Portfolio = () => {

  const navigate = useNavigate()

  const isLaptop = useMediaQuery('(max-width: 1400px)')
  const isTablet = useMediaQuery('(max-width: 769px)')
  const isMobile = useMediaQuery('(max-width: 436px)')
  const isLarge = useMediaQuery('(min-width:1641px)');

  const [typeFilter, setTypeFilter] = useState(projectTypes[0])

  const {data: count } = useQuery(`projects-count-${typeFilter}`, () => getPublishedProjectsCount(typeFilter))

  const {
    data: projectsData,
    fetchNextPage,
    isLoading
  } = useInfiniteQuery(
    [`projects`, typeFilter],
    ({ pageParam }) =>
      selectProjects({
        start: pageParam?.start ?? 0,
        count: pageParam?.count ?? 12,
        typeFilter,
      }),
    {
      getNextPageParam: (lastPage) => ({
        start: lastPage.offset,
        count: 12,
        typeFilter: lastPage?.typeFilter,
      }),
    }
  )

  let projects = [];
  (projectsData?.pages ?? []).forEach(page => projects = [...projects, ...page?.data])

  return (
    <>
      <Box
        className="portfolio-container"
        sx={{
          m: "0 auto",
          width: "100%",
          maxWidth: isLarge
            ? "var(--max-content-width)"
            : `calc(100% - ${isLaptop ? "20px" : "40px"})`,
          p: 3,
        }}
      >
        <Box
          display='flex'
          justifyContent={'space-between'}
          alignItems={'end'}
          sx={{ background: 'linear-gradient(90deg, #2A2F23 0%, #1D2620 100%)' }}
          boxShadow='0px 0px 15px rgba(69, 84, 74, 0.2)'
          borderRadius='var(--page-border-radius)'
          marginBottom={isMobile ? '15px' : isLaptop ? '20px' : '25px'}
          padding={'0.3vw 3vw'}
        >
          <Typography variant="h1">Наші роботи</Typography>
          <Select
            value={typeFilter}
            onChange={(event) => {
              setTypeFilter(event.target.value);
            }}
            sx={{
              color: 'var(--white)',
              fontFamily: 'inherit',
              fontSize: 'calc(12px + 0.4vw)',
              fontWeight: '500',
              '& .MuiSelect-icon': { color: 'var(--white)' }
            }}
            variant={"standard"}
            disableUnderline
          >
            {projectTypes.map((item, idx) =>
              <MenuItem sx={{
                color: item === typeFilter ? 'var(--theme-color)' : 'var(--white)',
                fontFamily: 'inherit',
                fontSize: 'calc(10px + 0.4vw)',
                fontWeight: '500',
              }} key={idx} value={item}>{item}</MenuItem>
            )}
          </Select>
        </Box>
        <Grid container spacing={3}>
          {projects.map((elem, index) => (
            <Grid xs={12} sm={6} lg={4} item key={index}>
              <PortfolioCard
                data={elem}
                onClick={() => navigate(elem?.alias)}
              />
            </Grid>
          ))}
        </Grid>
        {!isLoading && count !== projects.length ? (
          <Grid
            display={"flex"}
            justifyContent={"center"}
            marginTop={isTablet ? "20px" : "45px"}
          >
            <Button
              className="btn-review"
              variant="standart"
              onClick={() => fetchNextPage()}
            >
              Переглянути ще
            </Button>
          </Grid>
        ) : null}
      </Box>
    </>
  );
};

export default Portfolio;
