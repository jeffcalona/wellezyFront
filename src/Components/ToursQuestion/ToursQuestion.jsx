import { Grid, IconButton } from '@mui/material'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React from 'react'
import CardQuestionRecoveryTour from '../CardQuestionRecoveryTour/CardQuestionRecoveryTour'

import './Assets/styles.css'

const ToursQuestion = ({ question, setPresentQuestion, presentQuestion, setUseToursComponent, useToursComponent }) => {

  const elementSelected = (e) => {
    setUseToursComponent(!useToursComponent)
    console.log('Seleccionó', e.target.attributes.category.value)
    setPresentQuestion(presentQuestion + 1)
  }

  return (
    <div>
      <Grid className='grid_tourQuestion' container direction='row' alignItems='center' justifyContent='center' spacing={4}>
            {
                question[presentQuestion].response.tours.map((quest, index) => {
                    return (
                        <Grid item className='grid_CardQuestionTour' key={index}>
                            <CardQuestionRecoveryTour title={quest.city} description={quest.tour} img={quest.img} categorySelected={quest.id} elementSelected={elementSelected}/>
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

export default ToursQuestion