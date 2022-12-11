import React from 'react'
import { useQuery } from 'react-query';
import BlocksList from '../components/blocks/BlocksList.jsx';
import { getMainPageBlocks } from '../services/main_page_block_service.js';


const MainPage = () => {

  const{ data: mainPageBlocksData} = useQuery('mainPageBlocksId', () => getMainPageBlocks())

  mainPageBlocksData?.data?.sort((a, b) => a?.position - b?.position)
  
  return (
    <>
      <BlocksList blocksData={mainPageBlocksData?.data} blockTypes={(mainPageBlocksData?.data??[]).map(item => item?.type)} />
    </>
  )
}

export default MainPage;
