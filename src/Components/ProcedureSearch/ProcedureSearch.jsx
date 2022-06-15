import React, { useState, useEffect } from 'react'
import { TextField, FormControl } from '@mui/material'
import Questions from '../Questions/Questions'

import './Assets/styles.css'

import newQuestions from '../../Api/newQuestions'

const URL = process.env.REACT_APP_URL_API_PROCEDURES

const ProcedureSearch = () => {

    const [filter, setFilter] = useState([])
    const [categoryProcedure, setCategoryProcedure] = useState('')
    const [questionSelected, setCuestionSelected] = useState('')

    const [question, setQuestion] = useState(false)

    const handleFilter = async (e) => {
        const searcher = e.target.value
        const response = await fetch(URL)
        const data = await response.json()
        const newFilter = data.filter((proces) => {
            return proces.procedure.name.toLowerCase().includes(searcher.toLocaleLowerCase())
        })
        searcher === '' ? setFilter([]) : setFilter(newFilter)
    }

    const initCuestions = (e) => {
        setFilter([])
        const click = e.target.outerText
        const categorySelected = e.target.attributes.category.value
        setCategoryProcedure(categorySelected)
        setCuestionSelected(click)
    }

    
    useEffect(() => {
        if(categoryProcedure === newQuestions[0].idProcedure) {
          setQuestion(newQuestions[0].questions)
        } 
      }, [categoryProcedure])


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
                            <button key={index} category={pro.procedure.idProcedure} className='resoult' onClick={initCuestions} >
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
            {question &&
                <Questions question={question} clickQuestion={questionSelected} />
            }
        </>
    </>
  )
}

export default ProcedureSearch