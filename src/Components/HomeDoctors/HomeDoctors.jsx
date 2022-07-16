import { CardActions, CardMedia, Grid, IconButton } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import CardHomeDoctors from '../CardHomeDoctors/CardHomeDoctors'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import DrJuanMarioImg from './Assets/Img/DrJuanMario.png'
import DraNicoleImg from './Assets/Img/DraNicole.png'
import DrDanielCorreaImg from './Assets/Img/DrDanielCorrea.png'

import PrincipalImg from './Assets/Img/Principal.png'

import './Assets/styles.css'
import { Star1 } from 'iconsax-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const elementsDoctors = [
  {avatar: DrJuanMarioImg, name: 'Dr. Juan Mario Escobar', description: 'Cirujano Plástico', city: 'Medellín'},
  {avatar: DraNicoleImg, name: 'Dra. Nicole Echeverry Salja', description: 'Cirujana Plástica estética y reconstructiva', city: 'Medellín'},
  {avatar: DrDanielCorreaImg, name: 'Dr. Daniel Correa', description: 'Cirujano Plástico y Estético', city: 'Medellín'},
  {avatar: DrJuanMarioImg, name: 'Dr. Juan Mario Escobar', description: 'Cirujano Plástico', city: 'Medellín'}

]

const MotionConstraints = styled(motion.div)`
  overflow: hidden;
`;

const MotionBox = styled(motion.div)`
  width: 1000vw;
`

const HomeDoctors = () => {
  const constraintsRef = useRef(null)

  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    const getApiDoctors = async () => {
      await axios.get(process.env.REACT_APP_URL_API_DOCTORS).then((response) => {
        setDoctors(response.data.data)
      }).catch((err) => {
        console.log(err)
      })
    }
    getApiDoctors()
  }, [])
  

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
                  doctors.map((doctor, index) => {
                    return (
                      <Grid item key={index} className='grid_CardHomeDoctors'>
                        <Link to={`/doctor/${doctor.id}`}>
                          <CardHomeDoctors imgDoctor={`${process.env.REACT_APP_URL_API_IMGDOCTORS}${doctor.img}`} nameDoctor={doctor.name} descriptionDoctor={doctor.title} cityDoctor={doctor.city} starsNumber={doctor.stars} />
                        </Link>
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