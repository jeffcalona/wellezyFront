import { FormControl, IconButton, TextField } from '@mui/material'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React, { useState } from 'react'

import CityQuestion from '../CityQuestion/CityQuestion'

import './Assets/styles.css'
import LogoImg from './Assets/Img/LogoWhite.png'

const Questions = ({ question, clickQuestion }) => {

  const [cardQuestions, setCardQuestions] = useState(false)
  const [bakground, setBakground] = useState(false)
  const [presentQuestion, setPresentQuestion] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [useComponent, setUseComponent] = useState('')
  const [useCityComponent, setUseCityComponent] = useState(false)


  const closeQuestions = () => {
    setCardQuestions(!cardQuestions)
    setBakground(!bakground)
  }

  const handleQuestion = () => {
    if (presentQuestion === question.length - 1) {
      setIsFinished(true)
    } else {
      setPresentQuestion(presentQuestion + 1)
    }
  }
  
  const handlePreviusQuestion = () => {
    setPresentQuestion(presentQuestion - 1)
  }

  const openComponent = () => {
    if(question[presentQuestion].component) {
      setUseCityComponent(!useCityComponent)
    }
  }


  return (
    <>
      <div className={bakground ? 'minimizeBackground' : 'background'}>
        <div className={cardQuestions ? 'minimizeQuestions' : 'container'}>
          <div className='questionsLogo'>
            <img src={LogoImg} alt="" />
          </div>
          <div className='ArrowHide'>
            <button onClick={closeQuestions}>
              <IconButton>
                <ArrowRight2 size="50" color="white" />
              </IconButton>
            </button>
          </div>
          <div className='arrowShow'>
            <button onClick={closeQuestions}>
              <IconButton>
                <ArrowLeft2 size="50" color="white" />
              </IconButton>
            </button>
          </div>
          <div className='questions'>
            <div className='elements'>
              <div className='procedure'>
                <p className='titleProcedure'>Tu procedimiento</p>
                <p className='youProcedure'>{clickQuestion}</p>
              </div>
              <div className='line' />
              <div className='question'>
                <h2>{question[presentQuestion].title}</h2>
                {question[presentQuestion].useInput &&
                  <FormControl className='searchQuestion' variant="filled" color="error">
                    <TextField
                      className='searchTextField'
                      label={question[presentQuestion].placeholder}
                      type="search"
                      variant="filled"
                    />
                  </FormControl>
                }
                {question[presentQuestion].useComponent &&
                  <div className='div_buttonUseComponent'>
                    <button onClick={openComponent} className='buttonUseComponent'>{question[presentQuestion].placeholder}</button>
                  </div>
                }
                {useCityComponent && 
                  <CityQuestion />
                }
              </div>
              {question[presentQuestion].useButton &&
                <div className='questionsButtons'>
                  {presentQuestion !== 0 &&
                        <button onClick={handlePreviusQuestion} className='previusButton' >{question[presentQuestion].response.button1}</button>
                  }
                  <button onClick={handleQuestion} className='nextButton' >{question[presentQuestion].response.button2}</button>
                </div>
              }
            </div>
            <div>
              <p>¡Estás a punto de dar el primer paso para lucir como siempre has deseado!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Questions