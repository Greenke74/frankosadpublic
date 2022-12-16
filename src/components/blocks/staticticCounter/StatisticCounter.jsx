import React from 'react'
import { useMediaQuery, Grid } from '@mui/material'
import './statisticCounter.scss'

const StatisticCounter = ({ blockData }) => {
  const isDesktop = useMediaQuery('(min-width: 900px)');

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
          {blockData?.data?.counters?.map((elem, idx) =>
            <Grid key={idx} item xs={12} sm={12}
              md={12 / blockData?.data?.counters?.length}
                >
              <div className='card'>
                <h3 className='title'>
                  {elem.title}
                </h3>
                <p className='counter'>
                  {elem.counter}
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