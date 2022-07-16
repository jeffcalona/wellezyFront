import { IconButton, Rating } from '@mui/material'
import { ArrowDown2, ArrowLeft2, ArrowRight2, Heart } from 'iconsax-react'
import React, { useRef, useState, useEffect } from 'react'
import DanielCorreaImgGrande from './Assets/img/DanielCorreaImgGrande.jpg'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

import './Assets/styles.css'
import LogoTecnica1 from './Assets/img/LogoTecnica1.png'
import LogoTecnica2 from './Assets/img/LogoTecnica2.png'
import LogoTecnica3 from './Assets/img/LogoTecnica3.png'
import LogoTecnica4 from './Assets/img/LogoTecnica4.png'
import LogoTecnica5 from './Assets/img/LogoTecnica5.png'
import Despues1 from './Assets/img/Despues1.jpg'
import Despues2 from './Assets/img/Despues2.jpg'
import Despues3 from './Assets/img/Despues3.jpg'
import axios from 'axios'

const MotionConstraints = styled(motion.div)`
overflow: hidden;
`;

const MotionBox = styled(motion.div)`
width: 190vw;
`

const DoctorDetail = () => {
    const constraintsRef = useRef(null)

    const location = useLocation()
    const id = location.pathname.split("/")[2]

    const [doctor, setDoctor] = useState({})
    const [starsNumber, setStarsNumber] = useState(0)
 
    useEffect(() => {
      const getDoctor = async () => {
        await axios.get(process.env.REACT_APP_URL_API_DOCTOR+id).then((response) => {
            setDoctor(response.data.doctor)
            setStarsNumber(response.data.doctor.stars)
        }).catch((err) => console.log(err))
      }
      getDoctor()
    }, [id])
    

  return (
    <div className='doctorDetail'>
        <div className='doctorDetailLeft'>
            <div className='doctorDetailLeft_img'>
                <img src={`${process.env.REACT_APP_URL_API_IMGDOCTORS}${doctor.img}`} alt="Daniel Correa" />
            </div>
            <div className='doctorDetailLeft_text'>
                <div className='doctorDetailLeft_text_results'>
                    <h3>Resultados</h3>
                    <p>Antes y despúes de sus pacientes</p>
                </div>
                <div>
                    <MotionConstraints className='doctorDetailLeft-results_imgs' ref={constraintsRef}>
                            <MotionBox className='doctorDetailLeft-results_slider' drag='x' dragConstraints={constraintsRef}>
                                <div className='doctorDetailLeft-results_imgs_'>
                                    <div className='doctorDetailLeft-results_img'>
                                        <img src={Despues1} alt="despues1" />
                                    </div>
                                    <h3>DESPUES</h3>
                                    <div className='doctorDetailLeft-results-img_arrows'>
                                        <ArrowLeft2 size="32" color="white"/>
                                        <ArrowRight2 size="32" color="white"/>
                                    </div>
                                </div>
                                <div className='doctorDetailLeft-results_imgs_'>
                                    <div  className='doctorDetailLeft-results_img'>
                                        <img src={Despues2} alt="despues2" />
                                    </div>
                                    <h3>DESPUES</h3>
                                    <div className='doctorDetailLeft-results-img_arrows'>
                                        <ArrowLeft2 size="32" color="white"/>
                                        <ArrowRight2 size="32" color="white"/>
                                    </div>
                                </div>
                                <div className='doctorDetailLeft-results_imgs_'>
                                    <div  className='doctorDetailLeft-results_img'>
                                        <img src={Despues3} alt="despues3" />
                                    </div>
                                    <h3>DESPUES</h3>
                                    <div className='doctorDetailLeft-results-img_arrows'>
                                        <ArrowLeft2 size="32" color="white"/>
                                        <ArrowRight2 size="32" color="white"/>
                                    </div>
                                </div>
                                <div className='doctorDetailLeft-results_imgs_'>
                                    <div className='doctorDetailLeft-results_img'>
                                        <img src={Despues1} alt="despues1" />
                                    </div>
                                    <h3>DESPUES</h3>
                                    <div className='doctorDetailLeft-results-img_arrows'>
                                        <ArrowLeft2 size="32" color="white"/>
                                        <ArrowRight2 size="32" color="white"/>
                                    </div>
                                </div>
                                <div className='doctorDetailLeft-results_imgs_'>
                                    <div  className='doctorDetailLeft-results_img'>
                                        <img src={Despues2} alt="despues2" />
                                    </div>
                                    <h3>DESPUES</h3>
                                    <div className='doctorDetailLeft-results-img_arrows'>
                                        <ArrowLeft2 size="32" color="white"/>
                                        <ArrowRight2 size="32" color="white"/>
                                    </div>
                                </div>
                                <div className='doctorDetailLeft-results_imgs_'>
                                    <div  className='doctorDetailLeft-results_img'>
                                        <img src={Despues3} alt="despues3" />
                                    </div>
                                    <h3>DESPUES</h3>
                                    <div className='doctorDetailLeft-results-img_arrows'>
                                        <ArrowLeft2 size="32" color="white"/>
                                        <ArrowRight2 size="32" color="white"/>
                                    </div>
                                </div>
                            </MotionBox>
                    </MotionConstraints>
                </div>
            </div>
        </div>
        <div className='middleLine' />
        <div className='doctorDetailRight'>
            <div className='doctorDetailRight_text'>
                <div className='doctorDetailRight_title'>
                    <h1>{doctor.name}</h1>
                    <IconButton className='doctorDetailRight_heart'>
                        <Heart size="32" color="#00AFE8"/>
                    </IconButton>
                </div>
                <p className='doctorDetailRight_description'>
                    {doctor.description}
                </p>
            </div>
            <div className='doctorDetailRight_experience'>
                <h3>Experiencia</h3>
                <p>{doctor.experience} años</p>
            </div>
            {doctor.name === 'Daniel Correa' && 
                <div className='doctorDetailRight_exclusiveTechniques'>
                    <h3>Técnicas Exclusivas</h3>
                    <p>Con tiempos quirurgicos mas  cortos para mejores resultados y una recuperacion exitosa.</p>
                    <div className='doctorDetailRight_exclusiveTechniques_'>
                        <div className='doctorDetailRight_exclusiveTechniques_img'><img src={LogoTecnica1} alt="" /></div>
                        <div className='doctorDetailRight_exclusiveTechniques_img'><img src={LogoTecnica2} alt="" /></div>
                        <div className='doctorDetailRight_exclusiveTechniques_img'><img src={LogoTecnica3} alt="" /></div>
                        <div className='doctorDetailRight_exclusiveTechniques_img'><img src={LogoTecnica4} alt="" /></div>
                        <div className='doctorDetailRight_exclusiveTechniques_img'><img src={LogoTecnica5} alt="" /></div>
                    </div>
                </div>
            }
            <div className='doctorDetailRight_assessment'>
                <Rating name="size-large" value={starsNumber} size="large" />
                <p>143 Reseñas</p>
            </div>
            <div className='doctorDetailRight_button'>
                <button>Agenda Valoración</button>
            </div>
            <div className='doctorDetailRight_comments'>
                <h3>Comentarios de los Pacientes</h3>
                <div className='doctorDetailRight_comments_'>
                    <div>
                        <h4>Verónica Serna</h4>
                        <p>Lipotransferencia + Marcación Abdominal</p>
                        <div className='doctorDetailRight_comments_one'>
                            <p>“Me fué super bien, la atención super bien. Con los mejores...”</p>
                            <div className='doctorDetailRight_comments_arrow'>
                                <ArrowDown2 size="25" color="white"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='doctorDetailRight_comments_'>
                    <div>
                        <h4>Daniela Gomez</h4>
                        <p>Abdominoplastia con Transferencia</p>
                        <div className='doctorDetailRight_comments_one'>
                            <p>“Estoy muy contenta con los resultados, lo recomiendo mucho...”</p>
                            <div className='doctorDetailRight_comments_arrow'>
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
export default DoctorDetail