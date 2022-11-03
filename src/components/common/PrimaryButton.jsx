import React from 'react'
import { Button } from '@mui/material'
import { useMediaQuery } from '@mui/material'


const PrimaryButton = (props) => {
	const isDesktop = useMediaQuery('(min-width:991px)');
	return (
		<Button
			{...props}
			style={{
			}}

			sx={{
				textTransform: 'none',
				bgcolor: 'var(--theme-color)',
				color: 'var(--block-background-color)',
				padding: isDesktop ? '7px 20px' : '5px 10px',
				fontFamily: 'Montserrat, Arial, Helvetica, sans-serif',
				fontSize: isDesktop ? '16px' : '13px',
				lineHeight: 1.2,
				boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.25)',
				fontWeight: isDesktop ? 500 : 600,
				width: 'fit-content',
				'&:hover': {
					bgcolor: 'var(--active-color)',
				},
				...props.style
			}}
		>
			{props.children}
		</Button>
	)
}

export default PrimaryButton