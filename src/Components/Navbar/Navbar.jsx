import React, { useEffect, useState } from 'react'
import LogoWhite from "./Assets/Img/LogoWhite.png"
import { ArrowDown2, ArrowUp2, Global, HambergerMenu, Heart, ShoppingCart } from "iconsax-react";
import { IconButton } from '@mui/material';
import ProceduresDropdown from '../ProceduresDropdown/ProceduresDropdown';
import { NavLink } from "react-router-dom";
import $ from 'jquery'

import "./Assets/styles.css"


const Navbar = () => {

  const [ dropdMenu, setDropdMenu] = useState(false)

  const [ scrolls, setScrolls ] = useState(false)

  const [proceduresDropdown, setProceduresDropdown] = useState(false)

  const burgerMenu = () => {
    $(window).resize(function(){
      if($(window).width() > 1101){
        setDropdMenu(false)
      } 
    })
  }

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

  useEffect(() => {
    burgerMenu(false)
  }, [])
 
  return (
    <div className='navbar'>
      <div className={scrolls ? 'bgcolor' : 'navbar_div'}>
        <div className='HambergerMenu'>
          <IconButton onClick={() => setDropdMenu(!dropdMenu)}>
            <HambergerMenu size="32" color="white"/>
          </IconButton>
        </div>
        <div className='nav_logo'>
          <NavLink to="/" onClick={() => setDropdMenu(false)}>
            <img src={LogoWhite} alt="logo" className='logo' />
          </NavLink>
        </div>
        <div className={dropdMenu ? 'active_dropdMenu' : 'links'}>
          <ul>
            <li><NavLink to="/flights" className='navlinks' onClick={() => setDropdMenu(false)} >Vuelos</NavLink></li>
            <li>
              <div className={proceduresDropdown ? 'proceduresDropdown_open' : 'proceduresDropdown'} onClick={() => setProceduresDropdown(!proceduresDropdown)}>
                <p>
                  Procedimientos
                </p>
                  {
                    proceduresDropdown ? <ArrowUp2 size="25" className='proceduresDropdown_arrowDownOn'/>
                    :
                    <ArrowDown2 size="25" color='white' style={{ marginLeft: '20px' }}/>
                  }
              </div>
            </li>
            {proceduresDropdown &&
              <ProceduresDropdown dropdMenu={dropdMenu} lickCategoryClicked={() => setProceduresDropdown(false)} ClickedCategory={() => setProceduresDropdown(false)} />
            }
            <li><NavLink to="/doctors" className='navlinks' onClick={() => setDropdMenu(false)} >Doctores</NavLink></li>
            <li><NavLink to="/turism" className='navlinks' onClick={() => setDropdMenu(false)} >Turismo</NavLink></li>
            <li><NavLink to="/allies" className='navlinks' onClick={() => setDropdMenu(false)} >Aliados</NavLink></li>
            <li><NavLink to="/about" className='navlinks' onClick={() => setDropdMenu(false)} >Nosotros</NavLink></li>
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