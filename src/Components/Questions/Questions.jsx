import { FormControl, IconButton, TextField } from '@mui/material'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React, { useEffect, useState } from 'react'
//import apiQuestions from '../../Api/questions'

//import newQuestions from '../../Api/questionsNew'


import './Assets/styles.css'
import LogoImg from './Assets/Img/LogoWhite.png'
import { getFormControlUnstyledUtilityClasses } from '@mui/base'


const Questions = ({ cuestion, clickQuestion, /*categoryProcedure*/ }) => {

  const [cardQuestions, setCardQuestions] = useState(false)
  const [bakground, setBakground] = useState(false)


  useEffect(() => {
    console.log(cuestion, "cuestion")
  }, [])

  //const [question, setCuestion] = useState([])
  //console.log('question', question)

  const closeQuestions = () => {
    setCardQuestions(!cardQuestions)
    setBakground(!bakground)
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
                <h2>{cuestion[0].title}</h2>
                <FormControl className='searchQuestion' variant="filled" color="error">
                  <TextField
                    className='searchTextField'
                    // label={data[presentQuestion].placeholder}
                    type="search"
                    variant="filled"
                  />
                </FormControl>
              </div>
              <div className='questionsButtons'>
                {/* <button>{data[presentQuestion][0].response.button1}</button> */}
                {/* <button className='button-27'>{data[presentQuestion][0].response.button2}</button> */}
              </div>
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