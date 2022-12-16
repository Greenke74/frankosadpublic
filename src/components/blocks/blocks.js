import { lazy } from 'react';

// blocks
const ServicesSlider = lazy(() => import('./slider/ServicesSlider.jsx'));
const StepByStepInfo = lazy(() => import('./stepByStep/StepByStepInfo.jsx'))
const StatisticCounter = lazy(() => import('./staticticCounter/StatisticCounter.jsx'))

const Portfolio = lazy(() => import('./portfolio/Portfolio.jsx'))
const PortfolioPreview = lazy(() => import('./portfolio/PortfolioPreview.jsx'))

const PictureDescription = lazy(() => import('./pictureDescription/PictureDescription.jsx'))
const PictureParagraph = lazy(() => import('./pictureParagraph/PictureParagraph.jsx'))

const HTMLContent = lazy(() => import('./htmlContent/HTMLContent.jsx'))

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
		},
		{
			component: PictureDescription,
			type: 'pictureDescription'
		},
		{
			component: PictureParagraph,
			type: 'pictureParagraph'
		},
		{
			component: Services,
			type: 'services'
		},
		{
			component: HTMLContent,
			type: 'htmlContent'
		}
	]

	return type ? blocks.find(b => b.type === type) : blocks;
}