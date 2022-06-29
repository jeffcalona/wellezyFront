import React from 'react'

import './Assets/styles.css'
import { CardActions, Grid, IconButton } from '@mui/material'
import DoctorsHeader from '../../Components/DoctorsHeader/DoctorsHeader'
import DoctorsList from '../../Components/DoctorsList/DoctorsList'
import { Heart, Star1 } from 'iconsax-react'

const Doctors = () => {
  return (
    <Grid container justifyContent='center'>
        <DoctorsHeader />
        <div className='doctors_content'>
            <div className='doctors_filter'>
                <div className='doctorsFilter_input'>
                    <input className='' type="text" placeholder='Buscar Doctor' />
                </div>
                <h2>Filtrar Por</h2>
                <h3>Ciudad</h3>
                <ul>
                    <li>Todas las ciudades</li>
                    <li>Barranquilla</li>
                    <li>Bogotá</li>
                    <li>Cali</li>
                    <li>Medellín</li>
                </ul>
                <div style={{ width: '100%', height: '3px', backgroundColor: 'white', borderRadius: '50px', margin: '30px 0' }} />
                <h3>Clasificación</h3>
                <div className='doctorsList_starts'>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <IconButton>
                            <Star1 size="35" color='#FFB82E'/>
                        </IconButton>
                    </CardActions>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <IconButton>
                            <Star1 size="35" color='#FFB82E'/>
                        </IconButton>
                    </CardActions>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <IconButton>
                            <Star1 size="35" color='#FFB82E'/>
                        </IconButton>
                    </CardActions>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <IconButton>
                            <Star1 size="35" color='#FFB82E'/>
                        </IconButton>
                    </CardActions>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <IconButton>
                            <Star1 size="35" color='#FFB82E'/>
                        </IconButton>
                    </CardActions>
                </div>
                <div style={{ width: '100%', height: '3px', backgroundColor: 'white', borderRadius: '50px', margin: '30px 0' }} />
                <h3>Favoritos</h3>
                <CardActions className='doctorsList_heart'>
                    <IconButton>
                        <Heart size='35' color='white' />
                    </IconButton>
                </CardActions>
                <div style={{ width: '100%', height: '3px', backgroundColor: 'white', borderRadius: '50px', margin: '30px 0' }} />
                <h3>Género</h3>
                <ul>
                    <li>Dama</li>
                    <li>Caballero</li>
                </ul>
                <div style={{ width: '100%', height: '3px', backgroundColor: 'white', borderRadius: '50px', margin: '30px 0' }} />
                <h3>Procedimiento</h3>
                <ul>
                    <li>Cirugía Plástica</li>
                    <li>Medicina Estética</li>
                    <li>Medicina General</li>
                </ul>
            </div>
            <DoctorsList />
        </div>
    </Grid>
  )
}

export default Doctors