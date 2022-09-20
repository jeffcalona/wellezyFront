import React from 'react'
import { Link } from 'react-router-dom'
import CirugiaCorporalImg from './Assets/Img/CirugiaCorporalImg.jpg'
import CirugiaFacialImg from './Assets/Img/CirugiaFacialImg.png'
import CirugiaMamariaImg from './Assets/Img/CirugiaMamariaImg.png'
import TatamientoCapilarImg from './Assets/Img/TatamientoCapilarImg.jpeg'
import TratamientoFacialImg from './Assets/Img/TratamientoFacialImg.jpeg'
import TratamientoCorporalImg from './Assets/Img/TratamientoCorporalImg.jpeg'
import EsteticaVaginalImg from './Assets/Img/EsteticaVaginalImg.png'
import './Assets/styles.css'

const HomeProcedures = () => {
  return (
      <div className='homeProcedures'>
        <div className='homeProcedures_row1'>
            <div className='homeProcedures-row1_width30 margin_rightBottom'>
                <Link to='/procedures' className='procedureHome_info'>
                    <h1>elije el procedimiento adecuedo para ti</h1>
                    <p>En esta sección encontrarás información detallada sobre cada procedimiento de medicina estética, cirugía plástica, reconstructiva y medicina general con técnicas exclusivas realizadas por especialistas certificados y con tecnología avanzada.</p>
                </Link>
            </div>
            <div className='homeProcedures-row1_width35 margin_rightBottom cardMobile'>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                <div style={{ width: '100%', height: '100%' }}>
                    <img src={CirugiaMamariaImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                </div>
                <div className='homeProcedure-card_text'>
                    <h3>cirugías mamarias</h3>
                    <p>3 procedimientos</p>
                    <div className='homeProcedure_button'>
                        <Link to='/procedure/3'>más detalles</Link>
                    </div>
                </div>
            </div>
            <div className='homeProcedures-row1_width35 margin_bottom cardMobile'>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                <div style={{ width: '100%', height: '100%' }}>
                    <img src={CirugiaFacialImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
                </div>
                <div className='homeProcedure-card_text'>
                    <h3>cirugías faciales</h3>
                    <p>5 procedimientos</p>
                    <div className='homeProcedure_button'>
                        <Link to='/procedure/2'>más detalles</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='homeProcedures_row2'>
            <div className='homeProcedures-row2_width30 margin_right cardMobile'>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '103.4%', position: 'absolute', borderRadius: '20px' }} />
                <div style={{ width: '100%', height: '103.4%' }}>
                    <img src={CirugiaCorporalImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
                </div>
                <div className='homeProcedure-card_text'>
                    <h3>cirugía corporal</h3>
                    <p>6 procedimientos</p>
                    <div className='homeProcedure_button'>
                        <Link to='/procedure/1'>más detalles</Link>
                    </div>
                </div>
            </div>
            <div className='homeProcedures-row2_width35'>
                <div className='homeProcedures-row2_height60 margin_rightBottom cardMobile'>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src={EsteticaVaginalImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
                    </div>
                    <div className='homeProcedure-card_text'>
                        <h3>estética vaginal</h3>
                        <p>2 procedimientos</p>
                        <div className='homeProcedure_button'>
                            <Link to='/procedure/7'>más detalles</Link>
                        </div>
                    </div>
                </div>
                <div className='homeProcedures-row2_height40 margin_right cardMobile'>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src={TatamientoCapilarImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
                    </div>
                    <div className='homeProcedure-card_text'>
                        <h3>tratamientos capilares</h3>
                        <p>2 procedimientos</p>
                        <div className='homeProcedure_button'>
                            <Link to='/procedure/4'>más detalles</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='homeProcedures-row2_width35'>
                <div className='homeProcedures-row2_height60 margin_bottom cardMobile'>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src={TratamientoCorporalImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
                    </div>
                    <div className='homeProcedure-card_text'>
                        <h3>tratamientos corporales</h3>
                        <p>9 procedimientos</p>
                        <div className='homeProcedure_button'>
                            <Link to='/procedure/6'>más detalles</Link>
                        </div>
                    </div>
                </div>
                <div className='homeProcedures-row2_height40 cardMobile'>
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                    <div style={{ width: '100%', height: '100%' }}>
                        <img src={TratamientoFacialImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}/>
                    </div>
                    <div className='homeProcedure-card_text'>
                        <h3>tratamientos facieales</h3>
                        <p>6 procedimientos</p>
                        <div className='homeProcedure_button'>
                            <Link to='/procedure/5'>más detalles</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}
export default HomeProcedures