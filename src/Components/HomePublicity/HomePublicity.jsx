import React from 'react'
import PublicityImg from './Assets/Img/PublicityImg.jpeg'
import './Assets/styles.css'

const HomePublicity = () => {
  return (
    <div className='homePublicity'>
        <img src={PublicityImg} alt="" />
        <div style={{ backgroundColor: 'rgba(0, 66, 116, .5)', width: '100%', height: '100%', position: 'absolute', top: 0, borderRadius: '20px' }} />
        <div className='homePublicity_info'>
            <h1>Los pacientes internacionales pueden solicitar una cita en línea, un asesor responderá a la solicitud de inmediato.</h1>
            <p>¡Descubre aquí como puedes hacerlo!</p>
            <button>ver más</button>
        </div>
    </div>
  )
}

export default HomePublicity