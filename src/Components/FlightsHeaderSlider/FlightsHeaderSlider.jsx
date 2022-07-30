import React from 'react'
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
  return (
    <div className='flightsHeaderSlider'>
        <div className='flightsHeaderSlider_'>
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
    </div>
  )
}

export default FlightsHeaderSlider