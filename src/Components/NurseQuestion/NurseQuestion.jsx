import { Grid, IconButton } from '@mui/material'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React from 'react'
import CardQuestionDoctors from '../CardQuestionDoctors/CardQuestionDoctors'

import './Assets/styles.css'

const NurseQuestion = ({ question, setPresentQuestion, presentQuestion, useNurseComponent, setUseNurseComponent }) => {

    const doctorSelected = (e) => {
        setUseNurseComponent(!useNurseComponent)
        console.log('Seleccionó', e.target.attributes.category.value)
        setPresentQuestion(presentQuestion + 1)
    }

  return (
    <Grid className='grid_nurseQuestion' container direction='row' alignItems='center' justifyContent='center' spacing={2}>
        {
            question[presentQuestion].response.nurse.map((quest, index) => {
                return (
                    <Grid item className='CardNurse' key={index}>
                        <CardQuestionDoctors imgDoctor={quest.avatar} nameDoctor={quest.name} descriptionDoctor={quest.experience} cityDoctor={quest.city} categorySelected={quest.name} doctorSelected={doctorSelected}/>
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

export default NurseQuestion