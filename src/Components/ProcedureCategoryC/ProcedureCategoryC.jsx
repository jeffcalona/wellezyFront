import React from 'react'
import CirugiaCorporalImg from './Assets/Img/CirugiaCorporalImg.jpg'
import { Link as LinkScroll } from 'react-scroll'
import { ArrowDown2 } from 'iconsax-react'
import Gluteoplastia from './Assets/Img/Gluteoplastia.png'
import LipoabdominoplastiaImg from './Assets/Img/LipoabdominoplastiaImg.png'
import Lipomarcacion from './Assets/Img/Lipomarcacion.png'
import Lipotransferencia from './Assets/Img/Lipotransferencia.png'
import Liposuccion from './Assets/Img/Liposuccion.png'
import Abdominoplastia from './Assets/Img/Abdominoplastia.png'

import './Assets/styles.css'
import { Link, useLocation } from 'react-router-dom'

const procedureCategory = [
  {id: 1, img: Gluteoplastia, name: 'Gluteoplastia'},
  {id: 2, img: LipoabdominoplastiaImg, name: 'Lipoabdominoplastia'},
  {id: 3, img: Lipomarcacion, name: 'Lipomarcación'},
  {id: 4, img: Lipotransferencia, name: 'Lipotransferencia'},
  {id: 5, img: Liposuccion, name: 'Liposución'},
  {id: 6, img: Abdominoplastia, name: 'Abdominoplastia'},
]

const ProcedureCategoryC = () => {
  const location = useLocation()
  const categoryId = location.pathname.split('/')[2]

  return (
    <div className='procedureCategoryC'>
      <div className='procedureCategoryC_header'>
        <div className='procedureCategoryC-header_img'>
          <div className='backGroudCategoryImg'/>
          <img src={CirugiaCorporalImg} alt="facial procedure" />
        </div>
        <div className='procedureCategoryC-header_text'>
          <h1>Cirugía Corporal</h1>
          <p>La cirugía plástica corporal ayuda a mejorar o corregir las imperfecciones que de cierta manera generan inseguridad y desconfianza en las personas.</p>
          <div className='procedureCategoryC-header_button'>
            <LinkScroll to='mainCategory' spy={true} smooth={true} offset={-120} duration={500}>
              ver más <span><ArrowDown2 size="32" color="#004274"/></span>
            </LinkScroll>
          </div>
        </div>
      </div>
      <div className='procedureCategoryC_main' id='mainCategory'>
        <div className='procedureCategoryC_main_'>
          <p>Con estos procedimientos se pueden mejorar las zonas deseadas por los pacientes mediante intervenciones en la zona superior e inferior del cuerpo y se pueden realizar en hombres y mujeres. Un cirujano plástico puede ayudar a que el paciente recupere la confianza y se sienta más atractivo consigo mismo en el ámbito social y profesional.</p>
          <div className='procedureCategoryC-main_elements'>
            {procedureCategory.map((category) => {
              return (
                <div key={category.id} className='category_img'>
                  <div className='backgroundImgCategory' />
                  <img src={category.img} alt={category.name} />
                  <div className='category-img_text'>
                    <h3>{category.name}</h3>
                    <div className='category-img-text_button'>
                      <Link to={`/procedure/${categoryId}/${category.id}`}>
                        <h2>más detalles</h2>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcedureCategoryC