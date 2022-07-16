import React, { useState, useEffect } from 'react'
import './Assets/styles.css'
import CardDoctors from '../CardDoctors/CardDoctors'
import { ArrowDown2, ArrowLeft2, ArrowRight2, ArrowUp2 } from 'iconsax-react'
import CollapseList from '../../Components/CollapseList/CollapseList'
import { Heart, Star1 } from 'iconsax-react'
import { CardActions, Collapse, FormControlLabel, Grid, IconButton, List, ListItemButton, ListItemText, Radio, RadioGroup } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'

const DoctorsList = () => {
     
    const [doctors, setDoctors] = useState([])
    const [doctorsImportant, setDoctorsImportant] = useState([])
    /*const image = doctorsImportant[0].img
    const aaa = process.env.REACT_APP_URL_API_IMGDOCTORS
    console.log('doctor Imagen', `${process.env.REACT_APP_URL_API_IMGDOCTORS}${image}`)*/

    const [term, setTerm] = useState('')
    
    const [filterCity, setFilterCity] = useState([])
    const [filterGender, setFilterGender] = useState([])

    const [openListCity, setOpenListCity] = useState(false)
    const [openListGender, setOpenListGender] = useState(false)
    const [openListProcedure, setOpenListProcedure] = useState(false)

    useEffect(() => {
        const getApiDoctors = async () => {
            const apiDoctors = process.env.REACT_APP_URL_API_DOCTORS
            await axios.get(apiDoctors).then((response) => {
                setDoctors(response.data.data)
                setDoctorsImportant(response.data.data)
            }).catch((err) => console.log(err))
        }
        getApiDoctors()
    }, [])

    const searchDoctors = (term) => {
        return function(data){
            return data.name.toLowerCase().includes(term.toLocaleLowerCase())
        }
    }

    /*Filter City*/
    const selectedCityFunc = (catItem) => {
        const resultCity = doctorsImportant.filter((data) => {
            return data.city.toLowerCase() === catItem
        })
        setDoctors(resultCity)
        setFilterCity(resultCity)
    }
    const selectedAllCityFunc = () => {
        setDoctors(doctorsImportant)
        setFilterCity([])
    }

    /*Filter gender*/
    const selectedGenderFunc = (catItem) => {
        if(filterCity.length === 0) {
            const resultGen = doctorsImportant.filter((data) => {
                return data.surname === catItem
            })
            setDoctors(resultGen)
            setFilterGender(resultGen)
        } else {
            const resultGen = filterCity.filter((data) => {
                return data.surname === catItem
            })
            setDoctors(resultGen)
            setFilterGender(resultGen)
        }
    }
    const selectedAllGenderFunc = () => {
        if(filterCity.length !== 0) {
            return setDoctors(filterCity)
        }
        return setDoctors(doctorsImportant)
    }

    /*Filter Procedure*/
    const selectedProcedureFunc = (catItem) => {
        if (filterCity.length === 0 || filterGender.length === 0) {
            const resultGen = doctorsImportant.filter((data) => {
                return data.gender === catItem
            })
            setDoctors(resultGen)
        } else if (filterCity.length !== 0) {
            const resultGen = filterCity.filter((data) => {
                return data.gender === catItem
            })
            setDoctors(resultGen)
        } else if (filterGender.length !== 0) {
            const resultGen = filterGender.filter((data) => {
                return data.gender === catItem
            })
            setDoctors(resultGen)
        }
    }
    const selectedAllProcedureFunc = () => {
        if (filterCity.length !== 0) {
            return setDoctors(filterCity)
        } else if (filterGender.length !== 0) {
            return setDoctors(filterGender)
        } else {
            return setDoctors(doctorsImportant)
        }
    }

    const handleClickCity = () => {
        setOpenListCity(!openListCity)
    }
    const handleClickGender = () => {
        setOpenListGender(!openListGender)
    }
    const handleClickProcedure = () => {
        setOpenListProcedure(!openListProcedure)
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
                        <input type="text" placeholder='Buscar Doctor' onChange={e => setTerm(e.target.value)}/>
                    </div>
                    <h2>Filtrar Por</h2>
                    <ListItemButton onClick={handleClickCity} className='collapseList_ListItemButton' >
                        <ListItemText primary='Ciudad' />
                        {openListCity ? <ArrowUp2 size="32" color="white"/> : <ArrowDown2 size="32" color="white"/>}
                    </ListItemButton>
                    <Collapse in={openListCity} timeout="auto" unmountOnExit sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05) !important', borderRadius: '20px' }}>
                        <List component="div">
                            <RadioGroup
                                defaultValue="all"
                            >
                                <ListItemButton>
                                    <FormControlLabel value="all" onChange={() => selectedAllCityFunc()} control={<Radio style={{color: 'white'}} />} label="Todas las ciudades" />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="barranquilla" onChange={() => selectedCityFunc('barranquilla')} control={<Radio style={{color: 'white'}} />} label="Barranquilla" />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="bogotá" onChange={() => selectedCityFunc('bogotá')} control={<Radio style={{color: 'white'}} />} label="Bogotá" />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="cali" onChange={() => selectedCityFunc('cali')} control={<Radio style={{color: 'white'}} />} label="Cali" />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="medellín" onChange={() => selectedCityFunc('medellín')} control={<Radio style={{color: 'white'}} />} label="Medellín" />
                                </ListItemButton>
                            </RadioGroup>
                        </List>
                    </Collapse>
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
                    <ListItemButton onClick={handleClickGender} className='collapseList_ListItemButton' >
                        <ListItemText primary='Género' />
                        {openListGender ? <ArrowUp2 size="32" color="white"/> : <ArrowDown2 size="32" color="white"/>}
                    </ListItemButton>
                    <Collapse in={openListGender} timeout="auto" unmountOnExit sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05) !important', borderRadius: '20px' }}>
                        <List component="div">
                            <RadioGroup
                                defaultValue="all"
                            >
                                <ListItemButton>
                                    <FormControlLabel value="all" onChange={() => selectedAllGenderFunc()} control={<Radio style={{color: 'white'}} />} label="Todos los géneros" />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="Dra" onChange={() => selectedGenderFunc('Dra')} control={<Radio style={{color: 'white'}} />} label="Dama" />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="Dr" onChange={() => selectedGenderFunc('Dr')} control={<Radio style={{color: 'white'}} />} label="Caballero" />
                                </ListItemButton>
                            </RadioGroup>
                        </List>
                    </Collapse>
                    <div style={{ width: '100%', height: '3px', backgroundColor: 'white', borderRadius: '50px', margin: '10px 0' }} />
                    <ListItemButton onClick={handleClickProcedure} className='collapseList_ListItemButton' >
                        <ListItemText primary='Procedimiento' />
                        {openListProcedure ? <ArrowUp2 size="32" color="white"/> : <ArrowDown2 size="32" color="white"/>}
                    </ListItemButton>
                    <Collapse in={openListProcedure} timeout="auto" unmountOnExit sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05) !important', borderRadius: '20px' }}>
                        <List component="div">
                            <RadioGroup
                                defaultValue="all"
                            >
                                <ListItemButton>
                                    <FormControlLabel value="all" onChange={() => selectedAllProcedureFunc()} control={<Radio style={{color: 'white'}} />} label="Todos los procedimientos" />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="Cirugía plástica" onChange={() => selectedProcedureFunc('Cirugía plástica')} control={<Radio style={{color: 'white'}} />} label="Cirugía plástica" />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="Medicina Estética" onChange={() => selectedProcedureFunc('Medicina Estética')} control={<Radio style={{color: 'white'}} />} label="Medicina Estética" />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="Medicina General" onChange={() => selectedProcedureFunc('Medicina General')} control={<Radio style={{color: 'white'}} />} label="Medicina General" />
                                </ListItemButton>
                            </RadioGroup>
                        </List>
                    </Collapse>
                </div>
            </div>
        <Grid className='doctors_list' container direction='row' alignItems='start' justifyContent='center' spacing={2}>
            {
                doctors.filter(searchDoctors(term)).map((doctor, index) => {
                    return (
                        <Grid key={index} item>
                            <Link to={`/doctor/${doctor.id}`}>
                                <CardDoctors imgDoctor={`${process.env.REACT_APP_URL_API_IMGDOCTORS}${doctor.img}`} nameDoctor={doctor.name} descriptionDoctor={doctor.title} cityDoctor={doctor.city} starsNumber={doctor.stars}/>
                            </Link>
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