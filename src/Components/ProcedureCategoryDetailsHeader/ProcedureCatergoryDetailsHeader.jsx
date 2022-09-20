import { ArrowDown2 } from 'iconsax-react'
import React from 'react'
import Bichectomia from './Assets/Img/Bichectomia.png'
import './Assets/styles.css'
import { Link as LinkScroll } from 'react-scroll'

const ProcedureCatergoryDetailsHeader = () => {
  return (
    <div className='procedureCatergoryDetailsHeader'>
        <div className='procedureCatergoryDetailsHeader_img'>
            <div className='procedureCatergoryDetailsHeader-img_background'/>
            <img src={Bichectomia} alt="bichectomia" />    
        </div>
        <div className='procedureCatergoryDetailsHeader_text'>
            <div className='procedureCatergoryDetailsHeader-text_title'>
                <h1>bichectomia</h1>
                <p>cirugía de megillas</p>
            </div>
            <div className='procedureCatergoryDetailsHeader-text_description'>
                <p>Reduce el volumen de las mejillas, acentúa los pómulos y el contorno mandibular mejorando el aspecto de tu rostro.</p>
            </div>
            <div className='procedureCatergoryDetailsHeader-text_button'>
                <LinkScroll to='scrollOne' spy={true} smooth={true} offset={-100} duration={500}>ver más <span><ArrowDown2 size="32" color="#004274"/></span></LinkScroll>
            </div>
        </div>
    </div>
  )
}

export default ProcedureCatergoryDetailsHeader