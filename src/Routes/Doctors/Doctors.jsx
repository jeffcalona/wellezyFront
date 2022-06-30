import React from 'react'

import './Assets/styles.css'
import { CardActions, Grid, IconButton, ListItemButton, ListItemText } from '@mui/material'
import DoctorsHeader from '../../Components/DoctorsHeader/DoctorsHeader'
import DoctorsList from '../../Components/DoctorsList/DoctorsList'
import CollapseList from '../../Components/CollapseList/CollapseList'
import { Heart, Star1 } from 'iconsax-react'

const elementsCollapseList = {
    cities: ['Barranquilla', 'Bogotá', 'Cali', 'Medellín'],
    genders: ['Dama', 'Hombre'],
    procedures: ['Cirugía Plástica', 'Medicina Estética', 'Medicina General']
}

const Doctors = () => {
  return (
    <Grid container justifyContent='center'>
        <DoctorsHeader />
        <div className='doctors_content'>
            <div className='doctors_filter'>
                <div className='doctors-filter_content'>
                    <div className='doctorsFilter_input'>
                        <input className='' type="text" placeholder='Buscar Doctor' />
                    </div>
                    <h2>Filtrar Por</h2>
                    <CollapseList
                        collapseListTitle='Ciudad'
                        collapseList={
                            elementsCollapseList.cities.map((city, index) => {
                                return (
                                    <ListItemButton key={index}>
                                        <ListItemText secondary={city}/>
                                    </ListItemButton>
                                )
                            })
                        }
                    />
                    <div style={{ width: '100%', height: '3px', backgroundColor: 'white', borderRadius: '50px', margin: '10px 0' }} />
                    <CollapseList
                        collapseListTitle='Calificación'
                        collapseList={
                            <div className='doctorsList_icon'>
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
                        }
                    />
                    <div style={{ width: '100%', height: '3px', backgroundColor: 'white', borderRadius: '50px', margin: '10px 0' }} />
                    <CollapseList
                        collapseListTitle='Favoritos'
                        collapseList={
                            <div className='doctorsList_icon'>
                                <CardActions className='doctorsList_heart'>
                                    <IconButton>
                                        <Heart size='35' color='white' />
                                    </IconButton>
                                </CardActions>
                            </div>
                        }
                    />
                    <div style={{ width: '100%', height: '3px', backgroundColor: 'white', borderRadius: '50px', margin: '10px 0' }} />
                    <CollapseList
                        collapseListTitle='Género'
                        collapseList={
                            elementsCollapseList.genders.map((gender, index) => {
                                return (
                                    <ListItemButton key={index}>
                                        <ListItemText secondary={gender}/>
                                    </ListItemButton>
                                )
                            })
                        }
                    />
                    <div style={{ width: '100%', height: '3px', backgroundColor: 'white', borderRadius: '50px', margin: '10px 0' }} />
                    <CollapseList
                        collapseListTitle='Procedimiento'
                        collapseList={
                            elementsCollapseList.procedures.map((procedure, index) => {
                                return (
                                    <ListItemButton key={index}>
                                        <ListItemText secondary={procedure}/>
                                    </ListItemButton>
                                )
                            })
                        }
                    />
                </div>
            </div>
            <DoctorsList />
        </div>
    </Grid>
  )
}

export default Doctors