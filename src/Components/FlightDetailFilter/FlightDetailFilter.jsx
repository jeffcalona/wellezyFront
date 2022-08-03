import { Slider } from '@mui/material'
import { Airplane, ArrowDown2, ArrowUp2, Calendar, Location, Record, RecordCircle, SearchNormal1, TickCircle, User } from 'iconsax-react'
import React from 'react'
import { useState } from 'react'
import VivaLogo from './Assets/Img/VivaLogo.png'
import LatamLogo from './Assets/Img/LatamLogo.png'
import AviancaLogo from './Assets/Img/AviancaLogo.png'
import './Assets/styles.css'

const FlightDetailFilter = () => {

    const [selectedRating, setSelectedRating] = useState(null)
    const [valueRange, setValueRange] = useState([100, 3000])

    const changePrice = (event, value) => {
        setValueRange(value)
    }

  return (
    <div className='flightDetailFilter'>
        <div className='flightDetailFilter_flight'>
            <div className='logo_flight'>
                <Airplane size="40" color="white" variant="Bold"/>
                <h2>vuelo</h2>
            </div>
            <div className='info_flight'>
                <div className='info-flight_site'>
                    <div className='info-flight_site_'>
                        <div className='info-flight_siteTitle'>
                            <h3>origen</h3>
                            <RecordCircle style={{ cursor: 'pointer' }} size="28" color="#004274"/>
                        </div>
                        <p className=''>san juan, puerto rico - <span className='info_abr'>sju</span></p>
                    </div>
                </div>
                <div className='info-flight_site'>
                    <div className='info-flight_site_'>
                        <div className='info-flight_siteTitle'>
                            <h3>destino</h3>
                            <Location style={{ cursor: 'pointer' }} size="28" color="#004274" variant='Bold' />
                        </div>
                        <p className=''>medellín colombia - <span className='info_abr'>mde</span></p>
                    </div>
                </div>
                <div className='info-flight_site'>
                    <div className='info-flight_site_'>
                        <div className='info-flight_siteTitle'>
                            <h3>pasajetos</h3>
                            <User style={{ cursor: 'pointer' }} size="28" color="#004274" />
                        </div>
                        <p className=''>1 adulto - <span className='info_class'>Económico</span></p>
                    </div>
                </div>
            </div>
            <div className='info_selec'>
                <div>
                    <RecordCircle style={{ cursor: 'pointer' }} size="32" color="white"/>
                    <p>ida y vuelta</p>
                </div>
                <div>
                    <Record style={{ cursor: 'pointer' }} size="32" color="white"/>
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
                            <p>miercoles, 6 julio 2022</p>
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
                            <p>domingo, 31 julio 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='info-flight_button'>
                <SearchNormal1 style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                <h2>buscar</h2>
            </div>
        </div>
        <div className='flightDetailFilter_filter'>
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
  )
}

export default FlightDetailFilter