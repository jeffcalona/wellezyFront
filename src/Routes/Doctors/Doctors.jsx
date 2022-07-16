import React from 'react'

import './Assets/styles.css'
import DoctorsHeader from '../../Components/DoctorsHeader/DoctorsHeader'
import DoctorsList from '../../Components/DoctorsList/DoctorsList'
import { Grid } from '@mui/material'

const Doctors = () => {

  return (
    <Grid container justifyContent='center'>
        <DoctorsHeader title='doctores' description='los mejores cirujanos' />
        <DoctorsList />
    </Grid>
  )
}

export default Doctors