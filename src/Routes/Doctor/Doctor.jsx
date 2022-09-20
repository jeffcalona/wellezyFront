import { Grid } from '@mui/material'
import React from 'react'
import DoctorDetail from '../../Components/DoctorDetail/DoctorDetail'

const Doctor = () => {

  return (
    <Grid container justifyContent='center'>
        <div style={{ width: '100%', height: '85px' , backgroundColor: '#004274'}} />
        <DoctorDetail />
    </Grid>
  )
}

export default Doctor