import React from 'react'
import { Link } from 'react-router-dom'
import'./Header.css'
const Header = () => {
  return (
    <nav> 
   <Link to="/">Home</Link>
   <Link to="/review">Order Reveo</Link>
   <Link to="/grandap">Grandpa </Link>
   
   <Link to="/contact">Contact</Link>
     </nav>
  )
}

export default Header;
 