import React, { useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../HomeTurism/Assets/styles.css'
import Img1 from './Assets/Img/Img1.jpg'
import Img2 from './Assets/Img/Img2.jpeg'
import Img3 from './Assets/Img/Img3.jpeg'
import Img4 from './Assets/Img/Img4.jpeg'
import Img5 from './Assets/Img/Img5.jpeg'
import { Grid } from '@mui/material'
import CardHomeTurism from '../CardHomeTurism/CardHomeTurism'

const hotelsInfo = [
    { img: Img1, title: "L'Horizon hotel and spa", description: 'hollywood california', stars: 4 },
    { img: Img2, title: 'Tulemar Bungalows & villas', description: 'costa rica', stars: 5  },
    { img: Img3, title: 'kandolhu maldives', description: 'maldivas', stars: 4 },
    { img: Img4, title: 'legian beach hotel', description: 'bali', stars: 5 },
    { img: Img5, title: 'dorado beach', description: 'san juan - puerto rico', stars: 5 },
    { img: Img1, title: "L'Horizon hotel and spa", description: 'hollywood california', stars: 4 },
    { img: Img2, title: 'Tulemar Bungalows & villas', description: 'costa rica', stars: 5  }
  ]
  
  const MotionConstraints = styled(motion.div)`
    overflow-x: hidden;
  `;
  
  const MotionBox = styled(motion.div)`
    width: 100vw;
  `

const FlightsTopHoteles = () => {
    const constraintsRef = useRef(null)
  return (
    <div style={{ fontFamily: 'Inter', textAlign: 'center', margin: '32px auto' }}>
        <Link to='/hotels'>
            <h1 style={{ color: 'black', textTransform: 'capitalize', fontWeight: 400 }}>Los hoteles mejores calificados</h1>
        </Link>
        <MotionConstraints className='slider_container' ref={constraintsRef}>
            <MotionBox className='slider' drag='x' dragConstraints={constraintsRef}>
            {
                hotelsInfo.map((info) => {
                return (
                    <motion.div className='div_homeTurism'>
                        <Grid item xs={6} sm={6} md={3} lg={2} className='grid_cardHomeTurism'>
                            <CardHomeTurism cardImage={info.img} cardTitle={info.title} cardDescription={info.description} star={info.stars} link={`/hotel/${info.id}`}/>
                        </Grid>
                    </motion.div>
                )
                })
            }
            </MotionBox>
        </MotionConstraints>
    </div>
  )
}

export default FlightsTopHoteles