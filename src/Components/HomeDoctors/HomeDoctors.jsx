import { CardActions, CardMedia, Grid, IconButton } from '@mui/material'
import React, { useRef } from 'react'
import CardHomeDoctors from '../CardHomeDoctors/CardHomeDoctors'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import DrJuanMarioImg from './Assets/Img/DrJuanMario.png'
import DraNicoleImg from './Assets/Img/DraNicole.png'
import DrDanielCorreaImg from './Assets/Img/DrDanielCorrea.png'

import PrincipalImg from './Assets/Img/Principal.png'

import './Assets/styles.css'
import { Star1 } from 'iconsax-react'

const elementsDoctors = [
  {img: DrJuanMarioImg, name: 'Dr. Juan Mario Escobar', description: 'Cirujano Plástico', city: 'Medellín'},
  {img: DraNicoleImg, name: 'Dra. Nicole Echeverry Salja', description: 'Cirujana Plástica estética y reconstructiva', city: 'Medellín'},
  {img: DrDanielCorreaImg, name: 'Dr. Daniel Correa', description: 'Cirujano Plástico y Estético', city: 'Medellín'},
  {img: DrJuanMarioImg, name: 'Dr. Juan Mario Escobar', description: 'Cirujano Plástico', city: 'Medellín'}

]

const MotionConstraints = styled(motion.div)`
  overflow: hidden;
`;

const MotionBox = styled(motion.div)`
  width: 150vw;
`

const HomeDoctors = () => {
  const constraintsRef = useRef(null)
  return (
    <Grid container justifyContent='center'>
      <div className='div_HomeDoctors'>
        <Grid /*contner*/ className='HomeDoctors'>
          <h1>Doctores</h1>
          <div className='div_PrincipalImg'>
            <CardMedia component='img' image={PrincipalImg} className='HomeDoctors_PrincipalImg'/>
            <div className='principal_Action'>
              <CardActions>
                <IconButton className=''>
                  <Star1 className='star_Principal' size="26" color='#FFB82E'/>
                </IconButton>
              </CardActions>
            </div>
          </div>
          <MotionConstraints className='sliderContainer_doctors' ref={constraintsRef}>
            <MotionBox className='slider_doctors' drag='x' dragConstraints={constraintsRef}>
                {
                  elementsDoctors.map((doctor, index) => {
                    return (
                      <Grid item key={index} className='grid_CardHomeDoctors'>
                        <CardHomeDoctors imgDoctor={doctor.img} nameDoctor={doctor.name} descriptionDoctor={doctor.description} cityDoctor={doctor.city} />
                      </Grid>
                    )
                  })
                }
            </MotionBox>
          </MotionConstraints>
        </Grid>
      </div>
    </Grid>
  )
}

export default HomeDoctors