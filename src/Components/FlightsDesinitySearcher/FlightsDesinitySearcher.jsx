import React, { useState } from 'react'
import './Assets/styles.css'

//flight_searchCities
const FlightsDesinitySearcher = ({ placeholder, citiesData, cardRef, filterCity, flightClass, desinitySearcherSelected }) => {

  return (
    <div className={flightClass} ref={cardRef}>
        <div className='flight-searchCities_input'>
            <input type="text" placeholder={placeholder} onChange={filterCity} />
        </div>
        <div className='flight-searchCities_cities'>
            {citiesData.map((cityData) => {
                return (
                    <div className='cityData_result'>
                        <button style={{ border: 'none', width: '100%', height: '50px', position: 'absolute', top: '0', display: 'flex', display: 'block', zIndex: 6, backgroundColor: 'rgba(0, 0, 0, 0)', cursor: 'pointer'}} category={`${cityData.city}, ${cityData.country} - ${cityData.abr}`} onClick={desinitySearcherSelected} key={cityData.id} />
                            <div className='cityData'>
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
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default FlightsDesinitySearcher