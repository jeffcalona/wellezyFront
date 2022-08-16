import { Grid } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import CardHomeDoctors from '../CardHomeDoctors/CardHomeDoctors'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import './Assets/styles.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
 
const MotionConstraints = styled(motion.div)`
  overflow: hidden;
`;

const MotionBox = styled(motion.div)`
  width: 3000vw;
`

const HomeDoctors = () => {
  const constraintsRef = useRef(null)
  const autoPrincipalImg = useRef(null)

  const [doctors, setDoctors] = useState([])

  const nextHandler = () => {
    if(autoPrincipalImg.current.children.length > 0) {
      const firtImg = autoPrincipalImg.current.children[0]

      autoPrincipalImg.current.style.transition = `1000ms ease-out all`
      const widthImg = autoPrincipalImg.current.children[0].offsetWidth + 20
      autoPrincipalImg.current.style.transform = `translateX(-${widthImg}px)`

      const transition = () => {
        autoPrincipalImg.current.style.transition = 'none'
        autoPrincipalImg.current.style.transform = `translateX(0)`

        autoPrincipalImg.current.appendChild(firtImg)
      }
      autoPrincipalImg.current.addEventListener('transitionend', transition)
    } 
  }

  const randomImgDoctors = () => {
    return doctors.sort(() => Math.random() - 0.5)
  }
  const randomDoctors = () => {
    return doctors.sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    const getApiDoctors = async () => {
      await axios.get(process.env.REACT_APP_URL_API_DOCTORS).then((response) => {
        setDoctors(response.data.data)
      }).catch((err) => {
        console.log(err)
      })
    }
    getApiDoctors()

    setInterval(() => {
      nextHandler()
  }, 3000)

  }, [])
  

  return (
    <Grid container justifyContent='center'>
      <div className='div_HomeDoctors'>
        <Grid className='HomeDoctors'>
          <div className='homeDoctors_link'>
            <Link to='/doctors' className='homeDoctors_link_'>
              <h1>Doctores</h1>
            </Link>
          </div>
          <div className='div_PrincipalImg'>
            <div className='div_PrincipalImg_' ref={autoPrincipalImg}>
              {randomImgDoctors().map((doctorImg) => {
                return (
                    <img src={`${process.env.REACT_APP_URL_API_IMGDOCTORS}${doctorImg.img}`} alt="" />
                )
              })}
            </div>
          </div>
          <MotionConstraints className='sliderContainer_doctors' ref={constraintsRef}>
            <MotionBox className='slider_doctors' drag='x' dragConstraints={constraintsRef}>
                {
                  randomDoctors().map((doctor, index) => {
                    return (
                      <Grid item key={index} className='grid_CardHomeDoctors'>
                          <CardHomeDoctors imgDoctor={`${process.env.REACT_APP_URL_API_IMGDOCTORS}${doctor.img}`} nameDoctor={doctor.name} descriptionDoctor={doctor.title} cityDoctor={doctor.city} starsNumber={doctor.stars} linkDoctor={`/doctor/${doctor.id}`} />
                      </Grid>
                    )
                  })
                }
            </MotionBox>
          </MotionConstraints>
        </Grid>
      </div>
    </Grid>
  )
}

export default HomeDoctors