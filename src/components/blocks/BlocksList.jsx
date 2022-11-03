import React, { useState, useEffect, Suspense } from 'react';
import PageBlock from './PageBlock.jsx';
import { getBlocks } from './blocks.js';
import { Spinner } from '../common/Spinner.jsx';

const BlocksList = ({ blockTypes }) => {
	const [loadedAmount, setLoadedAmount] = useState(0);
	const [blocks, setBlocks] = useState([]);

	useEffect(() => {
		setBlocks(blockTypes.map(blockType => getBlocks(blockType)).filter(block=>block))
	}, [blockTypes])
	
	return (
		<>
			{blocks.map((block, idx) => {
				const Component = block?.component;
			
				return Component && (
					<Suspense fallback={<Spinner />} key={`${idx}`} >
						<PageBlock
							idx={idx}
							loadedAmount={loadedAmount}
							setLoadedAmount={setLoadedAmount}
							component={Component}
							fullWidth={block.fullWidth}
						/>
					</Suspense>
				)
			})}
		</>
	)
}

export default BlocksList