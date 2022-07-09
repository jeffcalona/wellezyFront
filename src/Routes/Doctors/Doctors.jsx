import React, { useEffect, useState } from 'react'

import './Assets/styles.css'
import DoctorsHeader from '../../Components/DoctorsHeader/DoctorsHeader'
import DoctorsList from '../../Components/DoctorsList/DoctorsList'
import { Grid } from '@mui/material'

const Doctors = () => {

  return (
    <Grid container justifyContent='center'>
        <DoctorsHeader />
        <DoctorsList />
    </Grid>
  )
}

export default Doctors