import { CardMedia, Grid } from '@mui/material'
import React from 'react'
import CardHomeDoctors from '../CardHomeDoctors/CardHomeDoctors'

import DrJuanMarioImg from './Assets/Img/DrJuanMario.png'
import DraNicoleImg from './Assets/Img/DraNicole.png'
import DrDanielCorreaImg from './Assets/Img/DrDanielCorrea.png'

import PrincipalImg from './Assets/Img/Principal.png'

import './Assets/styles.css'

const elementsDoctors = [
  {img: DrJuanMarioImg, name: 'Dr. Juan Mario Escobar', description: 'Cirujano Plástico', city: 'Medellín'},
  {img: DraNicoleImg, name: 'Dra. Nicole Echeverry Salja', description: 'Cirujana Plástica estética y reconstructiva', city: 'Medellín'},
  {img: DrDanielCorreaImg, name: 'Dr. Daniel Correa', description: 'Cirujano Plástico y Estético', city: 'Medellín'},

]

const HomeDoctors = () => {
  return (
    <Grid container justifyContent='center'>
      <div className='div_HomeDoctors'>
        <Grid container className='HomeDoctors'>
          <h1>Doctores</h1>
          <Grid xs={3}>
            <div className='div_PrincipalImg'>
              <CardMedia component='img' image={PrincipalImg} className='HomeDoctors_PrincipalImg'/>
            </div>
          </Grid>
          <Grid container direction='row' alignItems='center' justifyContent='center' xs={9} spacing={4}>
            {
              elementsDoctors.map((doctor, index) => {
                return (
                  <Grid item key={index} className='grid_CardHomeDoctors'>
                    <CardHomeDoctors imgDoctor={doctor.img} nameDoctor={doctor.name} descriptionDoctor={doctor.description} cityDoctor={doctor.city} />
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>
      </div>
    </Grid>
  )
}

export default HomeDoctors