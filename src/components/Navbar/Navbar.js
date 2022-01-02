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

const NavbarAuth = () => {
  return (
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/search'>Search</NavLink></li>
      <li><NavLink to='/recipe/add'>Add Recipe</NavLink></li>
      <li><NavLink to='/profile'>Profile</NavLink></li>
      <li><button>Signout</button></li>
    </ul>
  )
}


function Navbar() {
  return (
    <nav>
      <NavbarAuth />
    </nav>
  )
}

export default Navbar
