import React from 'react'

import './Assets/styles.css'
import portadaDoctors from './Assets/img/portadaDoctors.jpg'

const DoctorsHeader = () => {
  return (
    <div className='doctors_header'>
        <img src={portadaDoctors} alt="" />
        <div className='doctors-header_text'>
            <h1>Doctores</h1>
            <p>Aquí encontrarás lo mejores cirujanos del País, selecciona el tuyo</p>
        </div>
    </div>
  )
}

export default DoctorsHeader