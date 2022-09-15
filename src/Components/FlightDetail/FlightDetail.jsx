import React, { useState } from 'react'
import './Assets/styles.css'
import VivaLogo from '../FlightDetailFilter/Assets/Img/VivaLogo.png'
import LatamLogo from '../FlightDetailFilter/Assets/Img/LatamLogo.png'
import AviancaLogo from '../FlightDetailFilter/Assets/Img/AviancaLogo.png'
import Alert from './Assets/Img/Alert.png'
import LogoBlue from './Assets/Img/LogoBlue.png'
import AgregasEquipajeVector from './Assets/Img/AgregasEquipajeVector.png'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link } from 'react-router-dom'
import { Airplane, ArrowDown2, ArrowRight2, Record, RecordCircle } from 'iconsax-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons'

const airlines = [
  {
    id: 1,
    img: VivaLogo,
    name: 'viva air',
    priceDirect: 1050,
    priceOneScale: 950,
    priceMoreScale: null, 
  },
  {
    id: 2,
    img: LatamLogo,
    name: 'latam airlines',
    priceDirect: 1100,
    priceOneScale: 1080,
    priceMoreScale: null, 
  },
  {
    id: 3, 
    img: AviancaLogo, 
    name: 'avianca',
    priceDirect: 1120,
    priceOneScale: 1100,
    priceMoreScale: 1050, 
  },
]

const alinesGoing = [
  {id: 1, img: VivaLogo, name: 'viva air', timeToGo: '10:20', scales: 1, arrivalTime: '17:46', flightTime: '7h 26m', baggage: 1}
]

const alinesReturn = [
  {id: 1, img: VivaLogo, name: 'viva air', timeToGo: '10:20', scales: 1, arrivalTime: '17:46', flightTime: '7h 26m', baggage: 1},
  {id: 2, img: VivaLogo, name: 'viva air', timeToGo: '10:20', scales: 1, arrivalTime: '17:46', flightTime: '7h 26m', baggage: 1},
  {id: 3, img: VivaLogo, name: 'viva air', timeToGo: '10:20', scales: 1, arrivalTime: '17:46', flightTime: '7h 26m', baggage: 1}
]


const FlightDetail = () => {

  const [value, setValue] = useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  }; 

  return (
    <div className='flightDetail'>
      <div style={{ widows: '100%', height: '290px', borderRadius: '20px', boxShadow: '-4px 4px 4px rgba(0, 0, 0, 0.25)', marginBottom: '20px'}}>
        <Box sx={{ width: '100%', marginBottom: '20px'}}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
              <TabList onChange={handleChange} aria-label="lab API tabs example" value="1">
                <Tab label="precio por aerolínea" value="1" sx={{ width: '50%' }}/>
                <Tab label="precio +/- 3 días" value="2" sx={{ width: '50%' }}/>
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ padding: '0 !important' }}>
              <div className='pricesByAirlines'>
                <div className='pricesByScales'>
                  <div style={{ width: '100%', height: '60px', borderBottom: '1px solid rgba(0, 0, 0, .3)' }}/>
                  <div className='pricesByScales_'>
                    <p>directo</p>
                  </div>
                  <div className='pricesByScales_'>
                    <p>1 escala</p>
                  </div>
                  <div className='pricesByScales_' style={{ border: 'none' }}>
                    <p>2 o más escalas</p>
                  </div>
                </div>
                <div className='pricesByAirline'>
                  {airlines.map((airline) => {
                    return (
                      <div key={airline.id} className='pricesByAirline_'>
                        <div className='pricesByAirline_title'>
                          <div className='pricesByAirline_img'>
                            <img src={airline.img} alt={airline.name} />
                          </div>
                          <p>{airline.name}</p>
                        </div>
                        <div className='priceByAirline_price'>
                          <p>$ {airline.priceDirect}</p>
                        </div>
                        <div className='priceByAirline_price'>
                          <p>$ {airline.priceOneScale}</p>
                        </div>
                        <div className='priceByAirline_price'>
                          {airline.priceMoreScale &&
                            <p>$ {airline.priceMoreScale}</p>
                          }
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </TabPanel>
            <TabPanel value="2">Precios más de tres días</TabPanel>
          </TabContext>
        </Box>
      </div>
      <div className='recommendations'>
        <div className='recommendation'>
          <div className='recommendation_'>
            <p>Nuestra recomendadión</p>
            <p>$ 950 - 7h 26m</p>
          </div>
        </div>
        <div className='recommendation' style={{ borderRight: '1px solid rgba(0, 0, 0, .3)', borderLeft: '1px solid rgba(0, 0, 0, .3)' }}>
          <div className='recommendation_'>
            <p>Precio más bajo</p>
            <p>$ 950 - 7h 26m</p>
          </div>
        </div>
        <div className='recommendation'>
          <div className='recommendation_'>
            <p>Menor duración</p>
            <p>$ 1120 - 6h 15m</p>
          </div>
        </div>
      </div>
      <div className='alert'>
        <div className='alert_'>
          <div className='alert_img'>
            <img src={Alert} alt="Alert" />
          </div>
          <div className='alert_text'>
            <h2>Crea una alerta de precios</h2>
            <p>Compartenos tu email y te avisamos cuando los vuelos a Medellín estén a menos de $950. <Link to='/alert'>Crear Alerta</Link></p>
          </div>
          <div className='alert_logo'>
            <div className='alert_logo_'>
              <img src={LogoBlue} alt="Wellezy" />
            </div>
          </div>
        </div>
      </div>
      <div className='flight_results'>
        <div className='flight_results_'>
          <div className='flight-results_going'>
            <div className='flight-results_going_'>
              <div className='flight-results-going_date'>
                <div>
                  <Airplane size="25" color="#004274" variant="Bold"/>
                  <p>ida</p>
                </div>
                <p>miércoles, 6 julio 2022</p>
              </div>
            </div>
            <div className='flight-results-going_details'>
              <div>
                <p>sju</p>
                <p style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: '14px', textTransform: 'capitalize' }}>san juan</p>
              </div>
            </div>
            <div className='flight-results-going_details'>
              <div>
                <p>med</p>
                <p style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: '14px', textTransform: 'capitalize' }}>medellín</p>
              </div>
            </div>
            <div className='flight-results-going_details'>
              <div>
                <p style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: '14px', textTransform: 'capitalize' }}>equipaje</p>
              </div>
            </div>
          </div>
          <div>
            {alinesGoing.map((going) => {
              return (
                <div key={going.id} className='flight_going'>
                  <div className='flight_going_'>
                    <div className='flight-going-airline'>
                      {going.id === 1 ?
                        <RecordCircle style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                        :
                        <Record style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                      }
                      <div className='flight-going-airline_img'>
                        <img src={going.img} alt={going.name} />
                      </div>
                      <p style={{ fontSize: '18px' }}>{going.name}</p>
                    </div>
                  </div>
                  <div className='flight_going_'>
                    <div className='flight-going-airline'>
                      <p style={{ fontSize: '18px' }}>{going.timeToGo}</p>
                      <p style={{ fontSize: '14px', borderBottom: '3px solid #004274' }}>{going.scales} escala</p>
                    </div>
                  </div>
                  <div className='flight_going_'>
                    <div className='flight-going-airline'>
                      <p style={{ fontSize: '18px' }}>{going.arrivalTime}</p>
                      <p style={{ fontSize: '14px' }}>{going.flightTime}</p>
                    </div>
                  </div>
                  <div className='flight_going_'>
                    <div className='flight-going-airline'>
                      <div style={{ height: '20px', display: 'flex', alignItems: 'end'}}>
                        {going.baggage === 1 ?
                          <FontAwesomeIcon icon={faBagShopping} style={{ color: '#004274', fontSize: '16px', marginRight: '3px' }}/>
                          :
                          <FontAwesomeIcon icon={faBagShopping} style={{ color: 'rgba(0, 66, 116, .2)', fontSize: '16px', marginRight: '3px' }}/>
                        }
                        <FontAwesomeIcon icon={faSuitcase} style={{ color: 'rgba(0, 66, 116, .2)', fontSize: '18px', marginRight: '3px' }}  />
                        <FontAwesomeIcon icon={faSuitcaseRolling} style={{ color: 'rgba(0, 66, 116, .2)', fontSize: '24px'}}  />
                      </div>
                      <div>
                        <ArrowDown2 size="28" color="#004274"/>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='flight-results_going' style={{ border: '1px solid rgba(0, 0, 0, .3)'}}>
            <div className='flight-results_going_' style={{ borderRadius: 0 }}>
              <div className='flight-results-going_date'>
                <div>
                  <Airplane size="25" color="#004274" variant="Bold"/>
                  <p>ida</p>
                </div>
                <p>miércoles, 6 julio 2022</p>
              </div>
            </div>
            <div className='flight-results-going_details'>
              <div>
                <p>sju</p>
                <p style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: '14px', textTransform: 'capitalize' }}>san juan</p>
              </div>
            </div>
            <div className='flight-results-going_details'>
              <div>
                <p>med</p>
                <p style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: '14px', textTransform: 'capitalize' }}>medellín</p>
              </div>
            </div>
            <div className='flight-results-going_details'>
              <div>
                <p style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: '14px', textTransform: 'capitalize' }}>equipaje</p>
              </div>
            </div>
          </div>
          <div style={{ borderBottom: '1px solid rgba(0, 0, 0, .3)' }}>
            {alinesReturn.map((retur) => {
              return (
                <div key={retur.id} className='flight_going'>
                  <div className='flight_going_'>
                    <div className='flight-going-airline'>
                      {retur.id === 1 ?
                        <RecordCircle style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                        :
                        <Record style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                      }
                      <div className='flight-going-airline_img'>
                        <img src={retur.img} alt={retur.name} />
                      </div>
                      <p style={{ fontSize: '18px' }}>{retur.name}</p>
                    </div>
                  </div>
                  <div className='flight_going_'>
                    <div className='flight-going-airline'>
                      <p style={{ fontSize: '18px' }}>{retur.timeToGo}</p>
                      <p style={{ fontSize: '14px', borderBottom: '3px solid #004274'}}>{retur.scales} escala</p>
                    </div>
                  </div>
                  <div className='flight_going_'>
                    <div className='flight-going-airline'>
                      <p style={{ fontSize: '18px' }}>{retur.arrivalTime}</p>
                      <p style={{ fontSize: '14px'}}>{retur.flightTime}</p>
                    </div>
                  </div>
                  <div className='flight_going_'>
                    <div className='flight-going-airline'>
                      <div style={{ height: '20px', display: 'flex', alignItems: 'end'}}>
                        {retur.baggage === 1 ?
                          <FontAwesomeIcon icon={faBagShopping} style={{ color: '#004274', fontSize: '16px', marginRight: '3px' }}/>
                          :
                          <FontAwesomeIcon icon={faBagShopping} style={{ color: 'rgba(0, 66, 116, .2)', fontSize: '16px', marginRight: '3px' }}/>
                        }
                        <FontAwesomeIcon icon={faSuitcase} style={{ color: 'rgba(0, 66, 116, .2)', fontSize: '18px', marginRight: '3px' }}  />
                        <FontAwesomeIcon icon={faSuitcaseRolling} style={{ color: 'rgba(0, 66, 116, .2)', fontSize: '24px'}}  />
                      </div>
                      <div>
                        <ArrowDown2 size="28" color="#004274"/>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='addLuggage'>
            <div className='addLuggage_'>
              <div className='addLuggage_img'>
                <img src={AgregasEquipajeVector} alt="agregar equipaje" />
              </div>
              <div className='addLuggage_text'>
                <h2>Agrega equipaje y ve otras opciones disponibles</h2>
                <ArrowRight2 size="32" color="#004274"/>
              </div>
            </div>
          </div>
        </div>
        <div className='flight-results_price'>
          <div className='flight-results_price_'>
            <div className='flight-results-price_detail'>
              <p style={{ fontSize: '32px', fontWeight: '600' }}>$950</p>
              <p>Precio final con impuestos</p>
              <Link to='/app' style={{ color: '#004274', fontWeight: '600', fontFamily: 'inter', fontSize: '16px' }}>$10 de cashback descargando la app</Link>
            </div>
            <div className='flight-results-price_ButtonToBuy'>
              <Link to='/flightsCheckout'>comprar</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flight_results'>
        <div className='flight_results_'>
          <div className='flight-results_going'>
            <div className='flight-results_going_'>
              <div className='flight-results-going_date'>
                <div>
                  <Airplane size="25" color="#004274" variant="Bold"/>
                  <p>ida</p>
                </div>
                <p>miércoles, 6 julio 2022</p>
              </div>
            </div>
            <div className='flight-results-going_details'>
              <div>
                <p>sju</p>
                <p style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: '14px', textTransform: 'capitalize' }}>san juan</p>
              </div>
            </div>
            <div className='flight-results-going_details'>
              <div>
                <p>med</p>
                <p style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: '14px', textTransform: 'capitalize' }}>medellín</p>
              </div>
            </div>
            <div className='flight-results-going_details'>
              <div>
                <p style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: '14px', textTransform: 'capitalize' }}>equipaje</p>
              </div>
            </div>
          </div>
          <div>
            {alinesGoing.map((going) => {
              return (
                <div key={going.id} className='flight_going'>
                  <div className='flight_going_'>
                    <div className='flight-going-airline'>
                      {going.id === 1 ?
                        <RecordCircle style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                        :
                        <Record style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                      }
                      <div className='flight-going-airline_img'>
                        <img src={going.img} alt={going.name} />
                      </div>
                      <p style={{ fontSize: '18px' }}>{going.name}</p>
                    </div>
                  </div>
                  <div className='flight_going_'>
                    <div className='flight-going-airline'>
                      <p style={{ fontSize: '18px' }}>{going.timeToGo}</p>
                      <p style={{ fontSize: '14px', borderBottom: '3px solid #004274' }}>{going.scales} escala</p>
                    </div>
                  </div>
                  <div className='flight_going_'>
                    <div className='flight-going-airline'>
                      <p style={{ fontSize: '18px' }}>{going.arrivalTime}</p>
                      <p style={{ fontSize: '14px' }}>{going.flightTime}</p>
                    </div>
                  </div>
                  <div className='flight_going_'>
                    <div className='flight-going-airline'>
                      <div style={{ height: '20px', display: 'flex', alignItems: 'end'}}>
                        {going.baggage === 1 ?
                          <FontAwesomeIcon icon={faBagShopping} style={{ color: '#004274', fontSize: '16px', marginRight: '3px' }}/>
                          :
                          <FontAwesomeIcon icon={faBagShopping} style={{ color: 'rgba(0, 66, 116, .2)', fontSize: '16px', marginRight: '3px' }}/>
                        }
                        <FontAwesomeIcon icon={faSuitcase} style={{ color: 'rgba(0, 66, 116, .2)', fontSize: '18px', marginRight: '3px' }}  />
                        <FontAwesomeIcon icon={faSuitcaseRolling} style={{ color: 'rgba(0, 66, 116, .2)', fontSize: '24px'}}  />
                      </div>
                      <div>
                        <ArrowDown2 size="28" color="#004274"/>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='flight-results_going' style={{ border: '1px solid rgba(0, 0, 0, .3)'}}>
            <div className='flight-results_going_' style={{ borderRadius: 0 }}>
              <div className='flight-results-going_date'>
                <div>
                  <Airplane size="25" color="#004274" variant="Bold"/>
                  <p>ida</p>
                </div>
                <p>miércoles, 6 julio 2022</p>
              </div>
            </div>
            <div className='flight-results-going_details'>
              <div>
                <p>sju</p>
                <p style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: '14px', textTransform: 'capitalize' }}>san juan</p>
              </div>
            </div>
            <div className='flight-results-going_details'>
              <div>
                <p>med</p>
                <p style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: '14px', textTransform: 'capitalize' }}>medellín</p>
              </div>
            </div>
            <div className='flight-results-going_details'>
              <div>
                <p style={{ fontFamily: 'Inter', fontWeight: 200, fontSize: '14px', textTransform: 'capitalize' }}>equipaje</p>
              </div>
            </div>
          </div>
          <div style={{ borderBottom: '1px solid rgba(0, 0, 0, .3)' }}>
            {alinesReturn.map((retur) => {
              return (
                <div key={retur.id} className='flight_going'>
                  <div className='flight_going_'>
                    <div className='flight-going-airline'>
                      {retur.id === 1 ?
                        <RecordCircle style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                        :
                        <Record style={{ cursor: 'pointer' }} size="32" color="#004274"/>
                      }
                      <div className='flight-going-airline_img'>
                        <img src={retur.img} alt={retur.name} />
                      </div>
                      <p style={{ fontSize: '18px' }}>{retur.name}</p>
                    </div>
                  </div>
                  <div className='flight_going_'>
                    <div className='flight-going-airline'>
                      <p style={{ fontSize: '18px' }}>{retur.timeToGo}</p>
                      <p style={{ fontSize: '14px', borderBottom: '3px solid #004274'}}>{retur.scales} escala</p>
                    </div>
                  </div>
                  <div className='flight_going_'>
                    <div className='flight-going-airline'>
                      <p style={{ fontSize: '18px' }}>{retur.arrivalTime}</p>
                      <p style={{ fontSize: '14px'}}>{retur.flightTime}</p>
                    </div>
                  </div>
                  <div className='flight_going_'>
                    <div className='flight-going-airline'>
                      <div style={{ height: '20px', display: 'flex', alignItems: 'end'}}>
                        {retur.baggage === 1 ?
                          <FontAwesomeIcon icon={faBagShopping} style={{ color: '#004274', fontSize: '16px', marginRight: '3px' }}/>
                          :
                          <FontAwesomeIcon icon={faBagShopping} style={{ color: 'rgba(0, 66, 116, .2)', fontSize: '16px', marginRight: '3px' }}/>
                        }
                        <FontAwesomeIcon icon={faSuitcase} style={{ color: 'rgba(0, 66, 116, .2)', fontSize: '18px', marginRight: '3px' }}  />
                        <FontAwesomeIcon icon={faSuitcaseRolling} style={{ color: 'rgba(0, 66, 116, .2)', fontSize: '24px'}}  />
                      </div>
                      <div>
                        <ArrowDown2 size="28" color="#004274"/>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='addLuggage'>
            <div className='addLuggage_'>
              <div className='addLuggage_img'>
                <img src={AgregasEquipajeVector} alt="agregar equipaje" />
              </div>
              <div className='addLuggage_text'>
                <h2>Agrega equipaje y ve otras opciones disponibles</h2>
                <ArrowRight2 size="32" color="#004274"/>
              </div>
            </div>
          </div>
        </div>
        <div className='flight-results_price'>
          <div className='flight-results_price_'>
            <div className='flight-results-price_detail'>
              <p style={{ fontSize: '32px', fontWeight: '600' }}>$950</p>
              <p>Precio final con impuestos</p>
              <Link to='/app' style={{ color: '#004274', fontWeight: '600', fontFamily: 'inter', fontSize: '16px' }}>$10 de cashback descargando la app</Link>
            </div>
            <div className='flight-results-price_ButtonToBuy'>
              <button>comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightDetail