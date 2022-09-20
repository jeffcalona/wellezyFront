import React from 'react'

import './Assets/styles.css'

const DoctorsHeader = ({ title, description, headerImg }) => {
  return (
    <div className='doctors_header'>
        <img src={headerImg} alt="" />
        <div className='doctors-header_text'>
            <h1>{title}</h1>
            <p>{`Aquí encontrarás ${description} del País, selecciona el tuyo`}</p>
        </div>
    </div>
  )
}

export default DoctorsHeader