import React from 'react'
import Services from '../Services/Services'

import './Assets/styles.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header_questions'>
        <h1 className='questions_h1'><span style={{fontWeight: '600'}}>La Única </span><span style={{fontWeight: '200'}}>Aplicación</span></h1>
        <p className='questions_p'>Donde encontrarás todo lo necesario para realizar su procedimiento quirúrgicos</p>
        <div>
          <input type="text" placeholder='¿Que procedimiento te quieres realizar?' className='input_questions'/>
        </div>
      </div>
      <Services />
    </div>
  )
}

export default Header