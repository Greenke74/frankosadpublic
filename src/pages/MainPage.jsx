import React from 'react'
import BlocksList from '../components/blocks/BlocksList.jsx';

const MainPage = () => {
  

  return (
    <>
      <BlocksList blockTypes={['ServicesSlider','StepByStepInfo', 'StatisticCounter', 'PortfolioPreview']} />
    </>
  )
}

export default MainPage;
