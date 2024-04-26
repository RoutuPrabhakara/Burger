import React, { useState } from 'react'
import './Style.css'
import Pickup from '../popup/Pickup'
function Nav() {
  
  return (
    <div>
     <div id="Container">
    <nav>
    <a href="/">  <img src="https://www.uengage.in/images/addo/logos/logo-29124-1691133884.jpeg" alt="" /></a>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/store">Store Locatar</a></li>
      <li><a href="/Order">Order Now</a></li>
      <li><a href="/frachise">Frachise Enquery</a></li>
      <li><a href="/jobs">Jobs & carrer</a></li>
      <li><a href="/readmore">About</a></li>
   </ul>
    </nav>
 
     </div>
   
    </div>
  )
}

export default Nav