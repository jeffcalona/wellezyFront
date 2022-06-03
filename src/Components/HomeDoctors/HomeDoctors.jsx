import { CardMedia, Grid } from '@mui/material'
import React from 'react'

import PrincipalImg from './Assets/Img/Principal.png'

import './Assets/styles.css'

const HomeDoctors = () => {
  return (
    <Grid container justifyContent='center'>
      <Grid className='HomeDoctors'>
        <h1>Doctores</h1>
        <Grid xs={12} sm={6} md={3} lg={2}>
          <div className='div_PrincipalImg'>
            <CardMedia component='img' image={PrincipalImg} className='HomeDoctors_PrincipalImg'/>
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomeDoctors