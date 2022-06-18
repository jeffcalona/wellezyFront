import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import { Heart, Star1 } from 'iconsax-react'
import React from 'react'

import './Assets/styles.css'

const CardRecoveryHouse = ({ imgHouse, neighborhoodHouse, descriptionHouse, categorySelected, recoveryHouseSelected }) => {
  return (
    <Card className='cardRecoveryHouse'>
      <CardActionArea className=''>
        <button className='button_cardRecoveryHouse' category={categorySelected} onClick={recoveryHouseSelected} />
        <div className='div_mediaRecoveryHouse'>
          <CardMedia component='img' className='' image={imgHouse} alt={neighborhoodHouse}/>
          <CardActions className='actionHeart_recoveryHouse'>
            <IconButton className=''>
              <Heart size="32" color="white"/>
            </IconButton>
          </CardActions>
        </div>
        <CardContent className='cardContent_recoveryHouse'>
            <Typography variant='h4' gutterBottom className='neighborhoodHouse' >{neighborhoodHouse}</Typography>
            <Typography className='descriptionHouse'>{descriptionHouse}</Typography>
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