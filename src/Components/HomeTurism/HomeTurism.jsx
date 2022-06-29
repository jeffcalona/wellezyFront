import React, { useRef } from 'react'
import { Grid } from '@mui/material'
import SantaMartaImg from './Assets/Img/SantaMarta.jpeg'
import CartagenaImg from './Assets/Img/Cartagena.jpeg'
import LaGuajiraImg from './Assets/Img/LaGuajira.jpeg'
import LaMacarenaImg from './Assets/Img/LaMacarena.jpeg'
import GuatapeImg from './Assets/Img/Guatape.jpeg'
import { motion } from 'framer-motion'

import './Assets/styles.css'
import CardHomeTurism from '../CardHomeTurism/CardHomeTurism'
import styled from 'styled-components'

const cardInfo = [
  { img: SantaMartaImg, title: 'Santa Marta', description: 'Parque Nacional Tairona' },
  { img: CartagenaImg, title: 'Cartagena', description: 'Ciudad Amurallada' },
  { img: LaGuajiraImg, title: 'La Guajira', description: 'Desiertos' },
  { img: LaMacarenaImg, title: 'La Macarena - Meta', description: 'Caño Cristales' },
  { img: GuatapeImg, title: 'Guatapé', description: 'Piedra del Peñol' },
  { img: CartagenaImg, title: 'Cartagena', description: 'Ciudad Amurallada' }
]



const MotionConstraints = styled(motion.div)`
  overflow-x: hidden;
`;

const MotionBox = styled(motion.div)`
  width: 100vw;
`

const HomeTurism = () => {
  
  const constraintsRef = useRef(null)

  return (
    <div className='homeTurism'>
      <h1>Turismo</h1>
      <MotionConstraints className='slider_container' ref={constraintsRef}>
        <MotionBox className='slider' drag='x' dragConstraints={constraintsRef}>
          {
            cardInfo.map((info, index) => {
              return (
                <motion.div key={index} className='div_homeTurism'>
                  <Grid item xs={6} sm={6} md={3} lg={2} className='grid_cardHomeTurism'>
                    <CardHomeTurism cardImage={info.img} cardTitle={info.title} cardDescription={info.description}/>
                  </Grid>
                </motion.div>
              )
            })
          }
        </MotionBox>
      </MotionConstraints>
    </div>
  )
}

export default HomeTurism;



/*
return (
    <div className='homeTurism'>
      <h1>Turismo</h1>
      <Grid container className='Grid_homeTurism'>
        {
          cardInfo.map((info, index) => {
            return (
              <div key={index} className='div_homeTurism'>
                <Grid item xs={6} sm={6} md={3} lg={2} className='grid_cardHomeTurism'>
                  <CardHomeTurism cardImage={info.img} cardTitle={info.title} cardDescription={info.description}/>
                </Grid>
              </div>
            )
          })
        }
      </Grid>
    </div>
  )*/