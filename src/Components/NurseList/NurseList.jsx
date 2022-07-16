import { CardActions, Collapse, FormControlLabel, Grid, IconButton, List, ListItemButton, ListItemText, Radio, RadioGroup } from '@mui/material'
import axios from 'axios'
import { ArrowDown2, ArrowLeft2, ArrowRight2, ArrowUp2, Heart, Star1 } from 'iconsax-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardDoctors from '../CardDoctors/CardDoctors'
import CollapseList from '../CollapseList/CollapseList'
import '../DoctorsList/Assets/styles.css'

const NurseList = () => {

    const [nurses, setNurses] = useState([])
    const [nursesImportant, setNursesImportant] = useState([])

    const [term, setTerm] = useState('')
    const [filterCity, setFilterCity] = useState([])
    console.log('filterCity', filterCity)

    const [openListCity, setOpenListCity] = useState(false)

    useEffect(() => {
        const getApiDoctors = async () => {
            await axios.get(process.env.REACT_APP_URL_API_NURSES).then((response) => {
                setNurses(response.data.data)
                setNursesImportant(response.data.data)
            }).catch((err) => console.log(err))
        }
        getApiDoctors()
    }, [])

    const searchNurse = (term) => {
        return function(data){
            return data.name.toLowerCase().includes(term.toLocaleLowerCase())
        }
    }

    /*Filter City*/
    const selectedCityFunc = (catItem) => {
        const resultCity = nursesImportant.filter((data) => {
            return data.city.toLowerCase() === catItem
        })
        setNurses(resultCity)
        setFilterCity(resultCity)
    }
    const selectedAllCityFunc = () => {
        setNurses(nursesImportant)
        setFilterCity([])
    }

    const handleClickCity = () => {
        setOpenListCity(!openListCity)
    }

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
                </div>
            </div>
        <Grid className='doctors_list' container direction='row' alignItems='start' justifyContent='center' spacing={2}>
            {
                nurses.filter(searchNurse(term)).map((nurse, index) => {
                    return (
                        <Grid key={index} item>
                            <Link to={`/nurse/${nurse.id}`}>
                                <CardDoctors imgDoctor={`${process.env.REACT_APP_URL_API_IMGNURSES}${nurse.img}`} nameDoctor={nurse.name} descriptionDoctor={`${nurse.experience} Años de Experiencia`} cityDoctor={nurse.city} starsNumber={nurse.stars}/>
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

export default NurseList