import { Grid } from '@material-ui/core'
import React from 'react'
import FlightsCheckoutData from '../../Components/FlightsCheckoutData/FlightsCheckoutData'
import FlightsCheckoutDetail from '../../Components/FlightsCheckoutDetail/FlightsCheckoutDetail'
import './Assets/styles.css'

const FlightsCheckout = () => {
  return (
    <Grid container justifyContent='center' >
        <div style={{ width: '100%', height: '85px' , backgroundColor: '#004274'}} />
        <div className='flightsCheckout_'>
          <FlightsCheckoutData />
          <FlightsCheckoutDetail />
        </div>
    </Grid >
  )
}

export default FlightsCheckout