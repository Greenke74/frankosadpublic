import { lazy } from 'react';

// blocks
const ServicesSlider = lazy(() => import('./slider/ServicesSlider.jsx'));
const StepByStepInfo = lazy(() => import('./stepByStep/StepByStepInfo.jsx'))
const StatisticCounter = lazy(() => import('./staticticCounter/StatisticCounter.jsx'))

export const getBlocks = (type) => {
	const blocks = [
		{
			component: ServicesSlider,
			type: 'ServicesSlider',
			fullWidth: true
		},
		{
			component: StepByStepInfo,
			type: 'StepByStepInfo'
		},
		{
			component: StatisticCounter,
			type: 'StatisticCounter',
			fullWidth: true
		}
	]

	return type ? blocks.find(b => b.type === type) : blocks;
}