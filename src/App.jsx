import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Routes/Home/Home';
import Flights from './Routes/Flights/Flights';
import Procedures from './Routes/Procedures/Procedures';
import Doctors from './Routes/Doctors/Doctors';
import Doctor from './Routes/Doctor/Doctor';
import "./app.css"
import Nurses from './Routes/Nurses/Nurses';
import Nurse from './Routes/Nurse/Nurse';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import Turism from './Routes/Turism/Turism';
import Allies from './Routes/Allies/Allies';
import About from './Routes/About/About';
import Recovery from './Routes/Recovery/Recovery';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/flights' element={<Flights />}/>
          <Route path='/procedures' element={<Procedures/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/doctor/:id' element={<Doctor />} />
          <Route path='/nurse/:id' element={<Nurse />} />
          <Route path='/nurses' element={<Nurses />} />
          <Route path='/turism' element={<Turism />} />
          <Route path='/allies' element={<Allies />} />
          <Route path='/about' element={<About />} />
          <Route path='/recovery' element={<Recovery />} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App