import React from 'react'
import './Assets/styles.css'

const TourDetailParticipantsCard = ({ handleNumber, participantsSelecteds, participantsContinue, cardRef }) => {
  return (
    <div className='participants' ref={cardRef}>
        <div className='participants_'>
            <div className='participants_detail'>
                <div>
                    <p className='participants-detail_principarlP'>adultos</p>
                </div>
                <div className='participants-detail_buttons'>
                    <button className='participants-detail_button' disabled={participantsSelecteds.adult <= 1} onClick={() => handleNumber("adult", "decrease")}><p>-</p></button>
                    <div className='participants-detail_numButton'><p>{participantsSelecteds.adult}</p></div>
                    <button className='participants-detail_button' onClick={() => handleNumber("adult", "increase")}><p>+</p></button>
                </div>
            </div>
            <div className='participants_detail'>
                <div>
                    <p className='participants-detail_principarlP'>niños</p>
                    <p className='participants-detail_secundaryP'>2 a 11 años</p>
                </div>
                <div className='participants-detail_buttons'>
                    <button className='participants-detail_button' disabled={participantsSelecteds.boy <= 0} onClick={() => handleNumber("boy", "decrease")}><p>-</p></button>
                    <div className='participants-detail_numButton'><p>{participantsSelecteds.boy}</p></div>
                    <button className='participants-detail_button' onClick={() => handleNumber("boy", "increase")}><p>+</p></button>
                </div>
            </div>
            <div className='participants_detail'>
                <div>
                    <p className='participants-detail_principarlP'>bebés</p>
                    <p className='participants-detail_secundaryP'>0 a 23 meses</p>
                </div>
                <div className='participants-detail_buttons'>
                    <button className='participants-detail_button' disabled={participantsSelecteds.baby <= 0} onClick={() => handleNumber("baby", "decrease")}><p>-</p></button>
                    <div className='participants-detail_numButton'><p>{participantsSelecteds.baby}</p></div>
                    <button className='participants-detail_button' onClick={() => handleNumber("baby", "increase")}><p>+</p></button>
                </div>
            </div>
            <div className='participants_continue' onClick={participantsContinue}>
                <h2>continuar</h2>
            </div>
        </div>
    </div>
  )
}

export default TourDetailParticipantsCard