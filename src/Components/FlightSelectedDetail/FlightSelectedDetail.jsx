import React from 'react'
import FlightDetail from '../FlightDetail/FlightDetail'
import FlightDetailFilter from '../FlightDetailFilter/FlightDetailFilter'
import './Assets/styles.css'

const FlightSelectedDetail = () => {
  return (
    <div className='flightSelectedDetail'>
        <FlightDetailFilter />
        <FlightDetail />
    </div>
  )
}

export default FlightSelectedDetail