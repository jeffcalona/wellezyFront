import { Grid, IconButton } from '@mui/material'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React, { useState } from 'react'
import CardQuestionDoctors from '../CardQuestionDoctors/CardQuestionDoctors'

import './Assets/styles.css'

const DoctorsQuestion = ({ question, presentQuestion, setPresentQuestion, setUseDoctorComponent, useDoctorComponent }) => {
    
    const doctorSelected = (e) => {
        setUseDoctorComponent(!useDoctorComponent)
        console.log('Seleccionó', e.target.attributes.category.value)
        setPresentQuestion(presentQuestion + 1)
    }

    const apiDoctors = question[presentQuestion].response.doctors

    const listDoctorsPerPage = 9

    const [listDoctorsPage, setListDoctorsPage] = useState([...apiDoctors].splice(0, listDoctorsPerPage))
    const [currentPage, setCurrentPage] = useState(0)

    const prevHandler = () => {
        const prevPage = currentPage - 1

        if(prevPage < 0) return;

        const firstIndex = prevPage * listDoctorsPerPage
        setListDoctorsPage([...apiDoctors].splice(firstIndex, listDoctorsPerPage))
        setCurrentPage(prevPage)
    }

    const nextHandler = () => {
        const totalList = apiDoctors.length
        const nextPage = currentPage + 1
        const firstIndex = nextPage * listDoctorsPerPage

        if (firstIndex >= totalList) return;

        setListDoctorsPage([...apiDoctors].splice(firstIndex, listDoctorsPerPage))
        setCurrentPage(nextPage)
    }

  return (
    <Grid className='grid_doctorsQuestion' container direction='row' alignItems='center' justifyContent='center' spacing={2}>
        {
            listDoctorsPage.map((quest, index) => {
                return (
                    <Grid item className='CardDoctors' key={index}>
                        <CardQuestionDoctors imgDoctor={quest.avatar} nameDoctor={quest.name} descriptionDoctor={quest.description} cityDoctor={quest.city} categorySelected={quest.name} doctorSelected={doctorSelected} stars={quest.assessment}/>
                    </Grid>
                )
            })
        }
        <div className='Arrows'>
            <IconButton onClick={prevHandler}>
                <ArrowLeft2 size="35" color="white"/>
            </IconButton>
            <IconButton onClick={nextHandler}>
                <ArrowRight2 size="35" color="white"/>
            </IconButton>
        </div>
    </Grid>
  )
}

export default DoctorsQuestion