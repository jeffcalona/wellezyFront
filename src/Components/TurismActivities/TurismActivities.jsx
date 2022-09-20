import React, { useEffect, useRef, useState } from 'react'
import './Assets/styles.css'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import TurismCard from '../TurismCard/TurismCard'
import axios from 'axios'
import { Link } from 'react-router-dom'

const MotionConstraints = styled(motion.div)`
  overflow-x: hidden;
`;

const MotionBox = styled(motion.div)`
  width: 500vw;
`

const TurismActivities = ({ cardTitle }) => {
    const constraintsRef = useRef()

    const [activities, setActivities] = useState([])

    const getActivities = async () => {
        await axios.get(process.env.REACT_APP_URL_API_ALL_TOURS).then((response) => {
            setActivities(response.data)
        }). catch ((err) => console.log(err))
    }

    useEffect(() => {
        getActivities()
    }, [])

  return (
    <div className='turismActivities'>
        <h1>{cardTitle}</h1>
        <MotionConstraints className='turismActivities_cards' ref={constraintsRef}>
            <MotionBox className='turismActivities_slider' drag='x' dragConstraints={constraintsRef}>
                {
                    activities.map((activity) => {
                        if (activity.stars >= 4) {
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

export default TurismActivities 