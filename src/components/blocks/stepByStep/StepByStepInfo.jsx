import React from 'react'
import StepCard from './StepCard.jsx'
import './stepByStep.scss'

const StepByStepInfo = ({ blockData }) => {
  
  return (
    <div className='step-by-step-info-root'>
      <h2 className='title'>{blockData?.data?.stepsBlockTitle}</h2>
      <div className='step-by-step-info-wrapper'>
        {blockData?.data?.steps?.map((elem, idx) =>
          <StepCard data={elem} number={idx+1} key={idx} />
        )}
      </div>
    </div>
  )
}

export default StepByStepInfo