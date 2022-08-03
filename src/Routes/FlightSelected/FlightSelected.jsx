import { Grid } from '@mui/material'
import React from 'react'
import FlightSelectedDetail from '../../Components/FlightSelectedDetail/FlightSelectedDetail'

const FlightSelected = () => {
  return (
    <Grid container justifyContent='center'>
      <div style={{ width: '100%', height: '85px' , backgroundColor: '#004274'}} />
      <FlightSelectedDetail />
    </Grid>
  )
}

export default FlightSelected