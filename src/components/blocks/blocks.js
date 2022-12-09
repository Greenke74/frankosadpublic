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
			type: 'slider',
			fullWidth: true
		},
		{
			component: StepByStepInfo,
			type: 'stepByStep'
		},
		{
			component: StatisticCounter,
			type: 'counter',
			fullWidth: true
		},
		{
			component: Portfolio,
			type: 'portfolio'
		},
		{
			component: PortfolioPreview,
			type: 'portfolioPreview'
		}
		,
		{
			component: Services,
			type: 'services'
		}
	]

	return type ? blocks.find(b => b.type === type) : blocks;
}