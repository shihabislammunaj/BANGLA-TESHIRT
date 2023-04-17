import React, { useState } from 'react'
import'./Home.css'
import { useLoaderData } from 'react-router-dom'
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const teshirts =useLoaderData();
    const [cart , setCart]=useState([]);
    const handleAddToCart = tshirt => {
        const exists =cart.find(ts => ts._id === tshirt._id)
       if(exists){
          toast('You Have Already Added this t-shirt')
       }
       else{
        const newCart  =[...cart,tshirt];
        setCart(newCart);
       }
    
    }
    const handleRemoveFromCart = id => {
       const remaining =cart.filter(ts => ts._id !==id);
      setCart(remaining)
    }
  return (
    <div className='home-container'>
        {/* <h2>This is Home!!:{teshirts.length}</h2> */}
   <div className='t-shirts-container'>
   {
        teshirts.map(tshirt=> <TShirt
        key={tshirt._id}
        tshirt={tshirt}
        handleAddToCart={handleAddToCart}
    
        ></TShirt> )
      }
   </div>
   <div className="cart-conatainer">
    <Cart
     cart={cart}
     handleRemoveFromCart={handleRemoveFromCart}
   ></Cart>
   </div>
    </div>
  )
}

export default Home;