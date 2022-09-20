import React, { useEffect, useRef } from 'react'
import NewYorkImg from './Assets/Img/NewYorkImg.jpeg'
import SanAndresImg from './Assets/Img/SanAndresImg.jpeg'
import BaliImg from './Assets/Img/BaliImg.jpeg'
import './Assets/styles.css'

const sliderDate = [
    {id: 1, img: NewYorkImg, title: 'new york'},
    {id: 2, img: SanAndresImg, title: 'san andres'},
    {id: 3, img: BaliImg, title: 'bali'},
    {id: 4, img: NewYorkImg, title: 'new york'},
    {id: 5, img: SanAndresImg, title: 'san andres'},
    {id: 6, img: BaliImg, title: 'bali'},
]

const FlightsHeaderSlider = () => {
    const autoCarousel = useRef(null)


    const nextFunc = () => {
        if(autoCarousel.current.children.length > 0) {
           const firstCard = autoCarousel.current.children[0]

           autoCarousel.current.style.transition = `300ms ease-out all`
           const widthCard = autoCarousel.current.children[0].offsetWidth
           autoCarousel.current.style.transform = `translateX(-${widthCard}px)`

           const transition = () => {
               autoCarousel.current.style.transition = 'none'
               autoCarousel.current.style.transform = `translateX(0)`

               autoCarousel.current.appendChild(firstCard)

               /*Después que se ejecute lo elimino para que el boton de anterior funcione*/
               autoCarousel.current.removeEventListener('transitionend', transition)
           }

           autoCarousel.current.addEventListener('transitionend', transition)
        }
    }

    useEffect(() => {
        setInterval(() => {
            nextFunc()
        }, 5000)
    }, [])

  return (
    <div className='flightsHeaderSlider'>
        <div className='flightsHeaderSlider_'>
            <div className='flightsHeaderSlide_cards' ref={autoCarousel}>
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
    </div>
  )
}

export default FlightsHeaderSlider