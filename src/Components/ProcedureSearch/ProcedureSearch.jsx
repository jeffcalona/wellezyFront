import React, { useState } from 'react'
import { TextField, FormControl } from '@mui/material'

import './Assets/styles.css'

const URL = process.env.REACT_APP_URL_API_PROCEDURES

const ProcedureSearch = () => {

    const [filter, setFilter] = useState([])
    

    const handleFilter = async (e) => {
        const searcher = e.target.value
        const response = await fetch(URL)
        const data = await response.json()
        const newFilter = data.filter((proces) => {
            return proces.procedure.name.toLowerCase().includes(searcher.toLocaleLowerCase())
        })
        searcher === '' ? setFilter([]) : setFilter(newFilter)
    }

  return (
    <>
        <FormControl className='searchFormControl' variant="filled" color="error">
          <TextField
          className='searchTextField'
          label="¿Que procedimiento te quieres realizar?"
          type="search"
          variant="filled"
          onChange={handleFilter}
        />
        </FormControl>
        <div className='div_resoults'>
            {filter.length !== 0 && (
                <div className='resoults'>
                    {
                        filter.map((pro) => {
                        return (
                            <a key={pro.id} className='resoult' href="/">
                                <div className='resoult-div_img'><img src={pro.procedure.img} alt={pro.procedure.name} /></div>
                                {pro.procedure.name}
                            </a>
                        )
                        })
                    }
                </div>
            )}
        </div>
    </>
  )
}

export default ProcedureSearch