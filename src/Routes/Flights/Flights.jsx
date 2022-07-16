import React from 'react'
import { useSelector } from 'react-redux'
import Questions from '../../Components/Questions/Questions'

const  Flights = () => {

  const { questionsList } = useSelector(state => state.questions)

  return (
    <div style={{backgroundColor: '#00DEDF', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {
                questionsList.questions &&
                <Questions question={questionsList} /*clickQuestion={questionSelected}*/ />
        }
        <h1>Flights</h1>
    </div>
  )
}

export default  Flights