import React, { useEffect } from 'react'
import { useMediaQuery, Grid } from '@mui/material'
import './statisticCounter.scss'

const StatisticCounter = ({ onLoadEnd }) => {
  const isDesktop = useMediaQuery('(min-width: 900px)');

  const dataStatistic = [
    { value: 'Здано об’єктів', count: '65' },
    { value: 'Років на ринку', count: '4' },
    { value: 'Людей в команді', count: '15' }
  ]


  useEffect(() => {
    onLoadEnd();
  }, [])

  return (
    <div className='statistic-counter-root' >
      <div className='statistic-counter-wrapper' style={{
        display: 'flex',
        margin: '0 auto',
        gap: 50,
        flexDirection: isDesktop ? 'row' : 'column',
        flexWrap: 'nowrap'
      }}>

          <Grid container spacing={isDesktop ? 5 : 3} padding={isDesktop ? '40px 0' : '20px 0'} >
            {dataStatistic.map((elem, index) =>
              <Grid key={index} item xs={12} sm={12} md={4}>
                <div className='card'>
                  <h3 className='title'>
                    {elem.value}
                  </h3>
                  <p className='counter'>
                    {elem.count}
                  </p>
                </div>
              </Grid>
            )}
          </Grid>
      </div>
    </div>
  )
}

export default StatisticCounter