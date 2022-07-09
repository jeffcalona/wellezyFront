import React, { useState, useEffect } from 'react'
import './Assets/styles.css'
import newQuestions from '../../Api/newQuestions'
import CardDoctors from '../CardDoctors/CardDoctors'
import { ArrowDown2, ArrowLeft2, ArrowRight2, ArrowUp2 } from 'iconsax-react'
import CollapseList from '../../Components/CollapseList/CollapseList'
import { Heart, Star1 } from 'iconsax-react'
import { CardActions, Collapse, FormControlLabel, Grid, IconButton, List, ListItemButton, ListItemText, Radio, RadioGroup } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'

const apiDoctors = newQuestions[0].questions[5].response.doctors

//const listDoctorsPerPage = 20

const DoctorsList = () => {
     
    const [doctors, setDoctors] = useState([])
    const [listDotors, setListDotors] = useState(false)
    const [term, setTerm] = useState('')
    
    const [filterCity, setFilterCity] = useState([])

    //const [listtDoctors, setListtDoctors] = useState([]) //tabla usuarios
    //const [search, setSearch] = useState('') //busqueda 


    const [listDoctors, setListDoctors] = useState(apiDoctors)

    const [openListCity, setOpenListCity] = useState(false)
    const [openListGender, setOpenListGender] = useState(false)
    const [openListProcedure, setOpenListProcedure] = useState(false)
    // const [listDoctorsPage, setListDoctorsPage] = useState([...listDoctors].splice(0, listDoctorsPerPage))
    // const [currentPage, setCurrentPage] = useState(0)
    // const [newList, setNewList] = useState(listDoctorsPage)


    // const [selectedCity, setselectedCity] = useState('')

    useEffect(() => {
        const getApiDoctors = async () => {
            await axios.get(process.env.REACT_APP_URL_API_DATA).then((response) => {
                setDoctors(response.data)
            }).catch((err) => console.log(err))
        }
        getApiDoctors()
    }, [listDotors])

    const searchDoctors = (term) => {
        return function(data){
            return data.name.toLowerCase().includes(term.toLocaleLowerCase())
        }
    }

    /*filters sercher*/
    // const searcherFilter = (e) => {
    //     const searcher = e.target.value
    //     setSearch(searcher)
    //     const newFilter = doctors.filter((data) => {
    //         return data.name.toLowerCase().includes(searcher.toLocaleLowerCase())
    //     })
    //     searcher === '' ? setDoctors(doctors) : setDoctors(newFilter)
    // }

    /*Filter City*/
    const selectedCityFunc = (catItem) => {
        const resultCity = doctors.filter((data) => {
            return data.city === catItem
        })
        setDoctors(resultCity)
        setFilterCity(resultCity)
    }
    /*Filter gender*/
    const selectedGenderFunc = (catItem) => {
        if(filterCity === '') {
            const resultCity = listDoctors.filter((data) => {
                return data.gender === catItem
            })
            setDoctors(resultCity)
        }else {
            const resultCity = filterCity.filter((data) => {
                return data.gender === catItem
            })
            setDoctors(resultCity)
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
                                    <FormControlLabel value="all" onChange={() => setListDotors(!listDotors)} control={<Radio style={{color: 'white'}} />} label="Todas las ciudades" />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="Barranquilla" onChange={() => selectedCityFunc('Barranquilla')} control={<Radio style={{color: 'white'}} />} label="Barranquilla" />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="Bogotá" onChange={() => selectedCityFunc('Bogotá')} control={<Radio style={{color: 'white'}} />} label="Bogotá" />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="Cali" onChange={() => selectedCityFunc('Cali')} control={<Radio style={{color: 'white'}} />} label="Cali" />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="Medellín" onChange={() => selectedCityFunc('Medellín')} control={<Radio style={{color: 'white'}} />} label="Medellín" />
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
                                    <FormControlLabel value="all" onChange={() => setListDoctors(apiDoctors)} control={<Radio style={{color: 'white'}} />} label="Todos los géneros" />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="Dama" onChange={() => selectedGenderFunc('Dama')} control={<Radio style={{color: 'white'}} />} label="Dama" />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="Hombre" onChange={() => selectedGenderFunc('Hombre')} control={<Radio style={{color: 'white'}} />} label="Hombre" />
                                </ListItemButton>
                            </RadioGroup>
                        </List>
                    </Collapse>
                    <div style={{ width: '100%', height: '3px', backgroundColor: 'white', borderRadius: '50px', margin: '10px 0' }} />
                    {/* <CollapseList
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
                    /> */}
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
                                    <FormControlLabel value="all" onChange={() => setListDoctors(apiDoctors)} control={<Radio style={{color: 'white'}} />} label="Todos los procedimientos" />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="Cirugía plástica" onChange={() => selectedGenderFunc('Cirugía plástica')} control={<Radio style={{color: 'white'}} />} label="Cirugía plástica" />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="Medicina Estética" onChange={() => selectedGenderFunc('Medicina Estética')} control={<Radio style={{color: 'white'}} />} label="Medicina Estética" />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="Medicina General" onChange={() => selectedGenderFunc('Medicina General')} control={<Radio style={{color: 'white'}} />} label="Medicina General" />
                                </ListItemButton>
                            </RadioGroup>
                        </List>
                    </Collapse>
                </div>
            </div>
        <Grid className='doctors_list' container direction='row' alignItems='start' justifyContent='center' spacing={2}>
            {/* {doctors &&
                doctors.map((doctor, index) => {
                    return (
                        <Grid key={index} item>
                            <Link to={`/doctor/${doctor.slug}`}>
                                <CardDoctors imgDoctor={doctor.avatar} nameDoctor={doctor.name} descriptionDoctor={doctor.description} cityDoctor={doctor.city}/>
                            </Link>
                        </Grid>
                    )
                })
            } */}
            {
                doctors.filter(searchDoctors(term)).map((doctor, index) => {
                    return (
                        <Grid key={index} item>
                            <Link to={`/doctor/${doctor.slug}`}>
                                <CardDoctors imgDoctor={doctor.avatar} nameDoctor={doctor.name} descriptionDoctor={doctor.description} cityDoctor={doctor.city}/>
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