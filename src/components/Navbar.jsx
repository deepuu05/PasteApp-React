import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div id='navbar'>
        
      <NavLink className={({ isActive }) => isActive ? "active-link" : "nav-link"}
 to='/'>Home</NavLink>
      <NavLink className={({ isActive }) => isActive ? "active-link" : "nav-link"}
 to='/pastes'>Paste</NavLink>

    </div>
  )
}

export default Navbar
