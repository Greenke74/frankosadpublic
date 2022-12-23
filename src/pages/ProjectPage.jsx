import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getProjectWithBlocksByAlias } from '../services/projects-api-service'
import BlocksList from '../components/blocks/BlocksList.jsx';


const ProjectPage = () => {
  
  const{alias} = useParams()

  const{data: projectData} = useQuery(`projectId+${alias}`, () => getProjectWithBlocksByAlias(alias))

  projectData?.data?.blocks?.sort((a, b) => a?.position - b?.position)

  return (
    <>
      <BlocksList blocksData={projectData?.data?.blocks} blockTypes={(projectData?.data?.blocks??[]).map(item => item?.type)}/>
    </>
  )
}

export default ProjectPage