import React from 'react'
import { NavLink } from 'react-router-dom'


import Signout from '../Auth/Signout'

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

const NavbarAuth = ({ session }) => {
  return (
    <React.Fragment>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/search'>Search</NavLink></li>
        <li><NavLink to='/recipe/add'>Add Recipe</NavLink></li>
        <li><NavLink to='/profile'>Profile</NavLink></li>
        <li><Signout /></li>
      </ul>
      <h4>Welcome, {session.getCurrentUser.username}</h4>
    </React.Fragment>
  )
}


function Navbar({ session }) {
  return (
    <nav>
      {session && session.getCurrentUser ? (<NavbarAuth session={session} />) : (<NavbarUnAuth />)}
    </nav>
  )
}

export default Navbar
