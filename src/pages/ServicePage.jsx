import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import BlocksList from '../components/blocks/BlocksList'
import { breadcrumbsSlice } from '../redux/slices/breadcrumbsSlice'
import { getServicePage } from '../services/services-api-service'

const ServicePage = () => {

  const{alias} = useParams()

  const{data: serviceData} = useQuery(`serviceId+${alias}`, () => getServicePage(alias))

  const breadcrumb = {
    breadcrumb: serviceData?.data?.title,
    path: `/services/${serviceData?.data?.alias}`
  }

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(breadcrumbsSlice.actions.update(breadcrumb))
  }, [serviceData])

  return (
    <BlocksList blocksData={serviceData?.data?.blocks} blockTypes={(serviceData?.data?.blocks??[]).map(item => item?.type)}/>
  )
}

export default ServicePage