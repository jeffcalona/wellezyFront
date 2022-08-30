import { Timer1 } from 'iconsax-react'
import React from 'react'
import Bichectomia from './Assets/Img/Bichectomia.png'
import Lipopapada from './Assets/Img/Lipopapada.png'
import Otoplastia from './Assets/Img/Otoplastia.png'
import Blefaroplastia from './Assets/Img/Blefaroplastia.png'
import './Assets/styles.css'

const ProcedureCategoryDetailsMain = () => {
  return (
    <div className='procedureCategoryDetailsMain'>
        <div className='procedureCategoryDetailsMain_one' id='scrollOne'>
            <div className='procedureCategoryDetailsMain-one_text'>
                <div className='procedureCategoryDetailsMain-one-text_procedure'>
                    <div>
                        <h2>procedimiento</h2>
                    </div>
                    <div className='procedureCategoryDetailsMain-one-text-procedure_description'>
                        <p>la Bichectomia es una técnica que se realiza por medio de una intervención quirúrgica mínimamente invasiva; consiste en retirar las bolas de bichat (cúmulos de grasa que se acumulan en las mejillas y no cumplen ninguna función importante en la persona, solo dar volumen a la mejilla; dependiendo el tamaño del contorno facial de cada persona).</p>
                    </div>
                </div>
                <div className='procedureCategoryDetailsMain-one_time'>
                    <div>
                        <h2>duración</h2>
                    </div>
                    <div className='procedureCategoryDetailsMain-one-time_description'>
                        <p><span style={{ display: 'flex', marginRight: '10px' }}><Timer1 size="32" color="black"/></span> 40 / 50 min</p>
                    </div>
                </div>
            </div>
            <div className='procedureCategoryDetailsMain-one_img'>
                <img src={Bichectomia} alt="bichectomia" />
            </div>
        </div>
        <div className='procedureCategoryDetailsMain_two'>
            <div className='procedureCategoryDetailsMain-two_anesthesia'>
                <div style={{ width: '100%', height: '212px', backgroundColor: 'rgba(0, 0, 0, .3)', position: 'absolute', top: 0 }}/>
                <div className='procedureCategoryDetailsMain-two-anesthesia_img'>
                    <img src={Lipopapada} alt="" />
                </div>
                <div className='procedureCategoryDetailsMain-two-anesthesia_text'>
                    <div className='procedureCategoryDetailsMain-two-anesthesia_text_'>
                        <div className='procedureCategoryDetailsMain-two-anesthesia-text_title'>
                            <h2>Anestecia</h2>
                        </div>
                        <div className='procedureCategoryDetailsMain-two-anesthesia-text_description'>
                            <p>Puede utilizarse anestesia general, así como anestesia local combinada con sedación endovenosa.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='procedureCategoryDetailsMain-two_effects'>
                <div className='procedureCategoryDetailsMain-two-effects_title'>
                    <h2><span>posibles</span>efectos secundarios</h2>
                </div>
                <div className='procedureCategoryDetailsMain-two-effects_description'>
                    <p>pequeña inflación - ligero hematoma</p>
                </div>
            </div>
        </div>
        <div className='procedureCategoryDetailsMain_three'>
            <div className='procedureCategoryDetailsMain-three_results'>
                <div className='procedureCategoryDetailsMain-three-results_text'>
                    <div className='procedureCategoryDetailsMain-three-results-text_title'>
                        <h2>Resultados</h2>
                    </div>
                    <div className='procedureCategoryDetailsMain-three-results-text_description'>
                        <p>permanentes, ya que dicha grasa no vuelve aparecer.</p>
                    </div>
                </div>
                <div className='procedureCategoryDetailsMain-three-results_imgs'>
                    <div className='procedureCategoryDetailsMain-three-results_img'>
                        <img src={Otoplastia} alt="" />
                    </div>
                    <div className='procedureCategoryDetailsMain-three-results_img'>
                        <img src={Blefaroplastia} alt="" />
                    </div>
                    <div className='procedureCategoryDetailsMain-three-results_img'>
                        <img src={Bichectomia} alt="" />
                    </div>
                </div>
            </div>
            <div className='procedureCategoryDetailsMain-three_recuperation'>
                <div className='procedureCategoryDetailsMain-three-recuperation_title'>
                    <h2>Recuperación</h2>
                </div>
                <div className='procedureCategoryDetailsMain-three-recuperation_description'>
                    <ul>
                        <li>No necesita de una incapacidad extensa.</li>
                        <li>Seguir las indicaciones del médico.</li>
                        <li>Ingerir alimentos blandos durante una semana, como cremas</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProcedureCategoryDetailsMain