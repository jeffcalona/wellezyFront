import React, { useRef } from 'react'
import {ArrowUp2, Car, Simcard, Verify, Ship, ProfileTick, Profile2User, Hospital, ArrowDown2} from 'iconsax-react';
import { motion } from 'framer-motion'
import styled from 'styled-components'

import './Assets/styles.css'

const servicesElements = [
  {
    icon: <Car size="33" color="white"/>,
    description: 'Transporte'
  },
  {
    icon: <Simcard size="33" color="white"/>,
    description: 'Sim Card'
  },
  {
    icon: <Verify size="33" color="white"/>,
    description: 'Nutrición Saludable'
  },
  {
    icon: <Ship size="33" color="white"/>,
    description: 'Turismo'
  },
  {
    icon: <ProfileTick size="33" color="white"/>,
    description: 'Enfermeras'
  },
  {
    icon: <Profile2User size="33" color="white"/>,
    description: 'Doctores'
  },
  {
    icon: <Hospital size="33" color="white"/>,
    description: 'Lugar de Recuperación'
  },
  {
    icon: <Car size="33" color="white"/>,
    description: 'Transporte'
  },
  {
    icon: <Simcard size="33" color="white"/>,
    description: 'Sim Card'
  },
  {
    icon: <Verify size="33" color="white"/>,
    description: 'Nutrición Saludable'
  }
]

const servicesElementsPhone = [
  {
    icon: <Car size="36" color="white"/>,
    description: 'Transporte'
  },
  {
    icon: <Simcard size="36" color="white"/>,
    description: 'Sim Card'
  },
  {
    icon: <Verify size="36" color="white"/>,
    description: 'Nutrición Saludable'
  },
  {
    icon: <Ship size="36" color="white"/>,
    description: 'Turismo'
  },
  {
    icon: <ProfileTick size="36" color="white"/>,
    description: 'Enfermeras'
  },
  {
    icon: <Profile2User size="36" color="white"/>,
    description: 'Doctores'
  },
  {
    icon: <Hospital size="36" color="white"/>,
    description: 'Lugar de Recuperación'
  },
  {
    icon: <Car size="33" color="white"/>,
    description: 'Transporte'
  },
  {
    icon: <Simcard size="33" color="white"/>,
    description: 'Sim Card'
  },
  {
    icon: <Verify size="33" color="white"/>,
    description: 'Nutrición Saludable'
  }
]

const MotionConstraints = styled(motion.div)`
  width: 100vw;
  overflow-x: hidden;
`;

const MotionBox = styled(motion.div)`
  width: 160vw;
`

const Services = () => {
  const constraintsRef = useRef(null)
  return (
    <>
      <div className='services'>
          <motion.div drag='y' dragConstraints={{top: -190, bottom: 0}}>
            {
              servicesElements.map((service, index) => {
                return (
                  <ul key={index}>
                    <li>
                      {service.icon}
                      <p>{service.description}</p>
                    </li>
                  </ul>
                )
              })
            }
          </motion.div>
      </div>
      <MotionConstraints ref={constraintsRef} className='servicesPhone'>
          <MotionBox drag='x' dragConstraints={constraintsRef} className='slider_'>
            {
              servicesElementsPhone.map((service, index) => {
                return (
                  <ul key={index}>
                    <li>
                      {service.icon}
                      <p>{service.description}</p>
                    </li>
                  </ul>
                )
              })
            }
          </MotionBox>
      </MotionConstraints>
    </>
  )
}

export default Services