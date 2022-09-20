import React, { useRef }  from 'react'
import TurismTopPrincipalImg from './Assets/Img/TurismTopPrincipalImg.jpeg'
import CatamaranImg from './Assets/Img/CatamaranImg.jpeg'
import HaciendaImg from './Assets/Img/HaciendaImg.jpeg'
import ValleImg from './Assets/Img/ValleImg.jpeg'
import CañoImg from './Assets/Img/CañoImg.jpeg'
import Logo from './Assets/Img/Logo.png'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import './Assets/styles.css'
//import axios from 'axios'
import { Link } from 'react-router-dom'

const activities = [
    {
        id: 1,
        img: CatamaranImg,
        title: 'catamaran islas del rosario',
        destiny: 'national'
    },    
    {
        id: 2,
        img: HaciendaImg,
        title: 'hacienda napoles',
        destiny: 'international'
    },
    {
        id: 3, 
        img: ValleImg,
        title: 'valle del cocora',
        destiny: 'national'
    },
    {
        id: 4, 
        img: CañoImg,
        title: 'caño cristales',
        destiny: 'national'
    },
    {
        id: 6,
        img: CatamaranImg,
        title: 'catamaran islas del rosario',
        destiny: 'national'
    },    
    {
        id: 7,
        img: HaciendaImg,
        title: 'hacienda napoles',
        destiny: 'national'
    },
    {
        id: 8, 
        img: ValleImg,
        title: 'valle del cocora',
        destiny: 'international'
    },
    {
        id: 9, 
        img: CañoImg,
        title: 'caño cristales',
        destiny: 'international'
    },
    {
        id: 2,
        img: HaciendaImg,
        title: 'hacienda napoles',
        destiny: 'international'
    },
    {
        id: 8, 
        img: ValleImg,
        title: 'valle del cocora',
        destiny: 'international'
    },
    {
        id: 9, 
        img: CañoImg,
        title: 'caño cristales',
        destiny: 'international'
    }
]

const MotionConstraints = styled(motion.div)`
  overflow-x: hidden;
`;

const MotionBox = styled(motion.div)`
  width: 500vw;
`

const TurismTop = () => {
    const constraintsRef = useRef()

    // const [topDestinities, setTopDestinities] = useState([])

    // const getTopDestinities = async () => {
    //     await axios.get(process.env.REACT_APP_URL_API_ALL_TOURS).then((response) => {
    //         setTopDestinities(response.data)
    //     }). catch ((err) => console.log(err))
    // }

    // useEffect(() => {
    //     getTopDestinities()
    // }, [])

  return (
    <div className='turismTop'>
        <div className='turismTop_principal'>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', top: 0, width: '100%', height: '100%', position: 'absolute', borderRadius: '20px' }} className='turismTop-principal_background'/>     
            <div className='turismTop-principal_img'>
                <img src={TurismTopPrincipalImg} alt="" />
            </div>
            <div className='turismTop-logo_img'><img src={Logo} alt="" /></div>
            <div className='turismTop-principal_text'>
                <h1>Los destinos <span>mas top</span> del mundo</h1>
            </div>
        </div>
        <MotionConstraints className='turismTop_cards' ref={constraintsRef}>
            <MotionBox className='turismTop-cards_slider' drag='x' dragConstraints={constraintsRef}>
            {
                activities.map((activity) => {
                    if (activity.country !== 'Colombia') {
                        return (
                            <div key={activity.id}>
                                <div className='international_activity'>
                                    <div className='international-activity_img'>
                                        <img src={activity.img} alt={activity.title} />
                                    </div>
                                    <div className='international-activity_title'>
                                        <Link to={`/tour/${activity.id}`} key={activity.id}>
                                            <h2>{activity.title}</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
            </MotionBox>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', width: '20px', height: '97%', position: 'absolute', top: 0,  right: -20, borderRadius: '30%', boxShadow: '-15px 0px 8px rgba(0, 0, 0, 0.5)' }} className='div_right'/>
        </MotionConstraints>
    </div>
  )
}

export default TurismTop