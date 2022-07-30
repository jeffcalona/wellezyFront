import { CardActionArea, Typography, CardActions, IconButton, Card, Avatar, Rating } from '@mui/material'
import { Heart, Location } from 'iconsax-react'
import React from 'react'

import './Assets/styles.css'

const CardQuestionDoctors = ({ imgDoctor, nameDoctor, descriptionDoctor, cityDoctor, categorySelected, doctorSelected, stars }) => {


  return (
    <>
      <div className='div_cardQuestionDotors-img'>
        <Avatar src={imgDoctor} alt={nameDoctor} sx={{ width: '80px', height: '80px' }} />
      </div>
      <Card className='cardQuestionDotors'>
        <CardActionArea className='cardQuestionDotors_ActionArea'>
          <button className='buttonDorctorsQuestion' category={categorySelected} onClick={doctorSelected}/>
          <IconButton className=''>
            <Heart size="26" color="#004274" className='cardQuestionDotors_Heart'/>
          </IconButton>
          <Typography variant='h7' component='p' gutterBottom sx={{fontSize: '16px', fontWeight: 700,marginTop: '30px'}}>{nameDoctor}</Typography>
          <Typography gutterBottom sx={{fontSize: '14px', fontWeight: 300}}>{descriptionDoctor}</Typography>
          <Typography sx={{fontSize: '14px', fontWeight: 200}}><Location size="20" color="#004274" variant="Bold"/>{cityDoctor}</Typography>
          <CardActions className='cardHomeDotors_Action'>
            <IconButton className=''>
              <Rating name="size-large" value={stars} size="medium" />
            </IconButton>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  )
}

export default CardQuestionDoctors