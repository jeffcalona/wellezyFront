import { Grid } from '@mui/material'
import React from 'react'
import DoctorsHeader from '../../Components/DoctorsHeader/DoctorsHeader'
import TransportsList from '../../Components/TransportsList/TransportsList'
import Vehicles from './Assets/Img/Vehicles.jpg'

const Transports = () => {
  return (
    <Grid container justifyContent='center'>
      <DoctorsHeader title='Vehículos' description='los vehículos más comodos' headerImg={Vehicles}/>
      <TransportsList />
    </Grid>
  )
}
export default Transports