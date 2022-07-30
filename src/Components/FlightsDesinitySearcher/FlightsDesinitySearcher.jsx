import React from 'react'
import './Assets/styles.css'

//flight_searchCities

const FlightsDesinitySearcher = ({ placeholder, citiesData, cardRef, filterCity, flightClass }) => {
  return (
    <div className={flightClass} ref={cardRef}>
        <div className='flight-searchCities_input'>
            <input type="text" placeholder={placeholder} onChange={filterCity} />
        </div>
        <div className='flight-searchCities_cities'>
            {citiesData.map((cityData) => {
                return (
                    <div key={cityData.id} className='cityData'>
                        <div className='cityData_img'>
                            <img src={cityData.img} alt={cityData.city} />
                        </div>
                        <div className='cityData_text'>
                            <div className='cityData_cityCountry'>
                                <p>{cityData.city} - {cityData.country}</p>
                            </div>
                            <div className='cityData_abr'>
                                <p>{cityData.abr}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default FlightsDesinitySearcher