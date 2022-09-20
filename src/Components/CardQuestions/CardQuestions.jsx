import { FormControl, TextField } from '@mui/material'
import { toUnitless } from '@mui/material/styles/cssUtils'
import React from 'react'

import '../Questions/Assets/styles.css'

const CardQuestions = ({ yourProcedure, questionTitle, questionLabel, questionButon1, questionButton2 }) => {
    return (
        <div className='elements'>
            <div className='procedure'>
                <p className='titleProcedure'>Tu procedimiento</p>
                <p className='youProcedure'>{yourProcedure}</p>
            </div>
            <div className='line' />
            <div className='question'>
                <h2>{questionTitle}</h2>
                <FormControl className='searchQuestion' variant="filled" color="error">
                    <TextField
                        className='searchTextField'
                        label={questionLabel}
                        type="search"
                        variant="filled"
                    />
                </FormControl>
            </div>
            <div className='questionsButtons'>
                <button>{questionButon1}</button>
                <button className='button-27'>{questionButton2}</button>
            </div>
        </div>
    )
}

export default CardQuestions