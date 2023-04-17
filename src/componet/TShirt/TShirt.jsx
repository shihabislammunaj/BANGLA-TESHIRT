import React from 'react'
import './TShirt.css'
const TShirt = ({tshirt, handleAddToCart}) => {

    const {picture,name,price}=tshirt;
  return (
    <div className='t-shrit'>
      <img src={picture} alt="" />
      <h4>Name:{name}</h4>
      <p>Price:${price}</p>
      <button onClick={ ()=>handleAddToCart(tshirt)}>Bey-Now</button>
    </div>
  )
}

export default TShirt