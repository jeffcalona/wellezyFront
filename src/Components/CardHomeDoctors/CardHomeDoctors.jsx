import { CardActionArea, Typography, CardActions, IconButton, Card, CardMedia, Rating } from '@mui/material'
import { Heart, Location, Star1 } from 'iconsax-react'
import React from 'react'

import './Assets/styles.css'


const CardHomeDoctors = ({ imgDoctor, nameDoctor, descriptionDoctor, cityDoctor, starsNumber}) => {
  return (
    <>
      <div className='div_cardHomeDotors-img'>
        <CardMedia component='img' height='92' image={imgDoctor} alt={nameDoctor} className='cardHomeDotors_img' />
      </div>
      <Card className='cardHomeDotors'>
        <CardActionArea className='cardHomeDotors_ActionArea' disabled>
          <IconButton>
            <Heart size="26" color="#004274" className='cardHomeDotors_Heart'/>
          </IconButton>
          <Typography variant='h7' component='p' gutterBottom sx={{fontSize: '16px', fontWeight: 700}}>{nameDoctor}</Typography>
          <Typography gutterBottom sx={{fontSize: '14px', fontWeight: 300}}>{descriptionDoctor}</Typography>
          <Typography sx={{fontSize: '14px', fontWeight: 200}}><Location size="20" color="#004274" variant="Bold"/>{cityDoctor}</Typography>
          <CardActions className='cardHomeDotors_Action'>
            <IconButton>
              <Rating name="size-large" value={starsNumber} size="large" />
            </IconButton>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  )
}

export default CardHomeDoctors