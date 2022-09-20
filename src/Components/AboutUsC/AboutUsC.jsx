import React from 'react'
import BannerImg from './Assets/Img/BannerImg.png'
import ClinicImg from './Assets/Img/ClinicImg.png'
import TravelImg from './Assets/Img/TravelImg.jpg'
import Clinica1 from './Assets/Img/Clinica1.png'
import Clinica2 from './Assets/Img/Clinica2.jpeg'
import Clinica3 from './Assets/Img/Clinica3.jpeg'
import Clinica4 from './Assets/Img/Clinica4.png'

import './Assets/styles.css'

const AboutUsC = () => {
  return (
    <div className='aboutUsC'>
        <div className='aboutUsC_banner'>
            <img src={BannerImg} alt="Wellezy" />
        </div>
        <div className='aboutUsC_'>
            <div className='aboutUsC_about'>
                <div className='aboutUsC_about_'>
                    <h1>Nosotros</h1>
                    <p>Somos una entidad legalmente registrada y certificada en Colombia, autorizada para ofrecer nuestros servicios en las diferentes ciudades y brindar la mejor asesoría a las personas interesadas en realizarse una Cirugía Plástica, Estética y Reconstructiva, Tratamientos Estéticos y Turismo en el país.</p>
                </div>
            </div>
            <div className='aboutUsC_mainImgsText'>
                <div className='aboutUsC_mainImgsText_'>
                    <div className='aboutUsC-mainImgsText_img'>
                        <img src={ClinicImg} alt="wellezy clinic" />
                    </div>
                    <div className='aboutUsC-mainImgsText_text'>
                        <div className='aboutUsC-mainImgsText_text_'>
                            <h2>Medicina Estética</h2>
                            <p>Wellezy es una plataforma confiable que cuenta con las mejores Clínicas VIP del país y un Staff de Cirujanos Plásticos especializados y certificados, con más de 14 años de experiencia en el campo de la medicina estética.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='aboutUsC_mainImgsText'>
                <div className='aboutUsC_mainImgsText_'>
                    <div className='aboutUsC-mainImgsText_text'>
                        <div className='aboutUsC-mainImgsText_text_'>
                            <h2>Turismo Médico</h2>
                            <p>Además de brindar información sobre Cirugía Plástica, Estética y Reconstructiva, nuestra organización también ofrece el servicio de turismo y estadía en Colombia, permitiendo también al paciente acceder al paquete con todos los servicios incluidos, esto con el fin de brindar un servicio de la más alta calidad.</p>
                        </div>
                    </div>
                    <div className='aboutUsC-mainImgsText_img'>
                        <img src={TravelImg} alt="wellezy clinic" />
                    </div>
                </div>
            </div>
            <div className='aboutUsC_clinics'>
                <h1>Nuestras Clínicas</h1>
                <div className='aboutUsC_clinics_'>
                    <div className='aboutUsC-clinics_img'>
                        <div className='aboutUsC-clinics_img_'>
                            <img src={Clinica1} alt="" />
                        </div>
                        <div className='aboutUsC-clinics_text'>
                            <h3>Medellín</h3>
                            <ul>
                                <li>Clínica Láser</li>
                                <li>Pielis Institute</li>
                                <li>Clíca Especialistas del Poblado</li>
                            </ul>
                        </div>
                    </div>
                    <div className='aboutUsC-clinics_img'>
                        <div className='aboutUsC-clinics_img_'>
                            <img src={Clinica2} alt="" />
                        </div>
                        <div className='aboutUsC-clinics_text'>
                            <h3>Bogotá</h3>
                            <ul>
                                <li>Clínica Especialistas de la Sabana</li>
                            </ul>
                        </div>
                    </div>
                    <div className='aboutUsC-clinics_img'>
                        <div className='aboutUsC-clinics_img_'>
                            <img src={Clinica3} alt="" />
                        </div>
                        <div className='aboutUsC-clinics_text'>
                            <h3>Barranquilla</h3>
                            <ul>
                                <li>Clínica Especialistas de Barranquilla</li>
                            </ul>
                        </div>
                    </div>
                    <div className='aboutUsC-clinics_img'>
                        <div className='aboutUsC-clinics_img_'>
                            <img src={Clinica4} alt="" />
                        </div>
                        <div className='aboutUsC-clinics_text'>
                            <h3>Cali</h3>
                            <ul>
                                <li>Clínica Láser</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUsC