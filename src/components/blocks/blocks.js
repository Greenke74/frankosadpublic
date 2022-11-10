import { lazy } from 'react';

// blocks
const ServicesSlider = lazy(() => import('./slider/ServicesSlider.jsx'));
const StepByStepInfo = lazy(() => import('./stepByStep/StepByStepInfo.jsx'))
const StatisticCounter = lazy(() => import('./staticticCounter/StatisticCounter.jsx'))

const Portfolio = lazy(() => import('./portfolio/Portfolio.jsx'))
const PortfolioPreview = lazy(() => import('./portfolio/PortfolioPreview.jsx'))

const Services = lazy(() => import('./services/Services.jsx'))
 

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
		},
		{
			component: Portfolio,
			type: 'Portfolio'
		},
		{
			component: PortfolioPreview,
			type: 'PortfolioPreview'
		}
		,
		{
			component: Services,
			type: 'Services'
		}
	]

	return type ? blocks.find(b => b.type === type) : blocks;
}