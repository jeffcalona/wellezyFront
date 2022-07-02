import React, { useState } from 'react'
import './Assets/styles.css'
import newQuestions from '../../Api/newQuestions'
import CardDoctors from '../CardDoctors/CardDoctors'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import CollapseList from '../../Components/CollapseList/CollapseList'
import { Heart, Star1 } from 'iconsax-react'
import { CardActions, Checkbox, Grid, IconButton, ListItemButton, ListItemText } from '@mui/material'
import { useEffect } from 'react'

const apiDoctors = newQuestions[0].questions[5].response.doctors

const listDoctorsPerPage = 20

const elementsCollapseList = {
    cities: [
        {
            "id": 1,
            "name": "Barranquilla"
        },
        {
            "id": 2,
            "name": "Bogotá"
        },
        {
            "id": 3,
            "name": "Cali"
        },
        {
            "id": 4,
            "name": "Medellín"
        }
    ],
    genders: ['Dama', 'Hombre'],
    procedures: ['Cirugía Plástica', 'Medicina Estética', 'Medicina General']
}

const DoctorsList = () => {

    const [listDoctors, setListDoctors] = useState(apiDoctors)
    // const [listDoctorsPage, setListDoctorsPage] = useState([...listDoctors].splice(0, listDoctorsPerPage))
    // const [currentPage, setCurrentPage] = useState(0)
    // const [newList, setNewList] = useState(listDoctorsPage)


    // const [selectedCity, setselectedCity] = useState('')

    /*filters*/
    const searcherFilter = async (e) => {
        const searcher = e.target.value
        const newFilter = apiDoctors.filter((data) => {
            return data.name.toLowerCase().includes(searcher.toLocaleLowerCase())
        })
        searcher === '' ? setListDoctors(apiDoctors) : setListDoctors(newFilter)
    }
    const selectedCityFunc = (catItem) => {
        const resultCity = listDoctors.filter((data) => {
            // return data.city === catItem
            return data.city.toLowerCase().includes(catItem.toLocaleLowerCase())
        })
        setListDoctors(resultCity)
    }

    /*Pagination*/
    // const prevHandler = () => {
    //     const prevPage = currentPage - 1

    //     if(prevPage < 0) return

    //     const firstIndex = prevPage * listDoctorsPerPage
    //     setListDoctorsPage([...listDoctors].splice(firstIndex, listDoctorsPerPage))
    //     setCurrentPage(prevPage)
    // }

    // const nextHandler = () => {
    //     const totalList = listDoctors.length
    //     const nextPage = currentPage + 1
    //     var firstIndex = nextPage * listDoctorsPerPage //20   

    //     if (firstIndex === totalList || listDoctorsPage.length < 20) return

    //     setListDoctorsPage([...listDoctors].splice(firstIndex, listDoctorsPerPage))
    //     setCurrentPage(nextPage)
    // }


    

  return (
    <div className='doctors_content'>
            <div className='doctors_filter'>
                <div className='doctors-filter_content'>
                    <div className='doctorsFilter_input'>
                        <input type="text" placeholder='Buscar Doctor' onChange={searcherFilter}/>
                    </div>
                    <h2>Filtrar Por</h2>
                    <CollapseList
                        collapseListTitle='Ciudad'
                        collapseList={
                            elementsCollapseList.cities.map((city, index) => {
                                return (
                                    <ListItemButton key={index} style={{ width: '100%' }}>
                                        {/* <button className='doctorsList-filter_buttons' onClick={() => selectedCityFunc(city.name)} /> */}
                                            <ListItemText secondary={city.name}/>
                                            <Checkbox type='checkbox' />
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
        <Grid className='doctors_list' container direction='row' alignItems='start' justifyContent='center' spacing={2}>
            {
                listDoctors.map((doctor, index) => {
                    return (
                        <Grid key={index} item>
                            <CardDoctors imgDoctor={doctor.avatar} nameDoctor={doctor.name} descriptionDoctor={doctor.description} cityDoctor={doctor.city}/>
                        </Grid>
                    )
                })
            }
            <CardActions className='doctorsList_arraws'>
                <IconButton className='arraw' /*onClick={prevHandler}*/><ArrowLeft2 size="40" color="#004274"/></IconButton>
                <IconButton className='arraw' /*onClick={nextHandler}*/><ArrowRight2 size="40" color="#004274"/></IconButton>
            </CardActions>
        </Grid>
    </div>
  )
}

export default DoctorsList