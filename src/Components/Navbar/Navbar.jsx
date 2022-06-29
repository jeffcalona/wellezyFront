import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";

import $ from 'jquery'

import "./Assets/styles.css"

import LogoWhite from "./Assets/Img/LogoWhite.png"
import { Global, HambergerMenu, Heart, ShoppingCart } from "iconsax-react";
import { IconButton } from '@mui/material';


const Navbar = () => {

  const [ dropdMenu, setDropdMenu] = useState(false)
  const activeDropMenu = () => setDropdMenu(!dropdMenu)

  const [ scrolls, setScrolls ] = useState(false)

  const aaa = () => {
    $(window).resize(function(){
      if($(window).width() > 1101){
        setDropdMenu(false)
      }
    })
  }
  useEffect(() => {
    aaa(false)
  }, [])



  /* Scroll function */
    var previousScroll = 0;
  $(window).scroll(function(event){
    var scroll = $(this).scrollTop();
    if (scroll > previousScroll && scroll > 50){
      setScrolls(true)
    } else {
      setScrolls(false)
    }
  });

 
 
  return (
    <div className='navbar'>
      <div className={scrolls ? 'bgcolor' : 'navbar_div'}>
        <div className='HambergerMenu'>
          <IconButton onClick={activeDropMenu}>
            <HambergerMenu size="32" color="white"/>
          </IconButton>
        </div>
        <div className='nav_logo'>
          <NavLink to="/">
            <img src={LogoWhite} alt="logo" className='logo' />
          </NavLink>
        </div>
        <div className={dropdMenu ? 'active_dropdMenu' : 'links'}>
          <ul>
            <li><NavLink to="/flights" className='navlinks'>Vuelos</NavLink></li>
            <li><NavLink to="/procedures" className='navlinks'>Procedimientos</NavLink></li>
            <li><NavLink to="/doctors" className='navlinks'>Doctores</NavLink></li>
            <li><NavLink to="/turismo" className='navlinks'>Turismo</NavLink></li>
            <li><NavLink to="/aliados" className='navlinks'>Aliados</NavLink></li>
            <li><NavLink to="/nosotros" className='navlinks'>Nosotros</NavLink></li>
          </ul>
        </div>
        <div className='icons-links'>
          <IconButton sx={{padding: '5px'}}>
            <NavLink to="/language" ><Global size="32" color="white"/></NavLink>
          </IconButton>
          <IconButton sx={{padding: '5px'}}>
            <NavLink to="/favorites" ><Heart size="32" color="white"/></NavLink>
          </IconButton>
          <IconButton sx={{padding: '5px'}}>
            <NavLink to="/shoppingCart" ><ShoppingCart size="32" color="white"/></NavLink>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Navbar