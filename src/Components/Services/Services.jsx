import React, { useRef } from 'react'
import { Car, Simcard, Verify, Ship, ProfileTick, Profile2User, Hospital } from 'iconsax-react';
import { motion } from 'framer-motion'
import styled from 'styled-components'

import './Assets/styles.css'
import { Link } from 'react-router-dom';

const servicesElements = [
  {
    icon: <Car size="33" color="white"/>,
    description: 'Transporte',
    link: '/transports'
  },
  {
    icon: <Simcard size="33" color="white"/>,
    description: 'Sim Card',
    link: '/simcard'
  },
  {
    icon: <Verify size="33" color="white"/>,
    description: 'Nutrición Saludable',
    link: '/nutrition'
  },
  {
    icon: <Ship size="33" color="white"/>,
    description: 'Turismo',
    link: '/turism'
  },
  {
    icon: <ProfileTick size="33" color="white"/>,
    description: 'Enfermeras',
    link: '/nurses'
  },
  {
    icon: <Profile2User size="33" color="white"/>,
    description: 'Doctores',
    link: '/doctors'
  },
  {
    icon: <Hospital size="33" color="white"/>,
    description: 'Lugar de Recuperación',
    link: '/recovery'
  },
  {
    icon: <Car size="33" color="white"/>,
    description: 'Transporte',
    link: '/transports'
  },
  {
    icon: <Simcard size="33" color="white"/>,
    description: 'Sim Card',
    link: '/simcard'
  },
  {
    icon: <Verify size="33" color="white"/>,
    description: 'Nutrición Saludable',
    link: '/nutrition'
  }
]

const servicesElementsPhone = [
  {
    icon: <Car size="36" color="white"/>,
    description: 'Transporte',
    link: '/transports'
  },
  {
    icon: <Simcard size="36" color="white"/>,
    description: 'Sim Card',
    link: '/simcard'
  },
  {
    icon: <Verify size="36" color="white"/>,
    description: 'Nutrición Saludable',
    link: '/nutrition'
  },
  {
    icon: <Ship size="36" color="white"/>,
    description: 'Turismo',
    link: '/turism'
  },
  {
    icon: <ProfileTick size="36" color="white"/>,
    description: 'Enfermeras',
    link: '/nurses'
  },
  {
    icon: <Profile2User size="36" color="white"/>,
    description: 'Doctores',
    link: '/doctors'
  },
  {
    icon: <Hospital size="36" color="white"/>,
    description: 'Lugar de Recuperación',
    link: '/recovery'
  },
  {
    icon: <Car size="33" color="white"/>,
    description: 'Transporte',
    link: 'transports'
  },
  {
    icon: <Simcard size="33" color="white"/>,
    description: 'Sim Card',
    link: '/simcard'
  },
  {
    icon: <Verify size="33" color="white"/>,
    description: 'Nutrición Saludable',
    link: '/nutrition'
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
                      <Link to={service.link}>
                        {service.icon}
                        <p>{service.description}</p>
                      </Link>
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
                      <Link to={service.link}>
                        {service.icon}
                        <p>{service.description}</p>
                      </Link>
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