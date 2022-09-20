import React, { useState } from 'react'
import { TextField, FormControl } from '@mui/material'
import Questions from '../Questions/Questions'
//Redux
import { initCuestions } from '../../store/slices/questions'
import { useDispatch, useSelector } from 'react-redux'

import './Assets/styles.css'

const URL = process.env.REACT_APP_URL_API_PROCEDURES

const ProcedureSearch = () => {

    const dispatch = useDispatch()

    const [filter, setFilter] = useState([])

    const { questionsList } = useSelector(state => state.questions)
    console.log('questionsList', questionsList)
    

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
                        filter.map((pro, index) => {
                        return (
                            <button key={index} category={pro.procedure.idProcedure} className='resoult' onClick={(e) => {
                                dispatch(initCuestions(e))
                                setFilter([])
                                }} >
                                <div className='resoult-div_img'><img src={pro.procedure.img} alt={pro.procedure.name} /></div>
                                {pro.procedure.name}
                            </button>
                        )
                        })
                    }
                </div>
            )}
        </div>
        <>
            {
                questionsList.questions &&
                <Questions question={questionsList} />
            }
        </>
    </>
  )
}

export default ProcedureSearch