import React, { useRef, useEffect, useState } from 'react'
import TurismCard from '../TurismCard/TurismCard';
import { motion } from 'framer-motion'
import styled from 'styled-components'
import './Assets/styles.css'
import axios from 'axios';

const MotionConstraints = styled(motion.div)`
  overflow-x: hidden;
`;

const MotionBox = styled(motion.div)`
  width: 500vw;
`

const TurismNational = ({ cardTitle }) => {
    const constraintsRef = useRef()

    const [nationals, setNationals] = useState([])

    const getNationals = async () => {
        await axios.get(process.env.REACT_APP_URL_API_ALL_TOURS).then((response) => {
            setNationals(response.data)
        }). catch ((err) => console.log(err))
    }

    useEffect(() => {
        getNationals()
    }, [])

  return (
    <div className='turismNational'>
        <h1>{cardTitle}</h1>
        <MotionConstraints className='turismNational_cards' ref={constraintsRef}>
            <MotionBox className='turismNational_slider' drag='x' dragConstraints={constraintsRef}>
                {
                    nationals.map((activity) => {
                        if (activity.country === 'Colombia') {
                            return (
                                <TurismCard img={activity.img} title={activity.name_tour} site={activity.municipality} time={activity.duration} includes='desayuno - guia - transporte - entrada temática' price={activity.price} star={activity.stars} link={`/tour/${activity.id}`} />
                            )
                        }
                    })
                }
            </MotionBox>
        </MotionConstraints>
    </div>
  )
}

export default TurismNational