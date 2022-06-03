import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Routes/Home/Home';

import "./app.css"
import Flights from './Routes/Flights/Flights';
import Procedures from './Routes/Procedures/Procedures';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Flights' element={<Flights />}/>
        <Route path='/Procedures' element={<Procedures/>}/>
      </Routes>
    </div>
  )
}

export default App