import React from 'react'
import CardCityQuestion from '../CardCityQuestion/CardCityQuestion'

import './Assets/styles.css'
import Map from './Assets/Img/Map.png'

const cities = [
  {city: 'Barranquilla', doctorsNumber: 36},
  {city: 'Bogotá', doctorsNumber: 14},
  {city: 'Cali', doctorsNumber: 70},
  {city: 'Medellín', doctorsNumber: 106}
]

const CityQuestion = () => {
  return (
    <div className='CityQuestion'>
        <div className='backgroundImg'>
            <img src={Map} alt="" />
          <div className='cities'>
            {
              cities.map((data) => {
                return (
                  <CardCityQuestion city={data.city} doctorsNumber={data.doctorsNumber} />
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default CityQuestion