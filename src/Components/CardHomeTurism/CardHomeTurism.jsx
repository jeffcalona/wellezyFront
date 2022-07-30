import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Rating, Typography } from '@mui/material'
import React from 'react'
import { Heart } from 'iconsax-react'
import './Assets/styles.css'
import { Link } from 'react-router-dom'


const CardHomeTurism = ({ cardImage, cardTitle, cardDescription, star, link }) => {
  return (
    <Card className='cardHomeTurism'>
      <div className='cardHomeTurism_ActionArea'>
        <div className='cardHomeTurism_media'>
          <CardMedia component='img' className='cardHomeTurismImg' image={cardImage} alt={cardTitle}/>
          <CardActions className='cardHomeTurism_heart'>
            <IconButton className='cardHomeTurism-heart_IconButton'>
              <Heart size="32" color="white"/>
            </IconButton>
          </CardActions>
        </div>
        <div>
            <CardActionArea className='cardHomeTurism_link'>
              <Link to={link}>
                <Typography variant='h7' gutterBottom className='cardHomeTurism_title' color='black' >{cardTitle}</Typography>
                <Typography className='cardHomeTurism_description' color='black' >{cardDescription}</Typography>
              </Link>
            </CardActionArea>
        </div>
        <div>
            <CardActions className='cardHomeTurism_CardAction'>
              <div className='cardHomeTurism_IconButton'>
                <Rating name="size-large" defaultValue={star} size="large" />
              </div>
            </CardActions>
        </div>
      </div>
    </Card>
  )
}

export default CardHomeTurism