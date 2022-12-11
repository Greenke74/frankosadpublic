import React from 'react';
import { useMediaQuery } from '@mui/material';

const PageBlock = ({ component: Component, fullWidth, blockData }) => {
	const isDesktop = useMediaQuery('(min-width:991px)');
	const isLaptop = useMediaQuery('(min-width:540px)');
	const isLarge = useMediaQuery('(min-width:1641px)');

	return (
		
			<section style={{
				margin: '0 auto',
				marginTop: fullWidth ? 0 : isLarge ? '50px' : isDesktop ? '25px' : '15px',
				marginBottom: fullWidth ? 0 : isLarge ? '50px' : isDesktop ? '25px' : '15px',
				width: '100%',
				maxWidth: fullWidth
					? '100%'
					: isLarge
						? 'var(--max-content-width)'
						: `calc(100% - ${isLaptop? '40px' : '20px'})`

			}}>
				<Component blockData={blockData} />
			</section>
		)
}

export default PageBlock