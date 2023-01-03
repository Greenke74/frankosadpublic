import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getProjectPage } from '../services/projects-api-service'
import BlocksList from '../components/blocks/BlocksList.jsx';
import { useDispatch } from 'react-redux';
import { breadcrumbsSlice } from '../redux/slices/breadcrumbsSlice';


const ProjectPage = () => {
  
  const{alias} = useParams()
  
  const{data: projectData} = useQuery(`projectId+${alias}`, () => getProjectPage(alias))
  
  projectData?.data?.blocks?.sort((a, b) => a?.position - b?.position)
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    const breadcrumb = {
      breadcrumb: projectData?.data?.title,
      path: `/portfolio/${projectData?.data?.alias}`
    }
      dispatch(breadcrumbsSlice.actions.update(breadcrumb))
  }, [projectData])

  return (
    <>
      <BlocksList blocksData={projectData?.data?.blocks} blockTypes={(projectData?.data?.blocks??[]).map(item => item?.type)}/>
    </>
  )
}

export default ProjectPage