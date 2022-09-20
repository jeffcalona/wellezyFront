import React from 'react'
import TurismActivities from '../../Components/TurismActivities/TurismActivities'
import TurismHeader from '../../Components/TurismHeader/TurismHeader'
import TurismNational from '../../Components/TurismNational/TurismNational'
import TurismTop from '../../Components/TurismTop/TurismTop'

const Turism = () => {
  return (
    <div>
        <TurismHeader />
        <div style={{ height: '60px' }} />
        {/* Con 4 o mas estrellas */}
        <TurismActivities cardTitle='Actividades que te van a encantar' />
        {/* Sólo nacionales */}
        <TurismNational cardTitle='vacaciones en destinos nacionales' />
        <TurismTop />
    </div>
  )
}

export default Turism