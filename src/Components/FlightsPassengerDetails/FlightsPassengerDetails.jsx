import { Record, RecordCircle } from 'iconsax-react'
import React from 'react'
import './Assets/styles.css'

const FlightsPassengerDetails = ({ cardRef, passengerContinue, handleNumber, adultNum, boyNum, babyNum, passengersSelecteds, clasSelected, economicClasFunction, ejecutiveClasFunction, businessClasFunction }) => {

  return (
    <div className='passengerDetails' ref={cardRef}>
        <div className='passengerDetails_container'>
            <h2>pasajeros</h2>
            <div className='passagersDetails_'>
                <div>
                    <p className='principalDetails_p'>Adultos</p>
                </div>
                <div className='passengerDetails_miniButtons'>
                    <button className='principalDetails_miniButtons' disabled={passengersSelecteds.adult <= 1} onClick={() => handleNumber("adult", "decrease")}><p>-</p></button>
                    <div className='passagersDetails_numButton'><p>{adultNum}</p></div>
                    <button className='principalDetails_miniButtons' onClick={() => handleNumber("adult", "increase")}><p>+</p></button>
                </div>
            </div>
            <div className='passagersDetails_'>
                <div>
                    <p className='principalDetails_p'>Niños</p>
                    <p className='sencondaryDetails_p'>2 a 11 años</p>
                </div>
                <div className='passengerDetails_miniButtons'>
                    <button className='principalDetails_miniButtons' disabled={passengersSelecteds.boy <= 0} onClick={() => handleNumber("boy", "decrease")}><p>-</p></button>
                    <div className='passagersDetails_numButton'><p>{boyNum}</p></div>
                    <button className='principalDetails_miniButtons' onClick={() => handleNumber("boy", "increase")}><p>+</p></button>
                </div>
            </div>
            <div className='passagersDetails_'>
                <div>
                    <p className='principalDetails_p'>Bebés</p>
                    <p className='sencondaryDetails_p'>0 a 23 meses</p>
                </div>
                <div className='passengerDetails_miniButtons'>
                    <button className='principalDetails_miniButtons' disabled={passengersSelecteds.baby <= 0} onClick={() => handleNumber("baby", "decrease")}><p>-</p></button>
                    <div className='passagersDetails_numButton'><p>{babyNum}</p></div>
                    <button className='principalDetails_miniButtons' onClick={() => handleNumber("baby", "increase")}><p>+</p></button>
                </div>
            </div>
            <div>
                <h2>clases</h2>
                <div className='passengerDetails_class'>
                    <div onClick={economicClasFunction}>
                        {clasSelected.economic ? 
                            <RecordCircle size="32" color="#004274" style={{ cursor: 'pointer' }}/>
                            :
                            <Record size="32" color="#004274" style={{ cursor: 'pointer' }}/>
                        }
                    </div>
                    <p>económico</p>
                </div>
                <div className='passengerDetails_class'>
                    <div onClick={ejecutiveClasFunction}>
                        {clasSelected.ejecutive ?
                            <RecordCircle size="32" color="#004274" style={{ cursor: 'pointer' }}/>
                            :
                            <Record size="32" color="#004274" style={{ cursor: 'pointer' }}/>
                        }
                    </div>
                    <p>ejecutiva</p>
                </div>
                <div className='passengerDetails_class'>
                    <div onClick={businessClasFunction}>
                    {clasSelected.business ?
                            <RecordCircle size="32" color="#004274" style={{ cursor: 'pointer' }}/>
                            :
                            <Record size="32" color="#004274" style={{ cursor: 'pointer' }}/>
                    }
                    </div>
                    <p>business</p>
                </div>
            </div>
            <div className='passengerDetails_button'>
                <button onClick={passengerContinue}>continuar</button>
            </div>
        </div>
    </div>
  )
}

export default FlightsPassengerDetails