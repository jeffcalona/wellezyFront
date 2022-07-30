import React, { useEffect, useRef, useState } from 'react'
import { Grid } from '@mui/material'
import { motion } from 'framer-motion'

import './Assets/styles.css'
import CardHomeTurism from '../CardHomeTurism/CardHomeTurism'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

const MotionConstraints = styled(motion.div)`
  overflow-x: hidden;
`;

const MotionBox = styled(motion.div)`
  width: 100vw;
`

const HomeTurism = () => {
  const constraintsRef = useRef(null)

  const [turism, setTurism] = useState([])

  const getTurism = async () => {
      await axios.get(process.env.REACT_APP_URL_API_ALL_TOURS).then((response) => {
        setTurism(response.data)
      }). catch ((err) => console.log(err))
  }

  useEffect(() => {
    getTurism()
  }, [])

  return (
    <div className='homeTurism'>
      <Link to='/turism'>
        <h1>Turismo</h1>
      </Link>
      <MotionConstraints className='slider_container' ref={constraintsRef}>
        <MotionBox className='slider' drag='x' dragConstraints={constraintsRef}>
          {
            turism.map((info) => {
              return (
                <motion.div className='div_homeTurism'>
                  <Grid item xs={6} sm={6} md={3} lg={2} className='grid_cardHomeTurism'>
                    <CardHomeTurism cardImage={info.img} cardTitle={info.municipality} cardDescription={info.name_tour} star={info.stars} link={`/tour/${info.id}`}/>
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

export default HomeTurism;



/*
return (
    <div className='homeTurism'>
      <h1>Turismo</h1>
      <Grid container className='Grid_homeTurism'>
        {
          cardInfo.map((info, index) => {
            return (
              <div key={index} className='div_homeTurism'>
                <Grid item xs={6} sm={6} md={3} lg={2} className='grid_cardHomeTurism'>
                  <CardHomeTurism cardImage={info.img} cardTitle={info.title} cardDescription={info.description}/>
                </Grid>
              </div>
            )
          })
        }
      </Grid>
    </div>
  )*/