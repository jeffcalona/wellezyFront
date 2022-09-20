import { CardActionArea, Typography, CardActions, IconButton, Card, CardMedia, Rating } from '@mui/material'
import { Heart, Location } from 'iconsax-react'
import React from 'react'
import { Link } from 'react-router-dom'

import './Assets/styles.css'


const CardHomeDoctors = ({ imgDoctor, nameDoctor, descriptionDoctor, cityDoctor, starsNumber, linkDoctor}) => {
  return (
    <>
      <div className='div_cardHomeDotors-img'>
        <CardMedia component='img' height='92' image={imgDoctor} alt={nameDoctor} className='cardHomeDotors_img' />
      </div>
      <Card className='cardHomeDotors'>
        <div className='cardHomeDotors_ActionArea'>
          <IconButton>
            <Heart size="26" color="#004274" className='cardHomeDotors_Heart'/>
          </IconButton>
          <CardActionArea>
            <Link to={linkDoctor}>
              <Typography variant='h7' component='p' gutterBottom sx={{fontSize: '16px', fontWeight: 700}}>{nameDoctor}</Typography>
            </Link>
          </CardActionArea>
          <Typography gutterBottom sx={{fontSize: '14px', fontWeight: 300}}>{descriptionDoctor}</Typography>
          <Typography sx={{fontSize: '14px', fontWeight: 200}}><Location size="20" color="#004274" variant="Bold"/>{cityDoctor}</Typography>
          <CardActions className='cardHomeDotors_Action'>
            <IconButton>
              <Rating name="size-large" value={starsNumber} size="large" />
            </IconButton>
          </CardActions>
        </div>
      </Card>
    </>
  )
}

export default CardHomeDoctors