import React from 'react'
import LogoWhite from './Assets/Img/LogoWhite.png'

import './Assets/styles.css'

const CardCityQuestion = ({ city, doctorsNumber }) => {
  return (
    <div className='CardCityQuestion'>
        <div className='logo'><img src={LogoWhite} alt="Logo Wellezy" /></div>
        <div>
            <h5>{city}</h5>
            <p>{doctorsNumber}</p>
        </div>
    </div>
  )
}

export default CardCityQuestion