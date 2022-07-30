import { Airplane, Calendar, Record, RecordCircle, SearchNormal1, User } from 'iconsax-react'
import React, { useEffect, useState } from 'react'
import HeaderImg from './Assets/Img/HeaderImg.jpeg'
import './Assets/styles.css'
import BostonImg from './Assets/Img/BostonImg.jpeg'
import CalgaryImg from './Assets/Img/CalgaryImg.jpeg'
import LondonImg from './Assets/Img/LondonImg.jpeg'
import MiamiImg from './Assets/Img/MiamiImg.jpeg'
import MadridImg from './Assets/Img/MadridImg.jpeg'
import SanJuanImg from './Assets/Img/SanJuanImg.jpeg'
import { useRef } from 'react'
import FlightsDesinitySearcher from '../FlightsDesinitySearcher/FlightsDesinitySearcher'
import FlightsPassengerDetails from '../FlightsPassengerDetails/FlightsPassengerDetails'
import FlightsDateGoing from '../FlightsDateGoing/FlightsDateGoing'

const citiesData = [
    {id: 1, country: 'united states', city: 'boston', abr: 'bos', img: BostonImg},
    {id: 2, country: 'canada', city: 'calgary', abr: 'yyc', img: CalgaryImg},
    {id: 3, country: 'reino unido', city: 'londres', abr: 'lon', img: LondonImg},
    {id: 4, country: 'united states', city: 'miami', abr: 'mia', img: MiamiImg},
    {id: 5, country: 'españa', city: 'madrid', abr: 'mad', img: MadridImg},
    {id: 6, country: 'puerto rico', city: 'san juan', abr: 'sju', img: SanJuanImg},
    {id: 7, country: 'united states', city: 'boston', abr: 'bos', img: BostonImg},
    {id: 8, country: 'canada', city: 'calgary', abr: 'yyc', img: CalgaryImg}
]

const FlightsHeader = () => {
    const cardRef = useRef()

    const [citiesDataState, setCitiesDataState] = useState(citiesData)
    const [origin, setOrigin] = useState(false)
    const [destinity, setDestinity] = useState(false)
    const [passagerDetails, setPassagerDetails] = useState(false)
    const [dateGoing, setDateGoing] = useState(false)
    const [roundTrip, setRoundTrip] = useState(true)
    const [oneWay, setOneWay] = useState(false)

    const filterCity = (e) => {
        const searcher = e.target.value
        const newFilter = citiesData.filter((cityData) => {
            return (
                cityData.country.toLowerCase().includes(searcher.toLocaleLowerCase()) ||
                cityData.city.toLowerCase().includes(searcher.toLocaleLowerCase())
            )
        })
        searcher === '' ? setCitiesDataState(citiesData) : setCitiesDataState(newFilter)
    }

    const changeRoundTrip = () => {
        setOneWay(false)
        setRoundTrip(true)
    }
    const changeOneWay = () => {
        setOneWay(true)
        setRoundTrip(false)
    }

    useEffect(() => {
        const handler = (e) => {
            if(!cardRef.current.contains(e.target)){
                setOrigin(false)
                setDestinity(false)
                setPassagerDetails(false)
                setDateGoing(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, [])

  return (
    <div className='flightsHeader'>
        <div className='flightsHeader_img'>
            <img src={HeaderImg} alt="Header" />
        </div>
        <div className='flightsHeader_info'>
            <div className='flightsHeader-info_flight'>
                <div className='flightsHeader-info-flight_content'>
                    <div className='flightsHeader_logo'>
                        <Airplane size="32" color="white" variant="Bold"/>
                        <h3>vuelos</h3>
                    </div>
                    <div className='flight_sites'>
                        <div style={{ width: '94%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                            <div className='flight_site' onClick={() => setOrigin(!origin)}>
                                <h2>origen</h2>
                                <p>Desde donde viaja</p>
                            </div>
                            {origin &&
                                <FlightsDesinitySearcher placeholder='Origen' citiesData={citiesDataState} cardRef={cardRef} filterCity={filterCity} flightClass='flight_searchCitiesOrigin' />
                            }
                            <Airplane className='flight-sites_airplane' size="32" color="white" variant="Bold"/>
                            <div className='flight_site' onClick={() => setDestinity(!destinity)}>
                                <h2>destino</h2>
                                <p>Hacia donde viaja</p>
                            </div>
                            {destinity && 
                                <FlightsDesinitySearcher placeholder='Destino' citiesData={citiesDataState} cardRef={cardRef} filterCity={filterCity} flightClass='flight_searchCitiesDestinity' />
                            }
                            <div className='flight_passengers' onClick={() => setPassagerDetails(!passagerDetails)}>
                                <h2>Pasajeros <User size="30" color="#004274"/></h2>
                                <p>Desde donde viaja</p>
                            </div>
                            {passagerDetails &&
                                <FlightsPassengerDetails cardRef={cardRef} />
                            }
                        </div>
                    </div>
                    <div>
                        <div className='flight_select'>
                            <div className='flight_select_'>
                                <div onClick={changeRoundTrip}>
                                    {roundTrip ?
                                        <RecordCircle style={{ cursor: 'pointer' }} size="32" color="white"/>
                                        :
                                        <Record style={{ cursor: 'pointer' }}    size="32" color="white"/>
                                    }
                                </div>
                                <p>Ida y vuelta</p>
                            </div>
                            <div className='flight_select_'>
                                <div onClick={changeOneWay}>
                                    {oneWay ?
                                        <RecordCircle style={{ cursor: 'pointer' }} size="32" color="white"/>
                                        :
                                        <Record style={{ cursor: 'pointer' }}    size="32" color="white"/>
                                    }
                                </div>
                                <p>Solo ida</p>
                            </div>
                        </div>
                    </div>
                    <div className='flight_dates'>
                        <div style={{ width: '94%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div className='flight_date' onClick={() => setDateGoing(!dateGoing)}>
                                <h2>fecha ida</h2>
                                <div>
                                    <Calendar size="32" color="#004274" variant="Bold"/>
                                </div>
                            </div>
                            {dateGoing &&
                                <FlightsDateGoing />
                            }
                            {roundTrip ?
                                <div className='flight_date'>
                                    <h2>fecha vuelta</h2>
                                    <div>
                                        <Calendar size="32" color="#004274" variant="Bold"/>
                                    </div>
                                </div>
                                :
                                <div className='flight_dateNone'>
                                    <h2>fecha vuelta</h2>
                                    <div>
                                        <Calendar size="32" color="#004274" variant="Bold"/>
                                    </div>
                                </div>
                            }
                            <div className='flight_searcher'>
                                <SearchNormal1 size="45" color="#004274"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flightsHeader-info_text'>
                <div className='flightsHeader-info-text_content'>
                    <h1>vuelos</h1>
                    <p>el mundo espera por ti!, que vuelo elegir</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlightsHeader