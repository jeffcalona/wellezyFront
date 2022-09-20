import { CardActions, Collapse, FormControlLabel, Grid, IconButton, List, ListItemButton, ListItemText, Radio, RadioGroup } from '@mui/material'
import axios from 'axios'
import { ArrowDown2, ArrowLeft2, ArrowRight2, ArrowUp2, Heart, Star1 } from 'iconsax-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardQuestionChofer from '../CardQuestionChofer/CardQuestionChofer'
import CollapseList from '../CollapseList/CollapseList'

import './Assets/styles.css'

const TransportsList = () => {

    const [transports, setTransports] = useState([])
    const [importantTransports, setImportantTransports] = useState([])

    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(0)

    const [filterCity, setFilterCity] = useState([])
    const [filterGender, setFilterGender] = useState([])

    const [openListCity, setOpenListCity] = useState(false)
    const [openListGender, setOpenListGender] = useState(false)

    const apiTransports = process.env.REACT_APP_URL_API_TRANSPORTS

    const getApiTransports = async (url) => {
        await axios.get(url).then((response) => {
            setTransports(response.data.data)
            setImportantTransports(response.data.data)
        }).catch((err) => console.log(err))
    }

     /* search Transports*/
     const searchTransportsFunc = (e) => {
        setCurrentPage(0)
        setSearch(e.target.value)
    }

    /*Filtered Transports*/
    const filteredTransports = () => {
        if(search.length === 0) {
            return transports.slice(currentPage, currentPage + 20)
        } else {
            const searchersTransports = transports.filter(transp => transp.name.toLowerCase().includes(search.toLocaleLowerCase()))
            return searchersTransports.slice(currentPage, currentPage + 20)
        }
    }

    /*Pagination*/
    const nextPage = () => {
        if (transports.filter(transp => transp.name.toLowerCase().includes(search.toLocaleLowerCase())).length > currentPage + 20) {
            setCurrentPage(currentPage + 20)
            window.scrollTo(0, 100)
        }
    }
    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 20)
            window.scrollTo(0, 100)
        }
    }

    /*Filter City*/
    const selectedCityFunc = (catItem) => {
        setCurrentPage(0)
        const resultCity = importantTransports.filter((data) => {
            return data.city.toLowerCase() === catItem
        })
        setTransports(resultCity)
        setFilterCity(resultCity)
    }
    const selectedAllCityFunc = () => {
        setTransports(importantTransports)
        setFilterCity([])
    }

    /*Filter gender*/
    const selectedGenderFunc = (catItem) => {
        setCurrentPage(0)
        if (filterCity.length === 0) {
            const resultGen = importantTransports.filter((data) => {
                return data.surname === catItem
            })
            setTransports(resultGen)
            setFilterGender(resultGen)
        } else {
            const resultGen = filterCity.filter((data) => {
                return data.surname === catItem
            })
            setTransports(resultGen)
            setFilterGender(resultGen)
        }
    }
    const selectedAllGenderFunc = () => {
        setCurrentPage(0)
        if (filterCity.length !== 0) {
            return setTransports(filterCity)
        }
        return setTransports(importantTransports)
    }

    const handleClickCity = () => {
        setOpenListCity(!openListCity)
    }
    const handleClickGender = () => {
        setOpenListGender(!openListGender)
    }

    const choferSelected = (e) => {
        console.log('Seleccionó a', e.target.attributes.category.value)
    }

    useEffect(() => {
        getApiTransports(apiTransports)
    }, [])

    return (
        <div className='transportsList'>
            <div className='transportsFilter_'>
                <div className='transportsFilter_content'>
                    <div className='transportsFilter_input'>
                        <input type="text" placeholder='Busca Vehículo o Conductor' value={search} onChange={searchTransportsFunc} />
                    </div>
                    <h2>Filtrar Por</h2>
                    <ListItemButton onClick={handleClickCity} className='collapseList_ListItemButton' >
                        <ListItemText primary='Ciudad' />
                        {openListCity ? <ArrowUp2 size="32" color="white" /> : <ArrowDown2 size="32" color="white" />}
                    </ListItemButton>
                    <Collapse in={openListCity} timeout="auto" unmountOnExit sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05) !important', borderRadius: '20px' }}>
                        <List component="div">
                            <RadioGroup
                                defaultValue="all"
                            >
                                <ListItemButton>
                                    <FormControlLabel value="all" control={<Radio style={{ color: 'white' }} />} label="Todas las ciudades" onChange={() => selectedAllCityFunc()} />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="barranquilla" control={<Radio style={{ color: 'white' }} />} label="Barranquilla" onChange={() => selectedCityFunc('barranquilla')} />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="bogotá" control={<Radio style={{ color: 'white' }} />} label="bogotá" onChange={() => selectedCityFunc('bogotá')}/>
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="cali" control={<Radio style={{ color: 'white' }} />} label="Cali" onChange={() => selectedCityFunc('cali')}/>
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="medellín" control={<Radio style={{ color: 'white' }} />} label="Medellín" onChange={() => selectedCityFunc('medellín')}/>
                                </ListItemButton>
                            </RadioGroup>
                        </List>
                    </Collapse>
                    <div style={{ width: '100%', height: '3px', backgroundColor: 'white', borderRadius: '50px', margin: '10px 0' }} />
                    <CollapseList
                        collapseListTitle='Calificación'
                        collapseList={
                            <div className='transportsList_icon'>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <IconButton>
                                        <Star1 size="35" color='#FFB82E' />
                                    </IconButton>
                                </CardActions>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <IconButton>
                                        <Star1 size="35" color='#FFB82E' />
                                    </IconButton>
                                </CardActions>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <IconButton>
                                        <Star1 size="35" color='#FFB82E' />
                                    </IconButton>
                                </CardActions>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <IconButton>
                                        <Star1 size="35" color='#FFB82E' />
                                    </IconButton>
                                </CardActions>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <IconButton>
                                        <Star1 size="35" color='#FFB82E' />
                                    </IconButton>
                                </CardActions>
                            </div>
                        }
                    />
                    <div style={{ width: '100%', height: '3px', backgroundColor: 'white', borderRadius: '50px', margin: '10px 0' }} />
                    <CollapseList
                        collapseListTitle='Favoritos'
                        collapseList={
                            <div className='transportsList_icon'>
                                <CardActions className='transportsList_heart'>
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
                        {openListGender ? <ArrowUp2 size="32" color="white" /> : <ArrowDown2 size="32" color="white" />}
                    </ListItemButton>
                    <Collapse in={openListGender} timeout="auto" unmountOnExit sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05) !important', borderRadius: '20px' }}>
                        <List component="div">
                            <RadioGroup
                                defaultValue="all"
                            >
                                <ListItemButton>
                                    <FormControlLabel value="all" control={<Radio style={{ color: 'white' }} />} label="Todos los géneros" onChange={() => selectedAllGenderFunc()} />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="Female" control={<Radio style={{ color: 'white' }} />} label="Dama" onChange={() => selectedGenderFunc('Female')} />
                                </ListItemButton>
                                <ListItemButton>
                                    <FormControlLabel value="Male" control={<Radio style={{ color: 'white' }} />} label="Caballero" onChange={() => selectedGenderFunc('Male')} />
                                </ListItemButton>
                            </RadioGroup>
                        </List>
                    </Collapse>
                </div>
            </div>
            <Grid className='transports_list' container direction='row' alignItems='start' justifyContent='center' spacing={2}>
                {
                    filteredTransports().map((transport, index) => {
                        return (
                            <Grid key={index} item>
                                <Link to={`/transport/${transport.id}`}>
                                    <CardQuestionChofer choferAvatar={transport.img} choferName={transport.name} carChoferImg={transport.car_image} carChoferModel={transport.modelo} choferCity={transport.city} categorySelected={transport.name} choferSelected={choferSelected} starsNumber={transport.stars} sizeStars='large' />
                                </Link>
                            </Grid>
                        )
                    })
                }
                <CardActions className='doctorsList_arraws'>
                    {currentPage > 0 ?
                        <IconButton className='arraw' onClick={prevPage}><ArrowLeft2 size="40" color="#004274" /></IconButton>
                        :
                        ''
                    }
                    {transports.filter(doc => doc.name.toLowerCase().includes(search.toLocaleLowerCase())).length > currentPage + 20 ?
                        <IconButton className='arraw' onClick={nextPage}><ArrowRight2 size="40" color="#004274" /></IconButton>
                        :
                        ''
                    }

                </CardActions>
            </Grid>
        </div>
    )
}

export default TransportsList