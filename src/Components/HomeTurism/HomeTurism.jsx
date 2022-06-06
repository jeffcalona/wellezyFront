import React from 'react'
import { Grid } from '@mui/material'
import SantaMartaImg from './Assets/Img/SantaMarta.jpeg'
import CartagenaImg from './Assets/Img/Cartagena.jpeg'
import LaGuajiraImg from './Assets/Img/LaGuajira.jpeg'
import LaMacarenaImg from './Assets/Img/LaMacarena.jpeg'
import GuatapeImg from './Assets/Img/Guatape.jpeg'

import './Assets/styles.css'
import CardHomeTurism from '../CardHomeTurism/CardHomeTurism'

const cardInfo = [
  { img: SantaMartaImg, title: 'Santa Marta', description: 'Parque Nacional Tairona' },
  { img: CartagenaImg, title: 'Cartagena', description: 'Ciudad Amurallada' },
  { img: LaGuajiraImg, title: 'La Guajira', description: 'Desiertos' },
  { img: LaMacarenaImg, title: 'La Macarena - Meta', description: 'Caño Cristales' },
  { img: GuatapeImg, title: 'Guatapé', description: 'Piedra del Peñol' },
  { img: CartagenaImg, title: 'Cartagena', description: 'Ciudad Amurallada' }
]

const HomeTurism = () => {
  return (
    <div className='homeTurism'>
      <h1>Turismo</h1>
      <Grid container className='Grid_homeTurism'>
        {
          cardInfo.map((info, index) => {
            return (
              <div className='div_homeTurism'>
                <Grid item key={index} xs={6} sm={6} md={3} lg={2} className='grid_cardHomeTurism'>
                  <CardHomeTurism cardImage={info.img} cardTitle={info.title} cardDescription={info.description}/>
                </Grid>
              </div>
            )
          })
        }
      </Grid>
    </div>
  )
}

export default HomeTurism;