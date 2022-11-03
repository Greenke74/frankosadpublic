import React, { useState, useEffect } from 'react'
import StepCard from './StepCard.jsx'
import { motion, AnimatePresence } from 'framer-motion';
import { Grid } from '@mui/material';
import './stepByStep.scss'

const StepByStepInfo = ({ onLoadEnd }) => {

  const data = {
    value: 'Ландшафтний дизайн від Франко Сад це',
    info: [
      {
        id: '01',
        infoName: 'Гарантія якості',
        description: 'Ми одна з провідних компаній у сфері виконання ландшафтних робіт різних типів складності, якісно та в сучасному стилі.',
        img: 'img1.png'
      },
      {
        id: '02',
        infoName: 'Комплексний догляд',
        description: 'Ми одна з провідних компаній у сфері виконання ландшафтних робіт різних типів складності, якісно та в сучасному стилі.',
        img: 'img2.png'
      },
      {
        id: '03',
        infoName: 'Професійний підхід',
        description: 'Облаштування ландшафту — це забезпечення бажаної краси та естетика для вашої території, що залишиться з вами надовго та буде приносити приємні емоції від перебування поруч.для вашої території, що залишитьОблаштування ландшафту — це забезпечення бажаної краси та естетика для вашої території, що залишиться з вами надовго та буде приносити приємні емоції від перебування поруч.для вашої території, що залишить',
        img: 'img3.png'
      }
    ]
  }

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    onLoadEnd();
  }, [])

  return (
    <div className='step-by-step-info-root'>
      <h2 className='title'>{data.value}</h2>
      <div className='step-by-step-info-wrapper'>
        {data.info.map((elem, index) =>
          <StepCard data={elem} key={index} index={index} setSelected={setSelected} />
        )}
      </div>
    </div>
  )
}

export default StepByStepInfo