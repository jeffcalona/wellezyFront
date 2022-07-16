import React from 'react'
import Header from '../../Components/Header/Header';
import HomeDoctors from '../../Components/HomeDoctors/HomeDoctors';
import HomeProcedures from '../../Components/HomeProcedures/HomeProcedures';
import HomeServices from '../../Components/HomeServices/HomeServices';
import HomeTurism from '../../Components/HomeTurism/HomeTurism'


import "./Assets/styles.css";

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <HomeTurism />
      <HomeDoctors />
      <HomeServices />
      <HomeProcedures />
    </div>
  )
}

export default Home