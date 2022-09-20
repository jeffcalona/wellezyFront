import { ShoppingCart } from 'iconsax-react'
import React, { useState } from 'react'
import TourDeatilPriceTimes from '../TourDeatilPriceTimes/TourDeatilPriceTimes'
import './Assets/styles.css'

const times = [
    {time: '8:45', price: 'adiciona $0', isSelec: true},
    {time: '9:00', price: 'adiciona $0', isSelec: false},
    {time: '10:20', price: 'adiciona $0', isSelec: false},
    {time: '10:45', price: 'adiciona $0', isSelec: false},
    {time: '11:00', price: 'adiciona $0', isSelec: false},
    {time: '13:50', price: 'adiciona $0', isSelec: false},
    {time: '14:00', price: 'adiciona $20', isSelec: false},
    {time: '15:00', price: 'adiciona $30', isSelec: false}
]

const TourDetailPrices = () => {

    const [searchTime, setSearchTime] = useState(false)

  return (
    <div className='tourDetailPrices'>
        <div className='tourDetailPrices_groupSize'>
            <h2>tamaño de grupo disponible</h2>
            <div className='tourDetailPrices-groupSize_button priceButton_active'>
                <div className='tourDetailPrices-groupSize_button_'>
                    <div className='tourDetailPrices-groupSize-button_description'>
                        <p>grupo privado</p>
                    </div>
                    <div className='tourDetailPrices-groupSize-button_price'>
                        <p>$250</p>
                    </div>
                </div>
            </div>
            <div className='tourDetailPrices-groupSize_button'>
                <div className='tourDetailPrices-groupSize_button_'>
                    <div className='tourDetailPrices-groupSize-button_description'>
                        <p>hasta 10 participantes</p>
                    </div>
                    <div className='tourDetailPrices-groupSize-button_price'>
                        <p>$150</p>
                    </div>
                </div>
            </div>
            <div className='tourDetailPrices-groupSize_button'>
                <div className='tourDetailPrices-groupSize_button_'>
                    <div className='tourDetailPrices-groupSize-button_description'>
                        <p>hasta 20 participantes</p>
                    </div>
                    <div className='tourDetailPrices-groupSize-button_price'>
                        <p>$100</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='tourDetailPrices_groupDuration'>
            <h2>horario de inicio disponible</h2>
            <div className='tourDetailPrices_groupDuration_' onClick={() => setSearchTime(!searchTime)}>
                <div className='tourDetailPrices_groupDuration__'>
                    <div className='tourDetailPrices-groupDuration_time'>
                        <p>8:45</p>
                    </div>
                    <div className='tourDetailPrices-groupDuration_price'>
                        <p>adicina $0</p>
                    </div>
                </div>
            </div>
            <div className='tourDetailPrices-groupDuration_card'>
                {searchTime && 
                    times.map((tim) => {
                        return (
                            <TourDeatilPriceTimes timeSelec={tim.isSelec} schedule={tim.time} price={tim.price} />
                        )
                    })
                }
            </div>
        </div>
        <div className='tourDetailPrices_addCart'>
            <h2>añadir</h2>
            <ShoppingCart size="25" color="white"/>
        </div>
    </div>
  )
}

export default TourDetailPrices