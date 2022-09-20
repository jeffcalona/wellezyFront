import { Record, RecordCircle } from 'iconsax-react'
import React from 'react'
import './Assets/styles.css'

const TourDeatilPriceTimes = ({ timeSelec, schedule, price }) => {
  return (
    <div className='tourDeatilPriceTimes'>
        <div className='tourDeatilPriceTimes_'>
            <div className='tourDeatilPriceTimes_time'>
                {timeSelec === true ? 
                    <RecordCircle size="32" color="#004274"/>
                    :
                    <Record size="32" color="#004274"/>
                }
                <p>{schedule}</p>
            </div>
            <div className='tourDeatilPriceTimes_price'>
                <p>{price}</p>
            </div>
        </div>
    </div>
  )
}

export default TourDeatilPriceTimes