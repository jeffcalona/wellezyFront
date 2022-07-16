import { FormControl, IconButton, TextField } from '@mui/material'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import CityQuestion from '../CityQuestion/CityQuestion'

import './Assets/styles.css'
import LogoImg from './Assets/Img/LogoWhite.png'
import DoctorsQuestion from '../DoctorsQuestion/DoctorsQuestion'
import RecoveryHouseQuestion from '../RecoveryHouseQuestion/RecoveryHouseQuestion'
import RecoveryHotelQuestion from '../RecoveryHotelQuestion/RecoveryHotelQuestion'
import NurseQuestion from '../NurseQuestion/NurseQuestion'
import ChoferQuestion from '../ChoferQuestion/ChoferQuestion'
import ToursQuestion from '../ToursQuestion/ToursQuestion'
import DateQuestion from '../DateQuestion/DateQuestion'
import { DatePicker } from '@material-ui/pickers'

const Questions = ({ question, clickQuestion }) => {

  const [cardQuestions, setCardQuestions] = useState(false)
  const [bakground, setBakground] = useState(false)
  const [presentQuestion, setPresentQuestion] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  
  const [useCityComponent, setUseCityComponent] = useState(false)
  const [useDoctorComponent, setUseDoctorComponent] = useState(false)
  const [useNurseComponent, setUseNurseComponent] = useState(false)
  const [useChoferComponent, setUseChoferComponent] = useState(false)
  const [useToursComponent, setUseToursComponent] = useState(false)
  const [useDateQuestion, setUseDateQuestion] = useState(false)
  
  const [useInteractive1, setUseInteractive1] = useState(false)
  const [useInteractive2, setUseInteractive2] = useState(false)
  
  const [citySelected, setCitySelected] = useState(false)

  const [nextButtonComponent, setNextButtonComponent] = useState(true)

  const [tourDateSelected, setTourDateSelected] = useState(new Date())

  const [selectedNodatePreviusButton, setSelectedNodatePreviusButton] = useState(false)

  const navigate = useNavigate()

  const closeQuestions = () => {
    setCardQuestions(!cardQuestions)
    setBakground(!bakground)
  }

  const handleQuestion = () => {
    setPresentQuestion(presentQuestion + 1)
  }

  useEffect(() => {
    if(presentQuestion === question.questions.length - 2) {
      console.log('Estamos aquí')
      setIsFinished(true)
    }
  }, [presentQuestion,question])
  
  const handlePreviusQuestion = () => {
    setPresentQuestion(presentQuestion - 1)
  }

  const openComponent = () => {
    if(question.questions[presentQuestion].component === 'CityQuestion') {
      setUseCityComponent(!useCityComponent)
    } else if (question.questions[presentQuestion].component === 'DoctorsQuestion') {
      setUseDoctorComponent(!useDoctorComponent)
    } else if (question.questions[presentQuestion].component === 'NurseQuestion') {
      setUseNurseComponent(!useNurseComponent)
    } else if (question.questions[presentQuestion].component === 'ChoferQuestion') {
      setUseChoferComponent(!useChoferComponent)
    } else if (question.questions[presentQuestion].component === 'TourQuestion') {
      setUseToursComponent(!useToursComponent)
    } else if (question.questions[presentQuestion].component === 'DateQuestion') {
      setUseDateQuestion(!useDateQuestion)
    }
  }

  const selectedCity = (e) => {
    setUseCityComponent(!useCityComponent)
    setCitySelected(e.target.attributes.category.value)
    console.log('Seleccionó', e.target.attributes.category.value)
    setPresentQuestion(presentQuestion + 1)
  }

  const pressNot = () => {
    console.log('Selecionó No')
    setPresentQuestion(presentQuestion + 2)
  }
  const usePressNotFunc = () => {
    console.log('Selecionó No y suma 1 en las preguntas')
    setPresentQuestion(presentQuestion + 1)
  }
  const datePressNotFunc = () => {
    setPresentQuestion(presentQuestion + 3)
    setSelectedNodatePreviusButton(true)
  }
  const previusTourbutton = () => {
    setPresentQuestion(presentQuestion -3)
  }
  
  const pressYes = () => {
    console.log('Seleccionó Yes')
    setPresentQuestion(presentQuestion + 1)
  }

  const interactive1Func = () => {
    console.log('Seleccionó Casa de Recuperación')
    if (useInteractive2 === true) {
      setUseInteractive2(false)
      setUseInteractive1(!useInteractive1)
    }
    setUseInteractive1(!useInteractive1)
  }

  const interactive2Func = () => {
    console.log('Seleccionó Hotel')
    if (useInteractive1 === true) {
      setUseInteractive1(false)
      setUseInteractive2(!useInteractive2)
    }
    setUseInteractive2(!useInteractive2)
  }

  useEffect(() => {
    if(question.questions[presentQuestion].component) {
      setNextButtonComponent(false)
    }
  }, [question, presentQuestion])
  

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
                <p className='youProcedure'>{question.procedure}</p>
              </div>
              <div className='line' />
              <div className='question'>
                <h2>{question.questions[presentQuestion].title}</h2>
                {question.questions[presentQuestion].useInput &&
                  <FormControl className='searchQuestion' variant="filled" color="error">
                    <TextField
                      className='searchTextField'
                      label={question.questions[presentQuestion].placeholder}
                      type="search"
                      variant="filled"
                    />
                  </FormControl>
                }
                {question.questions[presentQuestion].useComponent &&
                  <>
                    <div className='div_buttonUseComponent'>
                      <button onClick={openComponent} className='buttonUseComponent'>{question.questions[presentQuestion].placeholder}</button>
                    </div>
                    <button onClick={handlePreviusQuestion} className='previusButton' >{question.questions[presentQuestion].response.button1}</button>
                    {nextButtonComponent &&
                      <button className='previusButton' onClick={handleQuestion}>{question.questions[presentQuestion].response.button2}</button>
                    }
                  </>
                }
                {useCityComponent && 
                  <CityQuestion question={question.questions} presentQuestion={presentQuestion} setUseCityComponent={setUseCityComponent} useCityComponent={useCityComponent} setCitySelected={setCitySelected} selectedCity={selectedCity} />
                }
                {useDoctorComponent &&
                  <DoctorsQuestion question={question.questions} presentQuestion={presentQuestion} setPresentQuestion={setPresentQuestion} setUseDoctorComponent={setUseDoctorComponent} useDoctorComponent={useDoctorComponent}/>
                }
                {useNurseComponent &&
                  <NurseQuestion question={question.questions} setPresentQuestion={setPresentQuestion} presentQuestion={presentQuestion} useNurseComponent={useNurseComponent} setUseNurseComponent={setUseNurseComponent}/>
                }
                {useChoferComponent &&
                  <ChoferQuestion question={question.questions} setPresentQuestion={setPresentQuestion} presentQuestion={presentQuestion} setUseChoferComponent={setUseChoferComponent} useChoferComponent={useChoferComponent}/>
                }
                {useToursComponent &&
                  <ToursQuestion question={question.questions} setPresentQuestion={setPresentQuestion} presentQuestion={presentQuestion} setUseToursComponent={setUseToursComponent} useToursComponent={useToursComponent} />
                }
                {useInteractive1 &&
                  <RecoveryHouseQuestion question={question.questions} setPresentQuestion={setPresentQuestion} presentQuestion={presentQuestion} citySelected={citySelected} setUseInteractive1={setUseInteractive1} useInteractive1={useInteractive1} />
                }
                {useInteractive2 && 
                  <RecoveryHotelQuestion />
                }
                {useDateQuestion &&
                  <DateQuestion />
                }
              </div>
              {question.questions[presentQuestion].useDate && 
              <>
                <div className='div_datePiker'>
                  <DatePicker value={tourDateSelected} onChange={setTourDateSelected} label={question.questions[presentQuestion].placeholder} />
                </div>
              </>
              }
              {question.questions[presentQuestion].useButton &&
                <div className='questionsButtons'>
                  {presentQuestion !== 0 && isFinished !== true &&
                      <button onClick={handlePreviusQuestion} className='previusButton' >{question.questions[presentQuestion].response.button1}</button>
                  }
                  {isFinished !== true &&
                    <button onClick={handleQuestion} className='nextButton' >{question.questions[presentQuestion].response.button2}</button>
                  }
                  {isFinished === true &&
                    <>
                      <button onClick={() => navigate("/flights")} className='finishButton' >{question.questions[presentQuestion].response.button3}</button>
                    </>
                  }
                </div>
              }
              {question.questions[presentQuestion].useYesOrNotButton &&
                <div className='questionsButtons'>
                  {question.questions[presentQuestion].info === 'usePressNot' &&
                    <button onClick={usePressNotFunc} className='previusButton'>{question.questions[presentQuestion].response.buttonNo}</button>
                  }
                  {question.questions[presentQuestion].info === 'date' &&
                    <button onClick={datePressNotFunc} className='previusButton'>{question.questions[presentQuestion].response.buttonNo}</button>
                  }
                  {question.questions[presentQuestion].info === '' &&
                    <button onClick={pressNot} className='previusButton'>{question.questions[presentQuestion].response.buttonNo}</button>
                  }
                  <button onClick={pressYes} className='nextButton'>{question.questions[presentQuestion].response.buttonYes}</button>
                </div>
              }
              {question.questions[presentQuestion].useInteractiveButon && 
                <div className='div_interactive'>
                  <button className='interactive1' onClick={interactive1Func}>
                    <div className='interactive1_div'>
                      <img src={question.questions[presentQuestion].response.interactive1.img} alt={question.questions[presentQuestion].response.interactive1.description} />
                    </div>
                    <h1>{question.questions[presentQuestion].response.interactive1.description}</h1>
                  </button>
                  <button className='interactive2' onClick={interactive2Func}>
                    <div className='interactive2_div'>
                      <img src={question.questions[presentQuestion].response.interactive2.img} alt={question.questions[presentQuestion].response.interactive2.description} />
                      <h1>{question.questions[presentQuestion].response.interactive2.description}</h1>
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