import { Grid } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import DoctorDetail from '../../Components/DoctorDetail/DoctorDetail'

const Doctor = () => {

  const partams = useParams()
  const { slug } = partams

  return (
    <Grid container justifyContent='center'>
        <div style={{ width: '100%', height: '85px' , backgroundColor: '#004274'}} />
        <h1>{slug}</h1>
        <DoctorDetail />
    </Grid>
  )
}

export default Doctor