import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';

import BlocksList from '../components/blocks/BlocksList.jsx';
import { getPage } from '../services/pages-service.js';

const MainPage = () => {
  

  return (
    <>
      <BlocksList blockTypes={['ServicesSlider','StepByStepInfo', 'StatisticCounter', 'PortfolioPreview']} />
    </>
  )
}

export default MainPage;
