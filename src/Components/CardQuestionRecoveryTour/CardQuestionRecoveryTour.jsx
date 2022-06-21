import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import { Heart, Star1 } from 'iconsax-react'
import React from 'react'

import './Assets/styles.css'

const CardRecoveryHouse = ({ img, title, description, categorySelected, elementSelected }) => {
  return (
    <Card className='cardRecoveryTour'>
      <CardActionArea className=''>
        <button className='button_cardRecoveryTour' category={categorySelected} onClick={elementSelected} />
        <div className='div_mediaRecoveryTour'>
          <CardMedia component='img' className='' image={img} alt={title}/>
          <CardActions className='actionHeart_recoveryTour'>
            <IconButton className=''>
              <Heart size="32" color="white"/>
            </IconButton>
          </CardActions>
        </div>
        <CardContent className='cardContent_recoveryTour'>
            <Typography variant='h4' gutterBottom className='title' >{title}</Typography>
            <Typography className='description'>{description}</Typography>
            <CardActions className='cardAction_start'>
              <IconButton className=''>
                <Star1 className='' size="26" color='#FFB82E'/>
              </IconButton>
            </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardRecoveryHouse