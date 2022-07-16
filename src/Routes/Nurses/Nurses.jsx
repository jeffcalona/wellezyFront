import { Grid } from '@mui/material'
import React from 'react'
import DoctorsHeader from '../../Components/DoctorsHeader/DoctorsHeader'
import NurseList from '../../Components/NurseList/NurseList'

const Nurses = () => {
  return (
    <Grid container justifyContent='center'>
      <DoctorsHeader title='enfermeras' description='las mejores enfermeras' />
      <NurseList />
    </Grid>
  )
}

export default Nurses