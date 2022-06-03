import React from 'react'
import Header from '../../Components/Header/Header';
import HomeDoctors from '../../Components/HomeDoctors/HomeDoctors';
import HomeTurism from '../../Components/HomeTurism/HomeTurism'

import "./Assets/styles.css";

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <HomeTurism />
      <HomeDoctors /> 
    </div>
  )
}

export default Home