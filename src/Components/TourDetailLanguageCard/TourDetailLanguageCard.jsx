import { Record, RecordCircle } from 'iconsax-react'
import React from 'react'
import './Assets/styles.css'

const TourDetailLanguageCard = ({ languages, spanishSelec, englishSelec, cardRef }) => {
  return (
    <div className='languages' ref={cardRef}>
        <div className='languages_'>
            <div className='language'>
                <div onClick={spanishSelec}>
                    {languages.spanish ? 
                        <RecordCircle size="32" color="#004274" style={{ cursor: 'pointer' }}/>
                        :
                        <Record size="32" color="#004274" style={{ cursor: 'pointer' }}/>
                    }
                </div>
                <p>Español</p>
            </div>
            <div className='language'>
                <div onClick={englishSelec}>
                    {languages.english ? 
                        <RecordCircle size="32" color="#004274" style={{ cursor: 'pointer' }}/>
                        :
                        <Record size="32" color="#004274" style={{ cursor: 'pointer' }}/>
                    }
                </div>
                <p>Inglés</p>
            </div>
        </div>
    </div>
  )
}

export default TourDetailLanguageCard