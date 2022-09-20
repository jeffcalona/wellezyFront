import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { IconButton, Rating } from '@mui/material';
import { ArrowDown2, Heart } from 'iconsax-react';
import './Assets/styles.css'
import DanielCorreaImgGrande from './Assets/Img/DanielCorreaImgGrande.jpg'
import Bichectomia from './Assets/Img/Bichectomia.png'
import Lipoabdominoplastia from './Assets/Img/Lipoabdominoplastia.jpg'
import Mastopexia from './Assets/Img/Mastopexia.png'
import TendadoVaginal from './Assets/Img/TensadoVaginal.png'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const MotionConstraints = styled(motion.div)`
overflow: hidden;
`;

const MotionBox = styled(motion.div)`
width: 190vw;
`

const NurseDetail = () => {
    const constraintsRef = useRef(null)

    const location = useLocation()
    const id = location.pathname.split('/')[2]

    const [nurse, setNurse] = useState({})
    console.log('nurse', nurse)
    const [starsNumber, setStarsNumber] = useState(0)

    useEffect(() => {
        const getNurse = async () => {
          await axios.get(process.env.REACT_APP_URL_API_NURSE+id).then((response) => {
            setNurse(response.data[0])
            setStarsNumber(response.data[0].stars)
          }).catch((err) => console.log(err))
        }
        getNurse()
      }, [id])

  return (
    <div className='nurseDetail'>
        <div className='nurseDetailLeft'>
            <div className='nurseDetailLeft_img'>
                <img src={`${process.env.REACT_APP_URL_API_IMGNURSES}${nurse.img}`} alt={nurse.name} />
            </div>
            <div>
                <div className='nurseDetailLeft-text_results'>
                    <h3>Experiencia</h3>
                    <p>Ha asistido a pacientes con cirugías:</p>
                </div>
                <div>
                    <MotionConstraints className='nurseDetailLeft-results_imgs' ref={constraintsRef}>
                            <MotionBox className='nurseDetailLeft-results_slider' drag='x' dragConstraints={constraintsRef}>
                                <div className='nurseDetailLeft-results_imgs_'>
                                    <div className='nurseDetailLeft-results_img'>
                                        <img src={Bichectomia} alt="despues1" />
                                    </div>
                                    <div className='backgroundBlack' />
                                    <h3>BICHECTOMIA</h3>
                                </div>
                                <div className='nurseDetailLeft-results_imgs_'>
                                    <div  className='nurseDetailLeft-results_img'>
                                        <img src={Lipoabdominoplastia} alt="despues2" />
                                    </div>
                                    <div className='backgroundBlack' />
                                    <h3>ABDOMINOPLASTIA</h3>
                                </div>
                                <div className='nurseDetailLeft-results_imgs_'>
                                    <div  className='nurseDetailLeft-results_img'>
                                        <img src={Mastopexia} alt="despues3" />
                                    </div>
                                    <div className='backgroundBlack' />
                                    <h3>MASTOPEXIA</h3>
                                </div>
                                <div className='nurseDetailLeft-results_imgs_'>
                                    <div className='nurseDetailLeft-results_img'>
                                        <img src={TendadoVaginal} alt="despues1" />
                                    </div>
                                    <div className='backgroundBlack' />
                                    <h3>TENSADO VAGINAL</h3>
                                </div>
                                <div className='nurseDetailLeft-results_imgs_'>
                                    <div  className='nurseDetailLeft-results_img'>
                                        <img src={Bichectomia} alt="despues2" />
                                    </div>
                                    <div className='backgroundBlack' />
                                    <h3>BICHECTOMIA</h3>
                                </div>
                                <div className='nurseDetailLeft-results_imgs_'>
                                    <div  className='nurseDetailLeft-results_img'>
                                        <img src={Lipoabdominoplastia} alt="despues3" />
                                    </div>
                                    <div className='backgroundBlack' />
                                    <h3>ABDOMINOPLASTIA</h3>
                                </div>
                            </MotionBox>
                    </MotionConstraints>
                </div>
            </div>
        </div>
        <div className='middleLine' />
        <div className='nurseDetailRight'>
            <div className='nurseDetailRight_description'>
                <div className='nurseDetailRight_title'>
                    <h1>{nurse.name}</h1>
                    <IconButton className='nurseDetailRight_heart'>
                        <Heart size="32" color="#00AFE8"/>
                    </IconButton>
                </div>
                <p className='nurseDetailRight_description'>{nurse.description}</p>
            </div>
            <div className='nurseDetailRight_experience'>
                <h3>Experiencia</h3>
                <p>{nurse.experience} años</p>
            </div>
            <div className='nurseDetailRight_appliedStudies'>
                <h3>Estudios Realizados</h3>
                <p>Lorem ipsum dolor sit amet 1</p>
                <p>Lorem ipsum dolor sit amet 2</p>
                <p>Lorem ipsum dolor sit amet 3</p>
            </div>
            <div className='nurseDetailRight_assessment'>
                <Rating name="size-large" value={starsNumber} size="large" />
                <p>143 Reseñas</p>
            </div>
            <div className='nurseDetailRight_button'>
                <button>Seleccionar Enfermera</button>
            </div>
            <div className='nurseDetailRight_comments'>
                <h3>Comentarios de los Pacientes</h3>
                <div className='nurseDetailRight_comments_'>
                    <div>
                        <h4>Verónica Serna</h4>
                        <p>Lipotransferencia + Marcación Abdominal</p>
                        <div className='nurseDetailRight_comments_one'>
                            <p>“Me fué super bien, la atención super bien. Con los mejores...”</p>
                            <div className='nurseDetailRight_comments_arrow'>
                                <ArrowDown2 size="25" color="white"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='nurseDetailRight_comments_'>
                    <div>
                        <h4>Daniela Gomez</h4>
                        <p>Abdominoplastia con Transferencia</p>
                        <div className='nurseDetailRight_comments_one'>
                            <p>“Estoy muy contenta con los resultados, lo recomiendo mucho...”</p>
                            <div className='nurseDetailRight_comments_arrow'>
                                <ArrowDown2 size="25" color="white"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NurseDetail