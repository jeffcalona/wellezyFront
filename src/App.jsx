import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Routes/Home/Home';
import Flights from './Routes/Flights/Flights';
import Procedures from './Routes/Procedures/Procedures';
import Doctors from './Routes/Doctors/Doctors';
//Redux
import { Provider } from 'react-redux';
import store from './store';

import "./app.css"

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/flights' element={<Flights />}/>
          <Route path='/procedures' element={<Procedures/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
        </Routes>
      </div>
    </Provider>
  )
}

export default App