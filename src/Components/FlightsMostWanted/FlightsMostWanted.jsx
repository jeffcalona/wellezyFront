import React, { useRef } from 'react'
import MaldivasImg from './Assets/Img/MaldivasImg.jpeg'
import CapadociaImg from './Assets/Img/CapadociaImg.jpeg'
import MostWantedImg from './Assets/Img/MostWantedImg.jpg'
import LogoImg from './Assets/Img/LogoImg.png'
import './Assets/styles.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const mostWantedData = [
    {id: 1, img: MaldivasImg, title: 'maldivas'},
    {id: 2, img: CapadociaImg, title: 'capadócia'},
    {id: 3, img: MaldivasImg, title: 'maldivas'},
    {id: 4, img: MaldivasImg, title: 'maldivas'},
    {id: 5, img: CapadociaImg, title: 'capadócia'},
    {id: 6, img: MaldivasImg, title: 'maldivas'}
]

const MotionConstraints = styled(motion.div)`
  overflow-x: hidden;
`;

const MotionBox = styled(motion.div)`
  width: 100vw;
`

const FlightsMostWanted = () => {
    const constraintsRef = useRef(null)

  return (
    <div className='flightsMostWanted'>
        <div className='flightsMostWanted_cards'>
            <div className='flightsMostWanted-cards_title'>
                <h2>Destinos más buscados</h2>
            </div>
            <MotionConstraints ref={constraintsRef}>
                <MotionBox className='flightsMostWanted_cards_' drag='x' dragConstraints={constraintsRef}>
                    {mostWantedData.map((data) => {
                        return (
                            <motion.div key={data.id} className='flightsMostWanted_data'>
                                <div className='flightsMostWanted-data_backgroud' />
                                <div className='flightsMostWanted_img'>
                                    <img src={data.img} alt={data.title} />
                                </div>
                                <div className='flightsMostWanted_title'>
                                    <h2>{data.title}</h2>
                                </div>
                                <div className='flightsMostWanted_link'>
                                    <Link to='vermas'>Ver más</Link>
                                </div>
                            </motion.div>
                        )
                    })}
                </MotionBox>
            </MotionConstraints>
        </div>
        <div className='flightsMostWanted_principalImg'>
            <div className='flightsMostWanted-principalImg_img'>
                <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} />
                <img src={MostWantedImg} alt="Estás a un Click" />
            </div>
            <div className='flightsMostWanted-principalImg_info'>
                <div className='principalImg-info_logo'>
                    <img src={LogoImg} alt="Wellezy" />
                </div>
                <div className='principalImg-info_text'>
                    <h1>estas a un <span>click</span> del destino de tus sueños</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlightsMostWanted