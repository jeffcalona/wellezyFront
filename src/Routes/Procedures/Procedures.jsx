import React from 'react'
import { useSelector } from 'react-redux'
import Questions from '../../Components/Questions/Questions'

const  Procedures = () => {

  const { questionsList } = useSelector(state => state.questions)

  return (
    <div>
      <div style={{backgroundColor: '#B8DEDF', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>
        <h1>Procedures</h1>
        {
          questionsList.questions &&
          <Questions question={questionsList} /*clickQuestion={questionSelected}*/ />
        }
    </div>
    </div>
  )
}

export default  Procedures