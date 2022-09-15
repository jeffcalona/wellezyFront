import { Grid } from '@mui/material'
import React from 'react'
import DoctorsHeader from '../../Components/DoctorsHeader/DoctorsHeader'
import NurseList from '../../Components/NurseList/NurseList'
import NurseHeaderImg from './Assets/img/NurseHeaderImg.jpg'

const Nurses = () => {
  return (
    <Grid container justifyContent='center'>
      <DoctorsHeader title='enfermeras' description='las mejores enfermeras' headerImg={NurseHeaderImg}/>
      <NurseList />
    </Grid>
  )
}

export default Nurses