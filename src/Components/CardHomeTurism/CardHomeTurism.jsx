import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

import { Heart, Star1 } from 'iconsax-react'

import './Assets/styles.css'

const CardHomeTurism = ({ cardImage, cardTitle, cardDescription }) => {
  return (
    <Card className='cardHomeTurism'>
      <CardActionArea className='cardHomeTurism_ActionArea'>
        <div className='cardHomeTurism_media'>
          <CardMedia component='img' className='cardHomeTurismImg' image={cardImage} alt={cardTitle}/>
          <CardActions className='cardHomeTurism_heart'>
            <IconButton className='cardHomeTurism-heart_IconButton'>
              <Heart size="32" color="white"/>
            </IconButton>
          </CardActions>
        </div>
        <CardContent>
            <Typography variant='h7' gutterBottom className='cardHomeTurism_title' >{cardTitle}</Typography>
            <Typography className='cardHomeTurism_description'>{cardDescription}</Typography>
            <CardActions className='cardHomeTurism_CardAction'>
              <IconButton className='cardHomeTurism_IconButton'>
                <Star1 className='star_CardTour' size="26" color='#FFB82E'/>
              </IconButton>
              <IconButton className='cardHomeTurism_IconButton'>
                <Star1 className='star_CardTour' size="26" color='#FFB82E'/>
              </IconButton>
              <IconButton className='cardHomeTurism_IconButton'>
                <Star1 className='star_CardTour' size="26" color='#FFB82E'/>
              </IconButton>
              <IconButton className='cardHomeTurism_IconButton'>
                <Star1 className='star_CardTour' size="26" color='#FFB82E'/>
              </IconButton>
              <IconButton className='cardHomeTurism_IconButton'>
                <Star1 className='star_CardTour' size="26" color='#FFB82E'/>
              </IconButton>
            </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardHomeTurism