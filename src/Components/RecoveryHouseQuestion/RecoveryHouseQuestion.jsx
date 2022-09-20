import { Grid, IconButton } from '@mui/material'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React from 'react'
import CardQuestionRecoveryTour from '../CardQuestionRecoveryTour/CardQuestionRecoveryTour'

import './Assets/styles.css'

const RecoveryHouseQuestion = ({ question, setPresentQuestion, presentQuestion, citySelected, setUseInteractive1, useInteractive1 }) => {

    const elementSelected = (e) => {
        setUseInteractive1(!useInteractive1)
        console.log('Seleccionó', e.target.attributes.category.value)
        setPresentQuestion(presentQuestion + 1)
    }

  return (
    <div>
        <Grid className='grid_recoveryHouseQuestion' container direction='row' alignItems='center' justifyContent='center' spacing={4}>
            {
                question[presentQuestion].response.interactive1.recoveryHouse[citySelected].map((quest, index) => {
                    return (
                        <Grid item className='grid_CardQuestionRecoveryHouse' key={index}>
                            <CardQuestionRecoveryTour title={quest.neighborhood} description={quest.description} img={quest.img} categorySelected={quest.id} elementSelected={elementSelected}/>
                        </Grid>
                    )
                })
            }
            <div className='div_arrows'>
                <IconButton>
                    <ArrowLeft2 size="35" color="white"/>
                </IconButton>
                <IconButton>
                    <ArrowRight2 size="35" color="white"/>
                </IconButton>
            </div>
        </Grid>
    </div>
  )
}

export default RecoveryHouseQuestion