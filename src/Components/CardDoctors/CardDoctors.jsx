import { Card, CardActionArea, CardActions, CardMedia, IconButton, Typography } from '@mui/material'
import { Heart, Location, Star1 } from 'iconsax-react'
import React from 'react'
import './Assets/styles.css'

const CardDoctors = ({ imgDoctor, nameDoctor, descriptionDoctor, cityDoctor }) => {
  return (
    <>
        <div className='cardDoctors-img'>
            <div className='div_cardDoctors-img'>
                <CardMedia className='cardDoctors_img' component='img' height={102} image={imgDoctor} alt={nameDoctor}/>
            </div>
        </div>
        <Card className='cardDoctors'>
            <CardActionArea className='cardDoctors_actionArea'>
                <IconButton className='cardDoctor_heart'>
                    <Heart size='28' color="#004274" />
                </IconButton>
                <div className='actionArea_text'>
                    <Typography variant='h7' component='p' gutterBottom sx={{fontSize: '16px', fontWeight: 700}}>{nameDoctor}</Typography>
                    <Typography gutterBottom sx={{fontSize: '14px', fontWeight: 300}}>{descriptionDoctor}</Typography>
                    <Typography sx={{fontSize: '14px', fontWeight: 200, margin: '10px'}}><Location size="20" color="#004274" variant="Bold"/>{cityDoctor}</Typography>
                </div>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <IconButton>
                        <Star1 size="35" color='#FFB82E'/>
                    </IconButton>
                </CardActions>
            </CardActionArea>
        </Card>
    </>
  )
}

export default CardDoctors