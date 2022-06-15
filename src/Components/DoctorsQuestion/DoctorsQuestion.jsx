import { Grid, IconButton } from '@mui/material'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React from 'react'
import CardQuestionDoctors from '../CardQuestionDoctors/CardQuestionDoctors'

import './Assets/styles.css'

const DoctorsQuestion = ({ question, presentQuestion, setUseDoctorComponent, useDoctorComponent }) => {
    
    const doctorSelected = (e) => {
        setUseDoctorComponent(!useDoctorComponent)
        console.log('Seleccionó', e.target.attributes.category.value)
    }

  return (
    <Grid className='grid_doctorsQuestion' container direction='row' alignItems='center' justifyContent='center' spacing={2}>
        {
            question[presentQuestion].response.doctors.map((quest, index) => {
                return (
                    <Grid item className='CardDoctors' key={index}>
                        <CardQuestionDoctors imgDoctor={quest.avatar} nameDoctor={quest.name} descriptionDoctor={quest.description} cityDoctor={quest.city} categorySelected={quest.name} doctorSelected={doctorSelected}/>
                    </Grid>
                )
            })
        }
        <div className='Arrows'>
            <IconButton>
                <ArrowLeft2 size="35" color="white"/>
            </IconButton>
            <IconButton>
                <ArrowRight2 size="35" color="white"/>
            </IconButton>
        </div>
    </Grid>
  )
}

export default DoctorsQuestion