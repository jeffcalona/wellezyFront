import { FormControl, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
//import HeaderImg from './Assets/Img/HeaderImg.jpeg'
import HeaderImg2 from './Assets/Img/HeaderImg2.jpeg'
import './Assets/styles.css'
import ContentImg1 from './Assets/Img/ContentImg1.jpeg'
import ContentImg2 from './Assets/Img/ContentImg2.jpg'
import ContentImg3 from './Assets/Img/ContentImg3.jpeg'
import ContentImg4 from './Assets/Img/ContentImg4.jpeg'

const info = [
    {id: 1, img: ContentImg1, description: 'Lugares que marcarán tu vida'},
    {id: 2, img: ContentImg2, description: 'Cada viaje es una puerta a un nuevo mundo'},
    {id: 3, img: ContentImg3, description: 'La atención que mereces en tus destinos'},
    {id: 4, img: ContentImg4, description: 'Explora y da vida a tus sueños como viajero'}
]

const TurismHeader = () => {

    const [filter, setFilter] = useState([])
    console.log('filter', filter)

    const URL = process.env.REACT_APP_URL_API_DATA

    const handleFilter = async (e) => {
        const searcher = e.target.value
        await axios.get(URL).then((response) => {
            const resp = response.data
            const filter = resp.filter((filt) => {
                return filt.destiny.toLowerCase().includes(searcher.toLocaleLowerCase())
            })
            searcher === '' ? setFilter([]) : setFilter(filter)
        }).catch((err) => console.log(err))
    }

  return (
    <div className='turismHeader'>
        <img src={HeaderImg2} alt="" />
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', top: 0, width: '100%', height: '100%', position: 'absolute' }}/>
        <div className='turismHeader_info'>
            <div className='turismHeader-info_input'>
                <FormControl className='turismHeader_searchFormControl' variant="filled" color="error">
                    <TextField
                    className='turismHeader_searchTextField'
                    label="¿Hacia donde viajas?"
                    type="search"
                    variant="filled"
                    onChange={handleFilter}
                    />
                </FormControl>
                <div className='div_results'>
                    {filter.length !== 0 &&
                        <div className='results'>
                            {
                                filter.map((dest, index) => {
                                    return (
                                        <div key={index} className='dest'>
                                            <div className='dest_img'>
                                                <img src={dest.img} alt={dest.destiny} />
                                            </div>
                                            <p>{dest.destiny}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
            <div className='turismHeader-info_text'>
                <h1>El mundo está lleno de expiencias inolvidables</h1>
            </div>
        </div>
        <div className='turismHeader_content'>
            {
                info.map((content) => {
                    return (
                        <div key={content.id} className='content'>
                            <div className='content_img'>
                                <img src={content.img} alt="" />
                            </div>
                            <div className='content_text'>
                                <h3>{content.description}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TurismHeader