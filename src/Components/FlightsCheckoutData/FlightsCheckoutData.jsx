import React, { useState } from 'react'
import { DatePicker } from '@material-ui/pickers'
import { FormControl, MenuItem, Select, TextField } from '@mui/material'
import Equipaje from './Assets/Img/Equipaje.png'
import EquipajeMorral from './Assets/Img/EquipajeMorral.png'
import EquipajeMano from './Assets/Img/EquipajeMano.png'
import EquipajeMaleta from './Assets/Img/EquipajeMaleta.png'

import './Assets/styles.css'
import { Airplane, ArrowDown2, ArrowUp2 } from 'iconsax-react'

//const ApiCountryFlags = 'https://countryflagsapi.com/png/'

const FlightsCheckoutData = () => {

    const [dataUserOne, setDataUserOne] = useState({})

    const [date, setDate] = useState(new Date())
    const [tipId, setTipId] = useState('Cédula de Identidad')
    const [gender, setGender] = useState('Dama')

    const [flightsInclude, setFlightsInclude] = useState(false)

    const [phoneCodeSelected, setPhoneCodeSelected] = useState('')

    const handleChangeUserOne = (e) => {
        const value = e.target.value
        setDataUserOne({
            ...dataUserOne,
            [e.target.name]: value
        })
    }

    const handleChangeTipeId = (e) => {
        setTipId(e.target.value)
        setDataUserOne({
            ...dataUserOne,
            'tipeId': e.target.value
        })
    }

    const handleChangeDateBirthday = (item) => {
        setDate(item)
        setDataUserOne({
            ...dataUserOne,
            'birthDay': item.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})
        })
    }

    const handleChangeGender = (e) => {
        setGender(e.target.value)
        setDataUserOne({
            ...dataUserOne,
            'gender': e.target.value
        })
    }

    const handleCodeNumber = (e) => {
        setPhoneCodeSelected(e.target.value)
    }

  return (
    <div className='flightsCheckoutData'>
            <h1>¡Casi terminamos! Completa tus datos y finaliza tu compra</h1>
        <div className='flightsCheckoutData_container'>
            <div className='flightsCheckoutData_container_'>
                <h2>¿Quiénens viajan?</h2>
                <div className='flightsCheckoutData-container_content'>
                    <h3>Adulto 1</h3>
                    <FormControl className='flightCheckoutData-container-content_formControl' variant="filled" >
                        <p>Nombre</p>
                        <TextField
                        className='flightCheckoutData-container-content_textField'
                        label="Como figura en el documento de viaje"
                        variant="outlined"
                        type='text'
                        name='NameOne'
                        onChange={handleChangeUserOne}
                        required
                        />
                    </FormControl>
                    <FormControl className='flightCheckoutData-container-content_formControl' variant="filled">
                        <p>apellido</p>
                        <TextField
                        className='flightCheckoutData-container-content_textField'
                        label="Como figura en el documento de viaje"
                        variant="outlined"
                        type='text'
                        name='LastNameOne'
                        onChange={handleChangeUserOne}
                        required
                        />
                    </FormControl>
                    <FormControl className='flightCheckoutData-container-content_formControl'>
                        <p>tipo y numero de documento</p>
                        <div>
                            <Select
                                className='flightCheckoutData-container-content_select'
                                name='tipeIdOne'
                                value={tipId}
                                onChange={handleChangeTipeId}
                            >
                                <MenuItem value='Cédula de Identidad'>Cédula de Identidad</MenuItem>
                                <MenuItem value='Pasaporte'>Pasaporte</MenuItem>
                            </Select>
                            <TextField
                            className='flightCheckoutData-container-content_textField'
                            label="Como figura en el documento de viaje"
                            variant="outlined"
                            type='number'
                            name='numIdOne'
                            onChange={handleChangeUserOne}
                            required
                            />
                        </div>
                    </FormControl>
                    <FormControl className='flightCheckoutData-container-content_formControl'>
                        <p>Fecha de nacimiento</p>
                        <DatePicker 
                            disableFuture
                            inputVariant="outlined"
                            openTo="year"
                            format="dd/MM/yyyy"
                            views={["year", "month", "date"]}
                            value={date}
                            onChange={handleChangeDateBirthday}
                            className='flightCheckoutData-container-content_datePicker'
                        />
                    </FormControl>
                    <FormControl className='flightCheckoutData-container-content_formControl'>
                        <p>Sexo</p>
                        <Select
                            className='flightCheckoutData-container-content_select'
                            name='gender'
                            value={gender}
                            onChange={handleChangeGender}
                        >
                            <MenuItem value='Dama'>Dama</MenuItem>
                            <MenuItem value='Caballero'>Caballero</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{ width: '100%', height: '1.5px', backgroundColor: 'rgba(0, 66, 116, .2)', margin: '30px 0', borderRadius: '20px' }} />
                <div className='flightsCheckoutData-container_content'>
                    <h3>Adulto 2</h3>
                    <FormControl className='flightCheckoutData-container-content_formControl' variant="filled" >
                        <p>Nombre</p>
                        <TextField
                        className='flightCheckoutData-container-content_textField'
                        label="Como figura en el documento de viaje"
                        variant="outlined"
                        type='text'
                        name='NameOne'
                        onChange={handleChangeUserOne}
                        required
                        />
                    </FormControl>
                    <FormControl className='flightCheckoutData-container-content_formControl' variant="filled">
                        <p>apellido</p>
                        <TextField
                        className='flightCheckoutData-container-content_textField'
                        label="Como figura en el documento de viaje"
                        variant="outlined"
                        type='text'
                        name='LastNameOne'
                        onChange={handleChangeUserOne}
                        required
                        />
                    </FormControl>
                    <FormControl className='flightCheckoutData-container-content_formControl'>
                        <p>tipo y numero de documento</p>
                        <div>
                            <Select
                                className='flightCheckoutData-container-content_select'
                                name='tipeIdOne'
                                value={tipId}
                                onChange={handleChangeTipeId}
                            >
                                <MenuItem value='Cédula de Identidad'>Cédula de Identidad</MenuItem>
                                <MenuItem value='Pasaporte'>Pasaporte</MenuItem>
                            </Select>
                            <TextField
                            className='flightCheckoutData-container-content_textField'
                            label="Como figura en el documento de viaje"
                            variant="outlined"
                            type='number'
                            name='numIdOne'
                            onChange={handleChangeUserOne}
                            required
                            />
                        </div>
                    </FormControl>
                    <FormControl className='flightCheckoutData-container-content_formControl'>
                        <p>Fecha de nacimiento</p>
                        <DatePicker 
                            disableFuture
                            inputVariant="outlined"
                            openTo="year"
                            format="dd/MM/yyyy"
                            views={["year", "month", "date"]}
                            value={date}
                            onChange={handleChangeDateBirthday}
                            className='flightCheckoutData-container-content_datePicker'
                        />
                    </FormControl>
                    <FormControl className='flightCheckoutData-container-content_formControl'>
                        <p>Sexo</p>
                        <Select
                            className='flightCheckoutData-container-content_select'
                            name='gender'
                            value={gender}
                            onChange={handleChangeGender}
                        >
                            <MenuItem value='Dama'>Dama</MenuItem>
                            <MenuItem value='Caballero'>Caballero</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
        <div className='flightsCheckoutData_documentation'>
            <div className='flightsCheckoutData_documentation_'>
                <h2>Documentación requerida</h2>
                <div className='flightsCheckoutData-documentation_container'>
                    <div className='flightsCheckoutData-documentation-container_flight'>
                        <h3>Vuelo</h3>
                        <p>Para poder hacer este viaje, los pasajeros combianos necesitarán contar con cierta documentación:</p>
                    </div>
                    <div className='flightsCheckoutData-documentation-container_country'>
                        <h3>Colombia</h3>
                        <ul>
                            <li>Una copia física original del registro civil (expedida por la Registraduría Nacional del Estado Civil), en caso de que viajen con un menor de hasta 7 años</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='flightsCheckoutData_include' onClick={() => setFlightsInclude(!flightsInclude)}>
            <div className='flightsCheckoutData_include_'>
                <div className='flightsCheckoutData-include_text'>
                    <div className='flightsCheckoutData-include_img'>
                        <img src={Equipaje} alt="equipaje" />
                    </div>
                    <h3>Tu vuelo no incluye equipaje</h3>
                </div>
                {flightsInclude === true ?
                    <ArrowUp2 size="32" color="#004274"/>
                    :
                    <ArrowDown2 size="32" color="#004274"/>
                }
            </div>
            {flightsInclude && 
                <div className='flightsCheckoutData-include_going'>
                    <div className='flightsCheckoutData-include_going_'>
                        <p className='flightsCheckoutData-include-going_title'>IDA</p>
                        <div className='flightsCheckoutData-include-going_cities'>
                            <p>SJU <span>(San Juan)</span></p>
                            <Airplane size="20" variant='Bold' color="#004274" className='flightsCheckoutData-include-going_airplane'/>
                            <p>MED <span>(Medellín)</span></p>
                        </div>
                        <div className='flightsCheckoutData-include-going_description'>
                            <div className='flightsCheckoutData-include_backpack'>
                                <img src={EquipajeMorral} alt="mochila" />
                            </div>
                            <div>
                                <p>Incluye un morral o cartera</p>
                                <p>Debe caber bajo el asiento delantero.</p>
                            </div>
                        </div>
                        <div className='flightsCheckoutData-include-going_description'>
                            <div className='flightsCheckoutData-include_backpack' style={{ opacity: '.3' }}l>
                                <img src={EquipajeMano} alt="mochila" />
                            </div>
                            <div>
                                <p>No incluye equipaje de mano</p>
                            </div>
                        </div>
                        <div className='flightsCheckoutData-include-going_description'>
                            <div className='flightsCheckoutData-include_backpack' style={{ opacity: '.3' }}l>
                                <img src={EquipajeMaleta} alt="mochila" />
                            </div>
                            <div>
                                <p>No incluye equipaje en bodega</p>
                                <p>Podrás sumar maletas en el aeropuerto por un cargo extra.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flightsCheckoutData-include_Return'>
                        <p className='flightsCheckoutData-include-going_title'>REGRESO</p>
                        <div className='flightsCheckoutData-include-going_cities'>
                            <p>MED <span>(Medellín)</span></p>
                            <Airplane size="20" variant='Bold' color="#004274" className='flightsCheckoutData-include-going_airplane'/>
                            <p>SJU <span>(San Juan)</span></p>
                        </div>
                        <div className='flightsCheckoutData-include-going_description'>
                            <div className='flightsCheckoutData-include_backpack'>
                                <img src={EquipajeMorral} alt="mochila" />
                            </div>
                            <div>
                                <p>Incluye un morral o cartera</p>
                                <p>Debe caber bajo el asiento delantero.</p>
                            </div>
                        </div>
                        <div className='flightsCheckoutData-include-going_description'>
                            <div className='flightsCheckoutData-include_backpack' style={{ opacity: '.3' }}l>
                                <img src={EquipajeMano} alt="mochila" />
                            </div>
                            <div>
                                <p>No incluye equipaje de mano</p>
                            </div>
                        </div>
                        <div className='flightsCheckoutData-include-going_description'>
                            <div className='flightsCheckoutData-include_backpack' style={{ opacity: '.3' }}l>
                                <img src={EquipajeMaleta} alt="mochila" />
                            </div>
                            <div>
                                <p>No incluye equipaje en bodega</p>
                                <p>Podrás sumar maletas en el aeropuerto por un cargo extra.</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
        <div className='flightsCheckoutData_vouchers'>
            <div className='flightsCheckoutData_vouchers_'>
                <h2>¿A dónde enviamos tus vouchers?</h2>
                <p className='flightsCheckoutData-vouchers_description'>El email que elijas será fundamental para que gestiones tu reserva y recibas información importante sobre tu viaje.</p>
                <FormControl className='flightCheckoutData-container-content_formControl' variant="filled" >
                    <p>Email donde recibirás tus vouchers</p>
                    <TextField
                    className='flightCheckoutData-container-content_textField'
                    label="Ingresa el email de contacto"
                    variant="outlined"
                    type='text'
                    name='EmailOne'
                    onChange={handleChangeUserOne}
                    required
                    />
                </FormControl>
                <FormControl className='flightCheckoutData-container-content_formControl' variant="filled" >
                    <p>Confirma tu Email</p>
                    <TextField
                    className='flightCheckoutData-container-content_textField'
                    label="Ingresa tu email"
                    variant="outlined"
                    type='text'
                    name='EmailConfirmOne'
                    onChange={handleChangeUserOne}
                    required
                    />
                </FormControl>
            </div>
        </div>
        <div className='flightsCheckoutData_phoneNumber'>
            <div className='flightsCheckoutData_phoneNumber_'>
                <h2>¿A qué número celular podemos llamarte?</h2>
                <div className='flightsCheckoutData-phoneNumber_content'>
                    <div className='flightsCheckoutData-phoneNumber_content_'>
                        <FormControl className='flightsCheckoutData-phoneNumber_code' variant="filled" >
                            <p>Código del País</p>
                            <TextField
                            className=''
                            variant="outlined"
                            type='text'
                            name='CodePhoneNumer'
                            value={phoneCodeSelected}
                            onChange={handleCodeNumber}
                            required
                            />
                        </FormControl>
                    </div>
                    <FormControl className='flightsCheckoutData-phoneNumber_number' variant="filled" >
                        <p>Número</p>
                        <TextField
                        className='flightCheckoutData-container-content_textField'
                        label="Ingresa el email de contacto"
                        variant="outlined"
                        type='number'
                        name='phoneNumber'
                        onChange={handleChangeUserOne}
                        required
                        />
                    </FormControl>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlightsCheckoutData