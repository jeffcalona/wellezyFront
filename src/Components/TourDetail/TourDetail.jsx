import { ImageList, ImageListItem, Rating } from '@mui/material'
import { Aave, ArrowRight2, Calendar, CalendarTick, Flashy, Global, SearchNormal, Timer1, User } from 'iconsax-react'
import React, { useEffect, useRef, useState } from 'react'
import Img1 from './Assets/Img/Img1.jpeg'
import Img2 from './Assets/Img/Img2.jpeg'
import Img3 from './Assets/Img/Img3.jpeg'
import Img4 from './Assets/Img/Img4.jpeg'
import { Calendar as CalendarNew } from 'react-date-range'
import './Assets/styles.css'
import TourDetailParticipantsCard from '../TourDetailParticipantsCard/TourDetailParticipantsCard'
import TourDetailLanguageCard from '../TourDetailLanguageCard/TourDetailLanguageCard'
import TourDetailPrices from '../TourDetailPrices/TourDetailPrices'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const imgsResult = [
  {img: Img4, title: 'img1', rows: 2, cols: 4},
  {img: Img2, title: 'img2'},
  {img: Img1, title: 'img3'},
  {img: Img3, title: 'img4', cols: 2},
]
const imgSizes = ['408px', '200px', '200px', '200px']

const TourDetail = () => {
  const cardRef = useRef(null)

  const location = useLocation()
  const tourId = location.pathname.split("/")[2]

  const [dateSelec, setDateSelec] = useState(false)
  const [date, setDate] = useState(new Date())
  const [dateSelected, setDateSelected] = useState('fecha') 

  const [participants, setParticipants] = useState(false)
  const [participantsSelecteds, setParticipantsSelecteds] = useState({
    adult: 1,
    boy: 0,
    baby: 0
  })
  const [participantsSelectedsButton, setParticipantsSelectedsButton] = useState('participantes')

  const [languageSelec, setLanguageSelec] = useState(false)
  const [languages, setLanguages] = useState({
    spanish: true,
    english: false
  })
  const [languageSelecButton, setLanguageSelecButton] = useState('idioma')

  const [dataSelected, setDataSelected] = useState(false)

  const [tour, setTour] = useState({})

  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  const changeDate = (item) => {
    setDate(item)
    setDateSelected(item.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}))
    setDateSelec(false)
  }

  const handleNumber = (tipe, operation) => {
    setParticipantsSelecteds((prev) => {
      return {
        ...prev, [tipe]: operation === 'increase' ? participantsSelecteds[tipe] + 1 : participantsSelecteds[tipe] - 1
      }
    })
  }

  const participantsContinue = () => {
    const data = `${participantsSelecteds.adult} adul${participantsSelecteds.boy ? ` · ${participantsSelecteds.boy} niño` : ``} ${participantsSelecteds.baby ? ` · ${participantsSelecteds.baby} bebé` : ``}`
    setParticipantsSelectedsButton(data)
    setParticipants(false)
  }

  const spanishSelec = () => {
    setLanguages({
      spanish: true,
      english: false
    })
    setLanguageSelec(false)
    setLanguageSelecButton('español')
  }

  const englishSelec = () => {
    setLanguages({
      spanish: false,
      english: true
    })
    setLanguageSelec(false)
    setLanguageSelecButton('inglés')
  }

  useEffect(() => {
    const handler = (e) => {
        if(!cardRef?.current?.contains(e.target)){
          setDateSelec(false)
          setParticipants(false)
          setLanguageSelec(false)
        }
    }
    document.addEventListener('mousedown', handler)
    return () => {
        document.removeEventListener('mousedown', handler)
    }
  }, [])

  useEffect (() => {
    const getTour = async () => {
      await axios.get(process.env.REACT_APP_URL_API_ALL_TOUR+tourId).then((response) => {
        setTour(response.data)
      }).catch((err) => console.log(err))
    }
    getTour()
  }, [tourId])

  return (
    <div className='tourDetail'>
      <div className='tourDetail_stateDescription'>
        <p>{tour.country}</p>
        <ArrowRight2 size="15" color="rgba(0, 0, 0, 0.5)"/>
        <p>{tour.department}</p>
        <ArrowRight2 size="15" color="rgba(0, 0, 0, 0.5)"/>
        <p>{tour.municipality}</p>
      </div>
      <div className='tourDetail_headerText'>
        <h1>{tour.name_tour}</h1>
        <div className='tourDetail-headerText_stars'>
          <Rating name="size-large" value={tour.stars} size="medium"/>
          <p>12 Opiniones</p>
        </div>
      </div>
      <div className='tourDetails-header_imgs'>
        <ImageList
          sx={{ width: '100%', overflow: 'hidden'}}
          variant="quilted"
          cols={6}
          gap={8}
          >
          {imgsResult.map((item, index) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} style={{ height: `${imgSizes[index]}` }}>
              <img
                {...srcset(item.img, 120, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className='tourDetail_main'>
          <div className='tourDetail-main_description'>
            <div className='tourDetail-main_description_'>
              <div className='tourDetail-main_description_'>
                <p>{tour.description}</p>
              </div>
              <div className='tourDetail-main-description_generalInformation'>
                <h2>Información del tour</h2>
                <div className='tourDetail-main-description_generalInformation_'>
                  <div className='tourDetail-main-description-generalInformation_items'>
                    <div className='tourDetail-main-description-generalInformation_items_'>
                      <Timer1 size="30" color="#004274"/>
                      <p>Duracion</p>
                    </div>
                    <p className='tourDetail-main-description-generalInformation_itemInfo'>{tour.duration} horas</p>
                  </div>
                  <div className='tourDetail-main-description-generalInformation_items'>
                    <div className='tourDetail-main-description-generalInformation_items_'>
                      <Aave size="30" color="#004274"/>
                      <p>Idiomas</p>
                    </div>
                    <p className='tourDetail-main-description-generalInformation_itemInfo'>Español, inglés</p>
                  </div>
                  <div className='tourDetail-main-description-generalInformation_items'>
                    <div className='tourDetail-main-description-generalInformation_items_'>
                      <Flashy size="30" color="#004274"/>
                      <p>Entrada sin hacer sola en taquilla</p>
                    </div>
                  </div>
                  <div className='tourDetail-main-description-generalInformation_items'>
                    <div className='tourDetail-main-description-generalInformation_items_'>
                      <CalendarTick size="30" color="#004274"/>
                      <p>Cacelación gratuita</p>
                    </div>
                    <p className='tourDetail-main-description-generalInformation_itemInfo'>Cancela con hasta 24 horas de antelación y recibe un reembolso completo</p>
                  </div>
                </div>
              </div>
              <div className='tourDetail-main-description_info'>
                <h2>Información importante</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ratione officiis neque esse, animi accusantium, delectus qui est nobis, ea cupiditate accusamus culpa vero illum. Recusandae veniam voluptatem tenetur assumenda?</p>
              </div>
              <div className='tourDetail-main-description_info'>
                <h2>Que harás</h2>
                <ul>
                  <li>Lorem ipsum dolor, sit amet consectet</li>
                  <li> adipisicing elit. Soluta ra</li>
                  <li>Recusandae ve</li>
                  <li>t amet consectetur adipi</li>
                </ul>
              </div>
              <div className='tourDetail-main-description_info'>
                <h2>No apto para</h2>
                <ul>
                  <li>Lorem ipsum dolor, sit amet consectet</li>
                  <li> adipisicing elit. Soluta ra</li>
                  <li>Recusandae ve</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='tourDetail-main_prices'>
            <div className='tourDetail-main-prices_buttons'>
              <div className='tourDetail-main-prices_button' onClick={() => setDateSelec(!dateSelec)}>
                <h2>{dateSelected}</h2>
                <Calendar size="28" color="#004274"/>
              </div>
              {dateSelec &&
                <div className='tourDetail-main-prices-button_calendar' ref={cardRef}>
                  <CalendarNew editableDateInputs={true} date={date} onChange={changeDate} showPreview={false}/>
                </div>
              }
              <div className='tourDetail-main-prices_button' onClick={() => setParticipants(!participants)}>
                <h2>{participantsSelectedsButton}</h2>
                <User size="28" color="#004274"/>
              </div>
              {participants &&
                <TourDetailParticipantsCard handleNumber={handleNumber} participantsSelecteds={participantsSelecteds} participantsContinue={participantsContinue} cardRef={cardRef} />
              }
              <div className='tourDetail-main-prices_button' onClick={() => setLanguageSelec(!languageSelec)}>
                <h2>{languageSelecButton}</h2>
                <Global size="28" color="#004274"/>
              </div>
              {languageSelec &&
                <TourDetailLanguageCard languages={languages} spanishSelec={spanishSelec} englishSelec={englishSelec} cardRef={cardRef} />
              }
              <div className='tourDetail-main-prices-button_search' onClick={() => setDataSelected(!dataSelected)}>
                <h2>buscar</h2>
                <SearchNormal size="28" color="white"/>
              </div>
            </div>
            {dataSelected &&
              <TourDetailPrices />
            }
          </div>
      </div>
    </div>
  )
}

export default TourDetail