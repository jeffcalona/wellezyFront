import React, { useState } from 'react'
import './Assets/styles.css'
import newQuestions from '../../Api/newQuestions'
import { CardActions, Grid, IconButton } from '@mui/material'
import CardDoctors from '../CardDoctors/CardDoctors'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'

const apiDoctors = newQuestions[0].questions[5].response.doctors

const listDoctorsPerPage = 20

const DoctorsList = () => {

    const [listDoctorsPage, setListDoctorsPage] = useState([...apiDoctors].splice(0, listDoctorsPerPage))
    const [currentPage, setCurrentPage] = useState(0)

    const prevHandler = () => {
        const prevPage = currentPage - 1

        if(prevPage < 0) return

        const firstIndex = prevPage * listDoctorsPerPage
        setListDoctorsPage([...apiDoctors].splice(firstIndex, listDoctorsPerPage))
        setCurrentPage(prevPage)
    }

    const nextHandler = () => {
        const totalList = apiDoctors.length
        const nextPage = currentPage + 1
        var firstIndex = nextPage * listDoctorsPerPage

        if (firstIndex === totalList) return

        setListDoctorsPage([...apiDoctors].splice(firstIndex, listDoctorsPerPage))
        setCurrentPage(nextPage)
    }

  return (
    <Grid className='doctors_list' container direction='row' alignItems='center' justifyContent='center' spacing={2}>
        {
            listDoctorsPage.map((doctor, index) => {
                return (
                    <Grid key={index} item>
                        <CardDoctors imgDoctor={doctor.avatar} nameDoctor={doctor.name} descriptionDoctor={doctor.description} cityDoctor={doctor.city} />
                    </Grid>
                )
            })
        }
        <CardActions className='doctorsList_arraws'>
            <IconButton className='arraw' onClick={prevHandler}><ArrowLeft2 size="40" color="#004274"/></IconButton>
            <IconButton className='arraw' onClick={nextHandler}><ArrowRight2 size="40" color="#004274"/></IconButton>
        </CardActions>
    </Grid>
  )
}

export default DoctorsList