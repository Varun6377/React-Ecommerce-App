import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, deleteFromCart, removeFromCart, emptyCart } from '../redux/features/cartSlice.js'
import { useEffect } from "react";
import { NavLink } from 'react-router-dom';


export default function Cart() {
  const {cart} = useSelector((state)=>state.allCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const dispatch = useDispatch()

  const addProduct = (product) => { 
    dispatch(addToCart(product))
   }

  const deleteProduct = (product) => {
    dispatch(deleteFromCart(product))
  }

  const removeProduct = (product) => { 
    dispatch(removeFromCart(product))
   }

   const clearCart = ()=>{
    dispatch(emptyCart())
}


function ProductsList() {

  return (
    <div>
  <button className='empty'
  onClick={() => clearCart()}>
Empty</button>
{
  cart.map((product)=>{
    return ( 
  <>
  <div key={product.id}  className='cart-details'>
<img src={product.imageUrl} width={300}/>
<h1 className='name'>{product.name}</h1>
<h1 className='price'>₹{product.price}</h1>
  
  <div className='qty-buttons'>
<button className="minus"
onClick={product.qty <=1 ?() =>deleteProduct(product.id) :()=> removeProduct(product)}>
<i>-</i></button>
<h3 className='pro-qty'>{product.qty}</h3>
<button className="plus"
onClick={()=> addProduct(product)}>
<i>+</i></button>    
</div>
<button className='del'
onClick={() => deleteProduct(product.id)}>
<i>Delete</i></button>

  <p className='qty-price'>
Total Amount : ₹{product.qty * product.price}
</p>  
</div> 
</>

)})}
   
 <div className='checkout-cont'>  
<NavLink to="checkout" className='checkout'>Checkout</NavLink>
  </div> 
  </div>
)

}

const initialCart = () => {
  return(
    <div className='cart'>
      <img src="https://i.ibb.co/m8YLngv/cart.jpg" />
       <h1>Your Cart is Empty</h1>
       <h2> Add some cool products</h2>
       <NavLink to="/products" className="do-it">Let's Do It</NavLink>
    </div>
  )
}

return(
  <>
  {cart.length === 0 ? initialCart() : ProductsList()}
  </>
)

}
  