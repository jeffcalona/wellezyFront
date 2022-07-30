import React from 'react'
import { useSelector } from 'react-redux'
import FlightsHeader from '../../Components/FlightsHeader/FlightsHeader'
import FlightsHeaderSlider from '../../Components/FlightsHeaderSlider/FlightsHeaderSlider'
import FlightsMostWanted from '../../Components/FlightsMostWanted/FlightsMostWanted'
import FlightsTopHoteles from '../../Components/FlightsTopHoteles/FlightsTopHoteles'
import Questions from '../../Components/Questions/Questions'
import FlightsVacationsNational from '../../Components/FlightsVacationsNational/FlightsVacationsNational'
import './Assets/styles.css'
import FlightsPublicity from '../../Components/FlightsPublicity/FlightsPublicity'

const  Flights = () => {

  const { questionsList } = useSelector(state => state.questions)

  return (
    <div>
        {questionsList.questions &&
          <Questions question={questionsList} /*clickQuestion={questionSelected}*/ />
        }
        <FlightsHeader />
        <FlightsHeaderSlider />
        <div className='flights_main'>
          <FlightsMostWanted />
          <FlightsVacationsNational />
          <FlightsTopHoteles />
          <FlightsPublicity />
        </div>
    </div>
  )
}

export default  Flights