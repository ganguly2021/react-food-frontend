import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarUnAuth = () => {
  return (
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/search'>Search</NavLink></li>
      <li><NavLink to='/signin'>Signin</NavLink></li>
      <li><NavLink to='/signup'>Signup</NavLink></li>
    </ul>
  )
}

function Navbar() {
  return (
    <nav>
      <NavbarUnAuth />
    </nav>
  )
}

export default Navbar
