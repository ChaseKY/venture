import React from 'react';
import { NavLink } from "react-router-dom";


function Navbar(props) {
  
  return (
    <>
      <nav className="navbar" id="topNav">
        <NavLink to='/hikes' activeClassName="selected-tab" className="nav-link"><span className="tab-title">Explore</span></NavLink>
        <NavLink to='/about' activeClassName="selected-tab" className="nav-link"><span className="tab-title">About</span></NavLink>
        <NavLink to='/' className="nav-link"><span className="app-title">Trail</span><i id="hiker-icon" className="fas fa-hiking"></i><span className="app-title">sta</span></NavLink>
      
      </nav>
    </>
  )
}

export default Navbar;