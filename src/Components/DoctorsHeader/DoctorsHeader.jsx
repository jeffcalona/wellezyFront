import React from 'react'

import './Assets/styles.css'
import portadaDoctors from './Assets/img/portadaDoctors.jpg'

const DoctorsHeader = ({ title, description }) => {
  return (
    <div className='doctors_header'>
        <img src={portadaDoctors} alt="" />
        <div className='doctors-header_text'>
            <h1>{title}</h1>
            <p>{`Aquí encontrarás ${description} del País, selecciona el tuyo`}</p>
        </div>
    </div>
  )
}

export default DoctorsHeader