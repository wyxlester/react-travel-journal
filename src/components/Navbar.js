import React from 'react'
import Globe from '../images/globe.png'

const Navbar = () => {
  return (
    <nav class="d-flex">
      <img src={Globe} alt="globe" class="nav--logo"/>
      <span class="nav--brand">My Travels</span>
    </nav>
  )
}

export default Navbar
