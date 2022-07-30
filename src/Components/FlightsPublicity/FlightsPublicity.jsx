import React from 'react'
import MedellinImg from './Assets/Img/MedellinImg.jpg'
import TravelImg from './Assets/Img/TravelImg.jpeg'
import Logo from './Assets/Img/Logo.png'
import { Airplane, Buildings } from 'iconsax-react'
import './Assets/styles.css'

const FlightsPublicity = () => {
  return (
    <div className='flightsPublicity'>
        <div className='flightsPublicity_left'>
            <div className='flightsPublicity-left_img'>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                <img src={MedellinImg} alt="Medellín" />
            </div>
            <div className='flightsPublicity_text'>
                <div className='flightsPublicity_text_'>
                    <div className='flightsPublicity-left_infoBlue'>
                        <h1>conoce como puedes transformar tu cuerpo</h1>
                    </div>
                    <div className='flightsPublicity-left_info'>
                        <h1>en la ciudad de la eterna primavera</h1>
                    </div>
                </div>
            </div>
            <div className='flightsPublicity-left_logo'>
                <img src={Logo} alt="Wellezy" />
            </div>
        </div>
        <div className='flightsPublicity_right'>
            <div className='flightsPublicity-left_img'>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                <img src={TravelImg} alt="Viajes" />
            </div>
            <div className='flightsPublicity_text'>
                <div className='flightsPublicity_text_right'>
                    <div className='flightsPublicity-right_text'>
                        <h1><span>planea</span> tus vacaciones</h1>
                    </div>
                    <div className='flightsPublicity-right_logo'>
                        <img src={Logo} alt="Wellezy" />
                    </div>
                    <div className='flightsPublicity-right_text'>
                        <h1>las hace posible</h1>
                    </div>
                    <div className='flightsPublicity-text-right_icons'>
                        <Airplane style={{ transform: 'rotate(90deg)' }} size="40" color="white" variant="Bold"/>
                        <p>+</p>
                        <Buildings size="40" color="white"/>
                    </div>
                </div>
            </div>
            <div>
                <div className='blueCircle' />
            </div>
        </div>
    </div>
  )
}

export default FlightsPublicity