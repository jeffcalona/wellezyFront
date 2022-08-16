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
import { useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate()

    const [citiesDataState, setCitiesDataState] = useState(citiesData)
    const [origin, setOrigin] = useState(false)
    const [destinity, setDestinity] = useState(false)
    const [passagerDetails, setPassagerDetails] = useState(false)
    const [dateGoing, setDateGoing] = useState(false)
    const [roundTrip, setRoundTrip] = useState(true)
    const [oneWay, setOneWay] = useState(false)

    const [dateGoingSelected, setDateGoingSelected] = useState('fecha ida')
    const [dateSreturnSelected, setDateSreturnSelected] = useState('fecha vuelta')

    const [placeholderOriginFlight, setPlaceholderOriginFlight] = useState('Origen')
    const [buttonOriginFlight, setButtonOriginFlight] = useState('Desde donde viaja')

    const [placeholderDestinityFlight, setPlaceholderDestinityFlight] = useState('destino')
    const [buttonDestinityFlight, setButtonDestinityFlight] = useState('Hacia donde viaja')

    const [passengersSelecteds, setPassengersSelecteds] = useState({
        adult: 1,
        boy: 0,
        baby: 0
    })

    const [clasSelected, setClasSelected] = useState({
        economic: true,
        ejecutive: false,
        business: false
    })

    const [clasSelectedText, setClasSelectedText] = useState('económico')

    const [buttonPassengerSelected, setButtonPassengerSelected] = useState('desde donde viaja')

    const filterCity = (e) => {
        const searcher = e.target.value
        const newFilter = citiesData.filter((cityData) => {
            return (
                cityData.country.toLowerCase().includes(searcher.toLocaleLowerCase()) ||
                cityData.city.toLowerCase().includes(searcher.toLocaleLowerCase()) || 
                cityData.abr.toLowerCase().includes(searcher.toLocaleLowerCase())
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

    const originSearcherSelected = (e) => {
        const resultOrigin = e.target.attributes.category.value
        setPlaceholderOriginFlight(resultOrigin)
        setButtonOriginFlight(resultOrigin)
        setOrigin(false)
        console.log(e.target.attributes.category.value)
    }

    const desinitySearcherSelected = (e) => {
        const resultDestinity = e.target.attributes.category.value
        setPlaceholderDestinityFlight(resultDestinity)
        setButtonDestinityFlight(resultDestinity)
        setDestinity(false)
    }

    const handleNumber = (tipe, operation) => {
        setPassengersSelecteds((prev) => {
            return {
                ...prev, [tipe]: operation === 'increase' ? passengersSelecteds[tipe] + 1 : passengersSelecteds[tipe] - 1
            }
        })
    }   

    const economicClasFunction = () => {
        setClasSelected({
            economic: true,
            ejecutive: false,
            business: false
        })
        setClasSelectedText('ecónomico')
    }
    const ejecutiveClasFunction = () => {
        setClasSelected({
            economic: false,
            ejecutive: true,
            business: false
        })
        setClasSelectedText('ejecutiva')
    }
    const businessClasFunction = () => {
        setClasSelected({
            economic: false,
            ejecutive: false,
            business: true
        })
        setClasSelectedText('business')
    }

    const passengerContinue = () => {
        const data = `${passengersSelecteds.adult} adulto${passengersSelecteds.boy ? ` ${passengersSelecteds.boy} · niño ·` : ``} ${passengersSelecteds.baby ? `${passengersSelecteds.baby} bebé ` : ``}· clase ${clasSelectedText}`
        setButtonPassengerSelected(data)
        setPassagerDetails(false)
    }

    useEffect(() => {
        const handler = (e) => {
            if(!cardRef?.current?.contains(e.target)){
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

    const searcherFlight = () => {
        navigate('/flight/selected', {state: {buttonOriginFlight, buttonDestinityFlight, passengersSelecteds, clasSelected, dateGoingSelected, dateSreturnSelected}})
    }

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
                        <div className='flight_sites_'>
                            <div className='flight_site' onClick={() => setOrigin(!origin)}>
                                <h2>origen</h2>
                                <p>{buttonOriginFlight}</p>
                            </div>
                            {origin &&
                                <FlightsDesinitySearcher placeholder={placeholderOriginFlight} citiesData={citiesDataState} cardRef={cardRef} filterCity={filterCity} flightClass='flight_searchCitiesOrigin' desinitySearcherSelected={originSearcherSelected} />
                            }
                            <Airplane className='flight-sites_airplane' size="32" color="white" variant="Bold"/>
                            <div className='flight_site' onClick={() => setDestinity(!destinity)}>
                                <h2>destino</h2>
                                <p>{buttonDestinityFlight}</p>
                            </div>
                            {destinity && 
                                <FlightsDesinitySearcher placeholder={placeholderDestinityFlight} citiesData={citiesDataState} cardRef={cardRef} filterCity={filterCity} flightClass='flight_searchCitiesDestinity' desinitySearcherSelected={desinitySearcherSelected}  />
                            }
                            <div className='flight_passengers' onClick={() => setPassagerDetails(!passagerDetails)}>
                                <h2>Pasajeros <User size="30" color="#004274"/></h2>
                                <p>{buttonPassengerSelected}</p>
                            </div>
                            {passagerDetails &&
                                <FlightsPassengerDetails cardRef={cardRef} passengerContinue={passengerContinue} handleNumber={handleNumber} adultNum={passengersSelecteds.adult} boyNum={passengersSelecteds.boy} babyNum={passengersSelecteds.baby} passengersSelecteds={passengersSelecteds} clasSelected={clasSelected} economicClasFunction={economicClasFunction} ejecutiveClasFunction={ejecutiveClasFunction} businessClasFunction={businessClasFunction}  />
                            }
                        </div>
                    </div>
                    <div className='flight_selectContainer'>
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
                        <div className='flight_dates_'>
                            <div className='flight_date' onClick={() => setDateGoing(!dateGoing)}>
                                <h2>{dateGoingSelected}</h2>
                                <div>
                                    <Calendar size="32" color="#004274" variant="Bold"/>
                                </div>
                            </div>
                            {dateGoing &&
                                <FlightsDateGoing oneWay={oneWay} roundTrip={roundTrip} cardRef={cardRef} setDateGoingSelected={setDateGoingSelected} setDateSreturnSelected={setDateSreturnSelected} searcherFlight={searcherFlight}/>
                            }
                            {roundTrip ?
                                <div className='flight_date'>
                                    <h2>{dateSreturnSelected}</h2>
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
                            <button className='flight_searcher' onClick={searcherFlight}>
                                <div>
                                    <SearchNormal1 size="45" color="#004274"/>
                                </div>
                            </button>
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