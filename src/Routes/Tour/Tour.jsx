import { Grid } from '@mui/material'
import React from 'react'
import TourDetail from '../../Components/TourDetail/TourDetail'

const Tour = () => {
  return (
      <Grid container justifyContent='center'>
        <div style={{ width: '100%', height: '85px' , backgroundColor: '#004274'}} />
        <TourDetail />
    </Grid>
  )
}

export default Tour