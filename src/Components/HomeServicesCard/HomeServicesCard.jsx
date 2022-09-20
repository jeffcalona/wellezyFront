import { Heart } from 'iconsax-react'
import React from 'react'
import './Assets/styles.css'

const HomeServicesCard = ({ img, title, description }) => {
  return (
    <div className='homeCardServices'>
        <img src={img} alt={title} />
        <div className='homeCardServices_backgroundColor' />
        <div className='homeCardServices_text'>
            <p>{description}</p>
            <h4>{title}</h4>
        </div>
        <div className='homeCardServices_heart'>
            <Heart size="32" color="white"/>
        </div>
    </div>
  )
}

export default HomeServicesCard