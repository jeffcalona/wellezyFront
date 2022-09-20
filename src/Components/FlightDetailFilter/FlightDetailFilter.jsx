import { Slider } from '@mui/material'
import { Airplane, ArrowDown2, ArrowUp2, Calendar, Filter, Location, Record, RecordCircle, SearchNormal1, TickCircle, User } from 'iconsax-react'
import React, { useRef } from 'react'
import { useState } from 'react'
import VivaLogo from './Assets/Img/VivaLogo.png'
import LatamLogo from './Assets/Img/LatamLogo.png'
import AviancaLogo from './Assets/Img/AviancaLogo.png'
import './Assets/styles.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import FlightsDesinitySearcher from '../FlightsDesinitySearcher/FlightsDesinitySearcher'
import BostonImg from './Assets/Img/BostonImg.jpeg'
import CalgaryImg from './Assets/Img/CalgaryImg.jpeg'
import LondonImg from './Assets/Img/LondonImg.jpeg'
import MiamiImg from './Assets/Img/MiamiImg.jpeg'
import MadridImg from './Assets/Img/MadridImg.jpeg'
import SanJuanImg from './Assets/Img/SanJuanImg.jpeg'

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

const FlightDetailFilter = () => {
    const cardRef = useRef()
    const location = useLocation()

    //const [selectedRating, setSelectedRating] = useState(null)
    const [valueRange, setValueRange] = useState([100, 3000])

    const [infoFlight, setInfoFlight] = useState(true)
    const [detailsFilterFlight, setDetailsFilterFlight] = useState(true)
    const [width, setWidth] = useState(window.innerWidth)

    const [originFlight, setOriginFlight] = useState(location.state.buttonOriginFlight)
    const [destinityFlight, setDestinityFlight] = useState(location.state.buttonDestinityFlight)
    const [clasflightSelected, setclasflightSelected] = useState(location.state.clasSelected)
    const [passengerSelected, setPassengerSelected] = useState(location.state.passengersSelecteds)
    const [dateGoingSelected, setDateGoingSelected] = useState(location.state.dateGoingSelected)
    const [dateReturnSelected, setDateReturnSelected] = useState(location.state.dateSreturnSelected)

    const [classSelect, setClassSelect] = useState('')

    const [citiesDataSelect, setCitiesDataSelect] = useState(citiesData)
    const [openOrigin, setOpenOrigin] = useState(false)

    const changePrice = (event, value) => {
        setValueRange(value)
    }

    const reloadPage = () => {
        setWidth(window.innerWidth)
    }
    if(width === 1100) {
        window.location.reload()
    }

    useEffect(() => {
        window.addEventListener('resize', reloadPage)

        return()=>{
            window.removeEventListener('resize', reloadPage)
        }
    }, [])

    const passengerSelect = `${passengerSelected.adult} adulto ${passengerSelected.boy ? `· ${passengerSelected.boy} niño` : ``} ${passengerSelected.baby ? `· ${passengerSelected.baby} bebé ` : ``}`

    const filterCity = (e) => {
        const searcher = e.target.value
        const newFilter = citiesData.filter((cityData) => {
            return (
                cityData.country.toLowerCase().includes(searcher.toLocaleLowerCase()) ||
                cityData.city.toLowerCase().includes(searcher.toLocaleLowerCase()) || 
                cityData.abr.toLowerCase().includes(searcher.toLocaleLowerCase())
            )
        })
        searcher === '' ? setCitiesDataSelect(citiesData) : setCitiesDataSelect(newFilter)
    }

    const originSearcherSelected = (e) => {
        const resultOrigin = e.target.attributes.category.value
        setOriginFlight(resultOrigin)
        setOpenOrigin(false)
    }

    useEffect(() => {
        if(clasflightSelected.economic){
            setClassSelect('Económico')
        } else if(clasflightSelected.ejecutive){
            setClassSelect('Ejecutiva')
        } else setClassSelect('Business')

        const handler = (e) => {
            if(!cardRef?.current?.contains(e.target)){
                setOpenOrigin(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }

    }, [clasflightSelected])

  return (
    <div className='flightDetailFilter'>
        <div className='flightDetailFilter_flight'>
            <div className='logo_flight'>
                <Airplane size="40" color="white" variant="Bold"/>
                <h2>vuelo</h2>
            </div>
            <div className={infoFlight ? 'flightButtonOn' : 'flightButtonOff'} onClick={() => setInfoFlight(!infoFlight)}>
                <h2>vuelo</h2>
            </div>
            <div className={infoFlight ? 'info_flightContainer' : 'info_flightContainerNone'}>
                <div className='info_flight'>
                    <div className='info-flight_site' onClick={() => setOpenOrigin(!openOrigin)}>
                        <div className='info-flight_site_'>
                            <div className='info-flight_siteTitle'>
                                <h3>origen</h3>
                                <RecordCircle style={{ cursor: 'pointer' }} size="28" color="#004274"/>
                            </div>
                            <p className=''>{originFlight}</p>
                        </div>
                    </div>
                    {openOrigin &&
                        <FlightsDesinitySearcher placeholder={originFlight} citiesData={citiesDataSelect} cardRef={cardRef} filterCity={filterCity} desinitySearcherSelected={originSearcherSelected} flightClass='flight_originSelect'/>
                    }
                    <div className='info-flight_site'>
                        <div className='info-flight_site_'>
                            <div className='info-flight_siteTitle'>
                                <h3>destino</h3>
                                <Location style={{ cursor: 'pointer' }} size="28" color="#004274" variant='Bold' />
                            </div>
                            <p className=''>{destinityFlight}</p>
                        </div>
                    </div>
                    <div className='info-flight_site'>
                        <div className='info-flight_site_'>
                            <div className='info-flight_siteTitle'>
                                <h3>pasajetos</h3>
                                <User style={{ cursor: 'pointer' }} size="28" color="#004274" />
                            </div>
                            <p className=''>{passengerSelect}<span className='info_class'>{classSelect}</span></p>
                        </div>
                    </div>
                </div>
                <div className='info_selec'>
                    <div>
                        <RecordCircle style={{ cursor: 'pointer' }} size="32" className='recordSelectLogo'/>
                        <p>ida y vuelta</p>
                    </div>
                    <div>
                        <Record style={{ cursor: 'pointer' }} size="32" className='recordSelectLogo'/>
                        <p>solo ida</p>
                    </div>
                </div>
                <div className='info_flight'>
                    <div className='info-flight_site'>
                        <div className='info-flight_site_'>
                            <div className='info-flight_siteTitle'>
                                <h3>fecha ida</h3>
                                <Calendar style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                            </div>
                            <div className='info-flight_site_dates'>
                                <p>{dateGoingSelected}</p>
                            </div>
                        </div>
                    </div>
                    <div className='info-flight_site'>
                        <div className='info-flight_site_'>
                            <div className='info-flight_siteTitle'>
                                <h3>fecha vuelta</h3>
                                <Calendar style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                            </div>
                            <div className='info-flight_site_dates'>
                                <p>{dateReturnSelected}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='info-flight_button'>
                    <SearchNormal1 style={{ cursor: 'pointer' }} size="32" className='searcFlight_logo'/>
                    <h2>buscar</h2>
                </div>
            </div>
        </div>
        {/* filter */}
        <div className='flightDetailFilter_filter'>
            <div className={detailsFilterFlight ? 'filterButtonOn' : 'filterButtonOff'} onClick={() => setDetailsFilterFlight(!detailsFilterFlight)}>
                <Filter size="30" className='filterIcon'/>
                <h2>filtrar</h2>
            </div>
            <div className={detailsFilterFlight ? 'filterOn' : 'filterOff'}>
                <div className='flightDetailFilter_filter_'>
                    <div style={{ width: '100%', height: '2px', backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
                    <div className='flightDetailFilter-filter_card'>
                        <div className='flightDetailFilter-filter_cardTitle'>
                            <h3>escalas</h3>
                            <ArrowUp2 style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                        </div>
                        <div className='flightDetailFilter-filter-card_items'>
                            <div className='flightDetailFilter-filter-card_item'>
                                <div className='flightDetailFilter-filter-card-item_description'>
                                    <TickCircle style={{ cursor: 'pointer' }} size="32" color="#004274" variant='Bold'/>
                                    <p>todas las escalas</p>
                                </div>
                                <div className='flightDetailFilter-filter-card-item_value'>
                                    <p>110</p>
                                </div>
                            </div>
                            <div className='flightDetailFilter-filter-card_item'>
                                <div className='flightDetailFilter-filter-card-item_description'>
                                    <Record style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                                    <p>directo</p>
                                </div>
                                <div className='flightDetailFilter-filter-card-item_value'>
                                    <p>40</p>
                                </div>
                            </div>
                            <div className='flightDetailFilter-filter-card_item'>
                                <div className='flightDetailFilter-filter-card-item_description'>
                                    <Record style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                                    <p>1 escala</p>
                                </div>
                                <div className='flightDetailFilter-filter-card-item_value'>
                                    <p>70</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flightDetailFilter_filter'>
                    <div className='flightDetailFilter_filter_'>
                        <div style={{ width: '100%', height: '2px', backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
                        <div className='flightDetailFilter-filter_card'>
                            <div className='flightDetailFilter-filter_cardTitle'>
                                <h3>equipaje</h3>
                                <ArrowUp2 style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                            </div>
                            <div className='flightDetailFilter-filter-card_items'>
                                <div className='flightDetailFilter-filter-card_item'>
                                    <div  className='flightDetailFilter-filter-card-item_description'>
                                        <TickCircle style={{ cursor: 'pointer' }} size="32" color="#004274" variant='Bold'/>
                                        <p>todas las opciones</p>
                                    </div>
                                    <div>
                                        <p>60</p>
                                    </div>
                                </div>
                                <div className='flightDetailFilter-filter-card_item'>
                                    <div  className='flightDetailFilter-filter-card-item_description'>
                                        <Record style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                                        <p>esquipaje de mano</p>
                                    </div>
                                    <div>
                                        <p>40</p>
                                    </div>
                                </div>
                                <div className='flightDetailFilter-filter-card_item'>
                                    <div className='flightDetailFilter-filter-card-item_description'>
                                        <Record style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                                        <p>equipaje en bodega</p>
                                    </div>
                                    <div>
                                        <p>20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flightDetailFilter_filter'>
                    <div className='flightDetailFilter_filter_'>
                        <div style={{ width: '100%', height: '2px', backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
                        <div className='flightDetailFilter-filter_card'>
                            <div className='flightDetailFilter-filter_cardTitle'>
                                <h3>precio</h3>
                                <ArrowUp2 style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                            </div>
                            <div className='flightDetailFilter-filter-card_items'>
                                <div className='flightDetailFilter-filter-card_item'>
                                    <div className='filter_priceSlider'>
                                        <Slider
                                            value={valueRange}
                                            onChange={changePrice}
                                            valueLabelDisplay="auto"
                                            min={100}
                                            max={3000}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flightDetailFilter_filter'>
                    <div className='flightDetailFilter_filter_'>
                        <div style={{ width: '100%', height: '2px', backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
                        <div className='flightDetailFilter-filter_card'>
                            <div className='flightDetailFilter-filter_cardTitle'>
                                <h3>Aerolínea</h3>
                                <ArrowUp2 style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                            </div>
                            <div className='flightDetailFilter-filter-card_items'>
                                <div className='flightDetailFilter-filter-card_item'>
                                    <div className='flightDetailFilter-filter-card-item_description'>
                                        <TickCircle style={{ cursor: 'pointer' }} size="32" color="#004274" variant='Bold'/>
                                        <p>todas las aerolineas</p>
                                    </div>
                                    <div className='flightDetailFilter-filter-card-item_value'>
                                        <p>150</p>
                                    </div>
                                </div>
                                <div className='flightDetailFilter-filter-card_item'>
                                    <div className='flightDetailFilter-filter-card-item_description'>
                                        <Record style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                                        <div className='filter-card-description_img'>
                                            <img src={VivaLogo} alt="viva" />
                                        </div>
                                        <p>viva vair</p>
                                    </div>
                                    <div className='flightDetailFilter-filter-card-item_value'>
                                        <p>80</p>
                                    </div>
                                </div>
                                <div className='flightDetailFilter-filter-card_item'>
                                    <div className='flightDetailFilter-filter-card-item_description'>
                                        <Record style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                                        <div className='filter-card-description_img'>
                                            <img src={LatamLogo} alt="latam" />
                                        </div>
                                        <p>latam</p>
                                    </div>
                                    <div className='flightDetailFilter-filter-card-item_value'>
                                        <p>50</p>
                                    </div>
                                </div>
                                <div className='flightDetailFilter-filter-card_item'>
                                    <div className='flightDetailFilter-filter-card-item_description'>
                                        <Record style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                                        <div className='filter-card-description_img'>
                                            <img src={AviancaLogo} alt="latam" />
                                        </div>
                                        <p>avianca</p>
                                    </div>
                                    <div className='flightDetailFilter-filter-card-item_value'>
                                        <p>20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flightDetailFilter_filter'>
                    <div className='flightDetailFilter_filter_'>
                        <div style={{ width: '100%', height: '2px', backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
                        <div className='flightDetailFilter-filter_card'>
                            <div className='flightDetailFilter-filter_cardTitle'>
                                <h3>Aerolínea</h3>
                                <ArrowDown2 style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                            </div>
                        </div>
                        <div style={{ width: '100%', height: '2px', backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlightDetailFilter