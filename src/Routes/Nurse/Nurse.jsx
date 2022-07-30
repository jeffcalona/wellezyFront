import { Grid } from '@mui/material'
import React from 'react'
import NurseDetail from '../../Components/NurseDetail/NurseDetail'

const Nurse = () => {
  return (
    <Grid container justifyContent='center'>
        <div style={{ width: '100%', height: '90px' , backgroundColor: '#004274'}} />
        <NurseDetail />
    </Grid>
  )
}

export default Nurse