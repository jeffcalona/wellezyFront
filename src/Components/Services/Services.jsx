import React from 'react'
import {ArrowUp2, Car, Simcard, Verify, Ship, ProfileTick, Profile2User, Hospital, ArrowDown2} from 'iconsax-react';

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
  }
]

const Services = () => {
  return (
    <div className='services'>
      <ul>
        <li><ArrowUp2 size="33" color="white"/></li>
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
        <li><ArrowDown2 size="33" color="white"/></li>
      </ul>
    </div>
  )
}

export default Services