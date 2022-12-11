import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getProjectBlocks } from '../services/projects-api-service'
import BlocksList from '../components/blocks/BlocksList.jsx';


const ProjectPage = () => {
  
  const{alias} = useParams()

  const{data: projectData} = useQuery(`projectId+${alias}`, () => getProjectBlocks(alias))

  projectData?.blocks?.sort((a, b) => a?.position - b?.position)

  return (
    <>
      <BlocksList blocksData={projectData?.blocks} blockTypes={(projectData?.blocks??[]).map(item => item?.type)}/>
    </>
  )
}

export default ProjectPage