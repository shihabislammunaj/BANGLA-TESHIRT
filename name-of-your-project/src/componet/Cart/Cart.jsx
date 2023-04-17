import React from 'react'
import'./Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
  let message;
  if(cart.length === 0){
    message=<p>Place Some Products</p>
  }
  else{
    message = <div>
      <h3>Broloxx</h3>
      <p><small>thianks fon given fon maney</small></p>
    </div>
  }
  return (
    <div className='sumary'>
       <h2 className={cart.length === 1 ? 'blur' : 'yellow' }>Order sumary:{cart.length}</h2>
    <p className={`bold bordered ${cart.length===3?'blue' :'purple'}`}>something</p>
    { cart.length >2 ?
     <span className='purple'>Aro Kino :</span> :
      <span>Fokera</span>}
       {message}
       {
        cart.map(tehirt => <p
           key={tehirt._id}
           > {tehirt.name} 
           <button 
           onClick={()=> handleRemoveFromCart(tehirt._id)}
           >X</button></p>)
       }
       {
        cart.length ===2 && <p>Doble Bonaza !!!</p>
       }
       {
        cart.length ===!3 || <h3>Tinta To Hilo Na !!</h3>
       }
    </div>
  )
}

export default Cart
