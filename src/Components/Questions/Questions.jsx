import { FormControl, IconButton, TextField } from '@mui/material'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React, { useState } from 'react'

import CityQuestion from '../CityQuestion/CityQuestion'

import './Assets/styles.css'
import LogoImg from './Assets/Img/LogoWhite.png'
import DoctorsQuestion from '../DoctorsQuestion/DoctorsQuestion'
import CardRecoveryHouse from '../CardRecoveryHouse/CardRecoveryHouse'

const Questions = ({ question, clickQuestion }) => {

  const [cardQuestions, setCardQuestions] = useState(false)
  const [bakground, setBakground] = useState(false)
  const [presentQuestion, setPresentQuestion] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [useInteractive1, setUseInteractive1] = useState(false)
  const [useInteractive2, setUseInteractive2] = useState(false)

  const [useCityComponent, setUseCityComponent] = useState(false)
  const [useDoctorComponent, setUseDoctorComponent] = useState(false)


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
    if(question[presentQuestion].component === 'CityQuestion') {
      setUseCityComponent(!useCityComponent)
    } else if (question[presentQuestion].component === 'DoctorsQuestion') {
      setUseDoctorComponent(!useDoctorComponent)
    }
  }

  const pressNot = () => {
    console.log('Seleccionó No')
    setPresentQuestion(presentQuestion + 2)
  }
  const pressYes = () => {
    console.log('Seleccionó Yes')
    setPresentQuestion(presentQuestion + 1)
  }

  const interactive1Func = () => {
    console.log('Seleccionó Casa de Recuperación')
    setUseInteractive1(!useInteractive1)
  }

  const interactive2Func = () => {
    console.log('Seleccionó Hotel')
    setUseInteractive2(!useInteractive2)
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
                  <>
                    <div className='div_buttonUseComponent'>
                      <button onClick={openComponent} className='buttonUseComponent'>{question[presentQuestion].placeholder}</button>
                    </div>
                    <button onClick={handlePreviusQuestion} className='previusButton' >{question[presentQuestion].response.button1}</button>
                    <button className='previusButton' onClick={handleQuestion}>{question[presentQuestion].response.button2}</button>
                  </>
                }
                {useCityComponent && 
                  <CityQuestion question={question} presentQuestion={presentQuestion} setUseCityComponent={setUseCityComponent} useCityComponent={useCityComponent} />
                }
                {useDoctorComponent &&
                  <DoctorsQuestion question={question} presentQuestion={presentQuestion} setUseDoctorComponent={setUseDoctorComponent} useDoctorComponent={useDoctorComponent} />
                }
                {useInteractive1 &&
                  <CardRecoveryHouse />
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
              {question[presentQuestion].useYesOrNotButton &&
                <div className='questionsButtons'>
                  <button onClick={pressNot} className='previusButton'>{question[presentQuestion].response.buttonNo}</button>
                  <button onClick={pressYes} className='nextButton'>{question[presentQuestion].response.buttonYes}</button>
                </div>
              }
              {question[presentQuestion].useInteractiveButon && 
                <div className='div_interactive'>
                  <button className='interactive1' onClick={interactive1Func}>
                    <div className='interactive1_div'>
                      <img src={question[presentQuestion].response.interactive1.img} alt={question[presentQuestion].response.interactive1.description} />
                    </div>
                    <h1>{question[presentQuestion].response.interactive1.description}</h1>
                  </button>
                  <button className='interactive2' onClick={interactive2Func}>
                    <div className='interactive2_div'>
                      <img src={question[presentQuestion].response.interactive2.img} alt={question[presentQuestion].response.interactive2.description} />
                      <h1>{question[presentQuestion].response.interactive2.description}</h1>
                    </div>
                  </button>
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