import { Record, RecordCircle } from 'iconsax-react'
import React, { useState } from 'react'
import './Assets/styles.css'

const FlightsPassengerDetails = ({ cardRef }) => {

    const [adult, setAdult] = useState(1)
    const [boy, setBoy] = useState(0)
    const [kid, setKid] = useState(0)

    const [economicClass, setEconomicClass] = useState(true)
    const [ejecutiveClass, setEjecutiveClass] = useState(false)
    const [businessClass, setBusinessClass] = useState(false)

    const changeEconomicClass = () => {
        setEconomicClass(true)
        setEjecutiveClass(false)
        setBusinessClass(false)
    }
    const changeEjecutiveClasss = () => {
        setEconomicClass(false)
        setEjecutiveClass(true)
        setBusinessClass(false)
    }
    const changeBusinessClass = () => {
        setEconomicClass(false)
        setEjecutiveClass(false)
        setBusinessClass(true)
    }

  return (
    <div className='passengerDetails' ref={cardRef}>
        <div className='passengerDetails_container'>
            <h2>pasajeros</h2>
            <div className='passagersDetails_'>
                <div>
                    <p className='principalDetails_p'>Adultos</p>
                </div>
                <div className='passengerDetails_miniButtons'>
                    <div className='principalDetails_miniButtons' onClick={() => setAdult(adult === 1 ? 1 : adult - 1)}><p>-</p></div>
                    <div className='passagersDetails_numButton'><p>{adult}</p></div>
                    <div className='principalDetails_miniButtons' onClick={() => setAdult(adult + 1)}><p>+</p></div>
                </div>
            </div>
            <div className='passagersDetails_'>
                <div>
                    <p className='principalDetails_p'>Niños</p>
                    <p className='sencondaryDetails_p'>2 a 11 años</p>
                </div>
                <div className='passengerDetails_miniButtons'>
                    <div className='principalDetails_miniButtons' onClick={() => setBoy(boy === 0 ? 0 : boy - 1)}><p>-</p></div>
                    <div className='passagersDetails_numButton'><p>{boy}</p></div>
                    <div className='principalDetails_miniButtons' onClick={() => setBoy(boy + 1)}><p>+</p></div>
                </div>
            </div>
            <div className='passagersDetails_'>
                <div>
                    <p className='principalDetails_p'>Bebés</p>
                    <p className='sencondaryDetails_p'>0 a 23 meses</p>
                </div>
                <div className='passengerDetails_miniButtons'>
                    <div className='principalDetails_miniButtons' onClick={() => setKid(kid === 0 ? 0 : kid - 1)}><p>-</p></div>
                    <div className='passagersDetails_numButton'><p>{kid}</p></div>
                    <div className='principalDetails_miniButtons' onClick={() => setKid(kid + 1)}><p>+</p></div>
                </div>
            </div>
            <div>
                <h2>clases</h2>
                <div className='passengerDetails_class'>
                    <div onClick={changeEconomicClass}>
                        {economicClass ? 
                            <RecordCircle size="32" color="#004274" style={{ cursor: 'pointer' }}/>
                            :
                            <Record size="32" color="#004274" style={{ cursor: 'pointer' }}/>
                        }
                    </div>
                    <p>económico</p>
                </div>
                <div className='passengerDetails_class'>
                    <div onClick={changeEjecutiveClasss}>
                        {ejecutiveClass ?
                            <RecordCircle size="32" color="#004274" style={{ cursor: 'pointer' }}/>
                            :
                            <Record size="32" color="#004274" style={{ cursor: 'pointer' }}/>
                        }
                    </div>
                    <p>ejecutiva</p>
                </div>
                <div className='passengerDetails_class'>
                    <div onClick={changeBusinessClass}>
                    {businessClass ?
                            <RecordCircle size="32" color="#004274" style={{ cursor: 'pointer' }}/>
                            :
                            <Record size="32" color="#004274" style={{ cursor: 'pointer' }}/>
                    }
                    </div>
                    <p>business</p>
                </div>
            </div>
            <div className='passengerDetails_button'>
                <button>continuar</button>
            </div>
        </div>
    </div>
  )
}

export default FlightsPassengerDetails