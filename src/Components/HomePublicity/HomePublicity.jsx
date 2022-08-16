import React from 'react'
import { Link } from 'react-router-dom'
import PublicityImg from './Assets/Img/PublicityImg.jpeg'
import './Assets/styles.css'
import { Apple, GooglePlay } from 'iconsax-react'

const HomePublicity = () => {
  return (
    <div className='homePublicity'>
        <img src={PublicityImg} alt="" />
        <div style={{ backgroundColor: 'rgba(0, 66, 116, .5)', width: '100%', height: '100%', position: 'absolute', top: 0, borderRadius: '20px' }} />
        <div className='homePublicity_info'>
            <h1>Todos los pacientes pueden solicitar una cita en línea y un asesor responderá de inmediato a la solicitud.</h1>
            <p>¡Descubre aquí como puedes hacerlo!</p>
              <div className='homePublicity-info_more'>
                <Link to='/form'>ver más</Link>
              </div>
              <div>
                <div style={{ height: '50px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                  <div className='homePublicity-info_app'>
                    <a href='https://play.google.com/store/apps/details?id=com.telesaludapp'  style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Apple size="45" color="white"/></a>
                  </div>
                  <div className='homePublicity-info_app'>
                    <a href='https://play.google.com/store/apps/details?id=com.telesaludapp'  style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><GooglePlay size="40" color="white"/></a>
                  </div>
                </div>
                <div className='downloadApp'><p>Descarga la app</p></div>
              </div>
        </div>
    </div>
  )
}

export default HomePublicity