import React, { useState, useEffect, Suspense } from 'react';
import PageBlock from './PageBlock.jsx';
import { getBlocks } from './blocks.js';
import { Spinner } from '../common/Spinner.jsx';

const BlocksList = ({ blocksData, blockTypes }) => {
	const [blocks, setBlocks] = useState([]);

	useEffect(() => {
		setBlocks(blockTypes.map(blockType => getBlocks(blockType)).filter(block => block))
	}, [blockTypes])

	return (
		<>
			<Suspense fallback={<Spinner />} >
				{blocks.map((block, idx) => {
					const Component = block?.component;
					const blockData = blocksData?.find((blockData, index) => blockData?.type === block?.type && idx === index)

					return Component && (
						<PageBlock
							component={Component}
							fullWidth={block.fullWidth}
							blockData={blockData}
						/>
					)
				})}
			</Suspense>
		</>
	)
}

export default BlocksList