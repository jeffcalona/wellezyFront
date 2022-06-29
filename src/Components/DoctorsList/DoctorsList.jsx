import React from 'react'
import './Assets/styles.css'
import newQuestions from '../../Api/newQuestions'
import { CardActions, Grid, IconButton } from '@mui/material'
import CardDoctors from '../CardDoctors/CardDoctors'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'

const apiDoctors = newQuestions[0].questions[5].response.doctors

const DoctorsList = () => {
  return (
    <Grid className='doctors_list' container direction='row' alignItems='center' justifyContent='center' spacing={2}>
        {
            apiDoctors.map((doctor, index) => {
                return (
                    <Grid key={index} item>
                        <CardDoctors imgDoctor={doctor.avatar} nameDoctor={doctor.name} descriptionDoctor={doctor.description} cityDoctor={doctor.city} />
                    </Grid>
                )
            })
        }
        <CardActions className='doctorsList_arraws'>
            <IconButton className='arraw'><ArrowLeft2 size="40" color="#004274"/></IconButton>
            <IconButton className='arraw'><ArrowRight2 size="40" color="#004274"/></IconButton>
        </CardActions>
    </Grid>
  )
}

export default DoctorsList