import React from 'react'
import { NavLink } from "react-router-dom";

import "./Assets/styles.css"
//import useStyles from './styles.js'

import LogoWhite from "./Assets/Img/LogoWhite.png"
import { Global, Heart, ShoppingCart } from "iconsax-react";

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className='nav_logo'>
        <NavLink to="/">
          <img src={LogoWhite} alt="logo" className='logo' />
        </NavLink>
      </div>
      <div className='links'>
        <NavLink to="/flights" className='navlinks'>Vuelos</NavLink>
        <NavLink to="/procedures" className='navlinks'>Procedimientos</NavLink>
        <NavLink to="/doctors" className='navlinks'>Doctores</NavLink>
        <NavLink to="/turismo" className='navlinks'>Turismo</NavLink>
        <NavLink to="/aliados" className='navlinks'>Aliados</NavLink>
        <NavLink to="/nosotros" className='navlinks'>Nosotros</NavLink>
      </div>
      <div className='icons-links'>
        <NavLink to="/language" ><Global size="32" color="white"/></NavLink>
        <NavLink to="/favorites" ><Heart size="32" color="white"/></NavLink>
        <NavLink to="/shoppingCart" ><ShoppingCart size="32" color="white"/></NavLink>
      </div>
    </div>
  )
}

export default Navbar