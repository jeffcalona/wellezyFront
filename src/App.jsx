import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Routes/Home/Home';
import Flights from './Routes/Flights/Flights';
import Procedures from './Routes/Procedures/Procedures';
import Doctors from './Routes/Doctors/Doctors';
import Doctor from './Routes/Doctor/Doctor';
import Nurses from './Routes/Nurses/Nurses';
import Nurse from './Routes/Nurse/Nurse';
import Turism from './Routes/Turism/Turism';
import Allies from './Routes/Allies/Allies';
import About from './Routes/About/About';
import Recovery from './Routes/Recovery/Recovery';
import Footer from './Components/Footer/Footer';
import Tour from './Routes/Tour/Tour';
import FlightSelected from './Routes/FlightSelected/FlightSelected';
import ProcedureCategoryDetails from './Routes/ProcedureCategoryDetails/ProcedureCategoryDetails';
import ProcedureCategory from './Routes/ProcedureCategory/ProcedureCategory';
import Form from './Routes/Form/Form';
import "./app.css"

//Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/flights' element={<Flights />}/>
          <Route path='/flight/selected' element={<FlightSelected />}/>
          <Route path='/procedures' element={<Procedures/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/doctor/:id' element={<Doctor />} />
          <Route path='/nurse/:id' element={<Nurse />} />
          <Route path='/nurses' element={<Nurses />} />
          <Route path='/turism' element={<Turism />} />
          <Route path='/allies' element={<Allies />} />
          <Route path='/about' element={<About />} />
          <Route path='/recovery' element={<Recovery />} />
          <Route path='/tour/:id' element={<Tour />}/>
          <Route path='/procedure/:id' element={<ProcedureCategory />}/>
          <Route path='/procedure/:id/:id' element={<ProcedureCategoryDetails />}/>
          <Route path='/form' element={<Form />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  )
}

export default App