import React from 'react'

import './Assets/styles.css'
import Map2 from './Assets/Img/Map2.png'
import LogoWhite from './Assets/Img/LogoWhite.png'


const CityQuestion = ({ question, presentQuestion, selectedCity }) => {


  return (
    <div className='CityQuestion'>
        <div className='backgroundImg'>
            <img src={Map2} alt="" />
        </div>
        <div className='cities'>
          <ul>
            <li className="li_cities li_cities_barranquilla">
              <img src={LogoWhite} alt="Wellezy" />
              <h5>{question[presentQuestion].response.cities[1].name}</h5>
              <p>{question[presentQuestion].response.cities[1].numberDoctors} Doctores</p>
              <button onClick={selectedCity} category={question[presentQuestion].response.cities[1].name} />
              <div className='circle' />
            </li>
            <li className="li_cities li_cities_bogota">
                <img src={LogoWhite} alt="Wellezy" />
                <h5>{question[presentQuestion].response.cities[3].name}</h5>
                <p>{question[presentQuestion].response.cities[3].numberDoctors} Doctores</p>
              <button onClick={selectedCity} category={question[presentQuestion].response.cities[3].name}/>
              <div className='circle' />
            </li>
            <li className="li_cities li_cities_cali">
                <img src={LogoWhite} alt="Wellezy" />
                <h5>{question[presentQuestion].response.cities[2].name}</h5>
                <p>{question[presentQuestion].response.cities[2].numberDoctors} Doctores</p>
              <button onClick={selectedCity} category={question[presentQuestion].response.cities[2].name}/>
              <div className='circle' />
            </li>
            <li className="li_cities li_cities_medellin">
                <img src={LogoWhite} alt="Wellezy" />
                <h5>{question[presentQuestion].response.cities[0].name}</h5>
                <p>{question[presentQuestion].response.cities[0].numberDoctors} Doctores</p>
              <button onClick={selectedCity} category={question[presentQuestion].response.cities[0].name}/>
              <div className='circle' />
            </li>
          </ul>
        </div>
    </div>
  )
}

export default CityQuestion