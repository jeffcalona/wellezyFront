import { CardActionArea, Rating } from '@mui/material'
import { Clock, Location, WalletAdd1 } from 'iconsax-react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Assets/styles.css'

const TurismCard = ({ img, title, site, time, includes, price, star, link }) => {
  return (
    <div className='activity'>
        <div className='activity_img'>
            <img src={img} alt={title} />
        </div>
        <div className='activity_text'>
            <CardActionArea>
                <Link to={link}>
                    <h2>{title}</h2>
                </Link>
            </CardActionArea>
            <div>
                <div><Location size="32" color="#004274"/></div>
                <div className='activity-text_p'><p>{site}</p></div>
            </div>
            <div>
                <div><Clock size="32" color="#004274"/></div>
                <div className='activity-text_p'><p>{time}</p></div>
            </div>
            <div>
                <div><WalletAdd1 size="32" color="#004274"/></div>
                <div className='activity-text_p'><p>{includes}</p></div>
            </div>
            <p className='activity-text_price'><span>desde </span><span>${price}</span></p>
        </div>
        <div className='activity_rating'>
            <Rating name="size-large" defaultValue={star} size="large" />
        </div>
    </div>
  )
}

export default TurismCard