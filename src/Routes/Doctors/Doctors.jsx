import React from 'react'

import './Assets/styles.css'
import DoctorsHeader from '../../Components/DoctorsHeader/DoctorsHeader'
import DoctorsList from '../../Components/DoctorsList/DoctorsList'
import { Grid } from '@mui/material'
import portadaDoctors from './Assets/Img/portadaDoctors.jpg'

const Doctors = () => {

  return (
    <Grid container justifyContent='center'>
        <DoctorsHeader title='doctores' description='los mejores cirujanos' headerImg={portadaDoctors}/>
        <DoctorsList />
    </Grid>
  )
}

export default Doctors