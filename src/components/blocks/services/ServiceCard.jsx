import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { getImageSrc } from '../../../services/settingApiService'

const ServiceCard = ({ data, onClick }) => {
  return (
    <Box
      bgcolor={'var(--block-background-color)'}
      boxShadow={'0px 4px 25px rgba(27, 33, 29, 0.6)'}
      borderRadius={'var(--page-border-radius)'}
      padding={5}
    >
      <img src={getImageSrc(data.image)} style={{
        display: 'flex',
        alignItems: 'end',
        width: '100%',
        aspectRatio: '2.4',
        borderRadius: 'var(--block-border-radius)'
      }}
      />
      <Typography
        marginTop={'30px'}
        variant='h4'
        fontFamily={'inherit'}
        fontWeight={'400'}
      >{data.title}
      </Typography>
      <Typography
        margin={'40px 0'}
        variant='h6'
        fontFamily={'inherit'}
        fontWeight={'400'}
      >{data.description}
      </Typography>
      <Box
        display={'flex'}
        justifyContent={'right'}
        >
        <Button
          sx={{ color: 'var(--theme-color)', fontFamily: 'inherit', textTransform: 'none', fontSize: '16px' }}
          variant='text'
          color='primary'
          onClick={onClick}>
          Дізнатися більше
        </Button>
      </Box>
    </Box>
  )
}

export default ServiceCard