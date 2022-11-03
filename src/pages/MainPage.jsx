import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';

import BlocksList from '../components/blocks/BlocksList.jsx';
import { getPage } from '../services/pages-service.js';

const MainPage = () => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    getPage('mainPage').then(page => {
      console.log(page);
      setPageData(page);
    })

  }, [])
  
  return (
    <>
      <BlocksList />
    </>
  )
}

export default MainPage;
