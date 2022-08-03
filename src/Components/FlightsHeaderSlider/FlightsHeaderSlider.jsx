import React, { useRef } from 'react'
import NewYorkImg from './Assets/Img/NewYorkImg.jpeg'
import SanAndresImg from './Assets/Img/SanAndresImg.jpeg'
import BaliImg from './Assets/Img/BaliImg.jpeg'
import './Assets/styles.css'

const sliderDate = [
    {id: 1, img: NewYorkImg, title: 'new york'},
    {id: 2, img: SanAndresImg, title: 'san andres'},
    {id: 3, img: BaliImg, title: 'bali'},
    {id: 4, img: NewYorkImg, title: 'new york'}
]

const FlightsHeaderSlider = () => {
    const autoCarousel = useRef(null)

    const backFunc = () => {

    }

    const nextFunc = () => {
        console.log(autoCarousel.current)
    }

  return (
    <div className='flightsHeaderSlider'>
        <div className='flightsHeaderSlider_' ref={autoCarousel}>
            {sliderDate.map((date) => {
                return(
                    <div key={date.id} className='flightsHeaderSlider_date'>
                        <div className='flightsHeaderSlider_img'>
                            <img src={date.img} alt={date.title} />
                        </div>
                        <div className='flightsHeaderSlider_title'>
                            <h2>{date.title}</h2>
                        </div>
                    </div>
                )
            })}
        </div>
        <div style={{ position: 'absolute', top: '100px', right: 0 }}>
            <button style={{ padding: '20px 40px', margin: '20px' }} onClick={backFunc}>atrás</button>
            <button style={{ padding: '20px 40px', margin: '20px' }} onClick={nextFunc}>siguiente</button>
        </div>
    </div>
  )
}

export default FlightsHeaderSlider