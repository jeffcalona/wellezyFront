import { Avatar, Card, CardActionArea, CardActions, IconButton, Typography } from '@mui/material'
import { Location, Star1 } from 'iconsax-react'
import React from 'react'

import './Assets/styles.css'

const CardQuestionChofer = ({ choferAvatar, choferName, carChoferImg, carChoferModel, choferCity, categorySelected, choferSelected }) => {
  return (
    <>
        <div className='div_choferAvatar'>
            <Avatar src={choferAvatar} alt={choferName} sx={{ width: '92px', height: '92px', zIndex: 1 }} />
        </div>
        <Card className='card_chofer'>
            <CardActionArea className='actionArea_chofer'>
                <button className='buttonChoferQuestion' category={categorySelected} onClick={choferSelected}/>
                <div className='div_carChoferImg'><img src={carChoferImg} alt={carChoferModel} /></div>
                <Typography variant='h7' component='p' gutterBottom sx={{fontSize: '18px', fontWeight: 500, marginTop: '10px'}}>{choferName}</Typography>
                <Typography sx={{fontSize: '14px', fontWeight: 400}}><Location size="20" color="#004274" variant="Bold"/>{choferCity}</Typography>
                <CardActions className='action_choferStars'>
                    <IconButton className=''>
                        <Star1 className='' size="26" color='#FFB82E'/>
                    </IconButton>
                    <IconButton className=''>
                        <Star1 className='' size="26" color='#FFB82E'/>
                    </IconButton>
                    <IconButton className=''>
                        <Star1 className='' size="26" color='#FFB82E'/>
                    </IconButton>
                    <IconButton className=''>
                        <Star1 className='' size="26" color='#FFB82E'/>
                    </IconButton>
                    <IconButton className=''>
                        <Star1 className='' size="26" color='#FFB82E'/>
                    </IconButton>
                </CardActions>
            </CardActionArea>
        </Card>
    </>
  )
}

export default CardQuestionChofer