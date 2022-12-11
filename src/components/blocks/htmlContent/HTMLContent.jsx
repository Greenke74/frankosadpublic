import { Box } from '@mui/material'
import React from 'react'

const HTMLContent = ({ blockData }) => {

  return (
    <Box
      bgcolor={'var(--block-background-color)'}
      padding={'45px'}
      borderRadius={'var(--page-border-radius)'}
      fontSize={'24px'}
      dangerouslySetInnerHTML={{ __html: blockData?.data?.content }} />
  )
}

export default HTMLContent