import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';

const PageBlock = ({ component: Component, idx, loadedAmount, setLoadedAmount, fullWidth }) => {
	const isDesktop = useMediaQuery('(min-width:991px)');
	const isLaptop = useMediaQuery('(min-width:540px)');
	const isLarge = useMediaQuery('(min-width:1641px)');

	const [readyToLoad, setReadyToLoad] = useState(false);
	useEffect(() => {
		let mounted = true;
		if (!readyToLoad && idx === loadedAmount && mounted) {
			setReadyToLoad(true);
		}
		return () => mounted = false;
	}, [loadedAmount])

	const onLoadEnd = () => setLoadedAmount(idx + 1);

	return (
		readyToLoad && (
			<section style={{
				margin: '0 auto',
				marginTop: fullWidth ? 0 : isDesktop ? '50px' : '15px',
				marginBottom: fullWidth ? 0 : isDesktop ? '50px' : '15px',
				width: '100%',
				maxWidth: fullWidth
					? '100%'
					: isLarge
						? 'var(--max-content-width)'
						: `calc(100% - ${isLaptop? '40px' : '20px'})`

			}}>
				<Component onLoadEnd={onLoadEnd} />
			</section>
		))
}

export default PageBlock