import React from 'react'
import { CircularProgress, LinearProgress, styled } from '@mui/material'

export const Spinner = () => {
	return (
		<div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: '25px 0'}}>
			<CircularProgress size={30} style={{ color: 'var(--theme-color)' }} />
		</div>
	)
}


export const StyledLinearProgress = styled(LinearProgress)({
	'&': {
	  backgroundColor: 'var(--disabled-color)',
	},
	'& .MuiLinearProgress-bar': {
	  backgroundColor: 'var(--theme-color)'
	}
  })
  