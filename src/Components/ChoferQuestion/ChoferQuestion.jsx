import { Grid, IconButton } from '@mui/material'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React from 'react'
import CardQuestionChofer from '../CardQuestionChofer/CardQuestionChofer'

import './Assets/styles.css'

const ChoferQuestion = ({ question, setPresentQuestion, presentQuestion, setUseChoferComponent, useChoferComponent }) => {

    const choferSelected = (e) => {
        setUseChoferComponent(!useChoferComponent)
        console.log('Seleccionó', e.target.attributes.category.value)
        setPresentQuestion(presentQuestion + 1)
    }

  return (
    <Grid className='grid_choferQuestion' container direction='row' alignItems='center' justifyContent='center' spacing={2}>
        {
            question[presentQuestion].response.transport.map((quest, index) => {
                return (
                    <Grid key={index} className='cardChofer'>
                        <CardQuestionChofer choferAvatar={quest.choferAvatar} choferName={quest.choferName} carChoferImg={quest.carChoferImg} carChoferModel={quest.carChoferModel} choferCity={quest.choferCity} categorySelected={quest.choferName} choferSelected={choferSelected} starsNumber={quest.assessment}/>
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

export default ChoferQuestion