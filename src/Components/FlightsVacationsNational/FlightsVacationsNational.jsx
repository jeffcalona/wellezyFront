import { Grid } from '@mui/material';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import '../HomeTurism/Assets/styles.css'
import SantaMartaImg from '../HomeTurism/Assets/Img/SantaMarta.jpeg'
import CartagenaImg from '../HomeTurism/Assets/Img/Cartagena.jpeg'
import LaGuajiraImg from '../HomeTurism/Assets/Img/LaGuajira.jpeg'
import LaMacarenaImg from '../HomeTurism/Assets/Img/LaMacarena.jpeg'
import GuatapeImg from '../HomeTurism/Assets/Img/Guatape.jpeg'
import { motion } from 'framer-motion'
import CardHomeTurism from '../CardHomeTurism/CardHomeTurism';

const cardInfo = [
    { id: 1, img: SantaMartaImg, title: 'Santa Marta', description: 'Parque Nacional Tairona', stars: 4 },
    { id: 2, img: CartagenaImg, title: 'Cartagena', description: 'Ciudad Amurallada', stars: 4  },
    { id: 3, img: LaGuajiraImg, title: 'La Guajira', description: 'Desiertos', stars: 5 },
    { id: 4, img: LaMacarenaImg, title: 'La Macarena - Meta', description: 'Caño Cristales', stars: 5 },
    { id: 5, img: GuatapeImg, title: 'Guatapé', description: 'Piedra del Peñol', stars: 5 },
    { id: 6, img: CartagenaImg, title: 'Cartagena', description: 'Ciudad Amurallada', stars: 4 }
  ]
  
  const MotionConstraints = styled(motion.div)`
    overflow-x: hidden;
  `;
  
  const MotionBox = styled(motion.div)`
    width: 200vw;
  `

const FlightsVacationsNational = () => {
    const constraintsRef = useRef(null)
  return (
    <div style={{ fontFamily: 'Inter', textAlign: 'center', margin: '32px auto', marginTop: '40px' }}>
        <Link to='/turism'>
            <h1 style={{ color: 'black', textTransform: 'capitalize', fontWeight: 400 }}>vacaciones a destinos nacionales</h1>
        </Link>
        <MotionConstraints className='slider_container' ref={constraintsRef}>
            <MotionBox className='slider_' drag='x' dragConstraints={constraintsRef}>
            {
                cardInfo.map((info) => {
                return (
                    <motion.div className='div_homeTurism' key={info.id}>
                        <Grid item xs={6} sm={6} md={3} lg={2} className='grid_cardHomeTurism'>
                            <CardHomeTurism cardImage={info.img} cardTitle={info.title} cardDescription={info.description} star={info.stars} link={`/tour/${info.id}`}/>
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

export default FlightsVacationsNational