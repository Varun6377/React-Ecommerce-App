import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCart, delCart } from "../redux/action"
import { NavLink } from 'react-router-dom';
import "./Pages.css"
  
function Cart() {
  const state = useSelector((state)=> state.handleCart)
  const dispatch = useDispatch()

  const delProduct = (product) =>{
    dispatch(delCart(product))
}
  
  const addProduct = (product) => {
    dispatch(addCart(product))
}

const product = (product) =>{
return(

<div key={product.id} className='cart-details'>
  <img src={product.imageUrl} width={350}/>
  <h1 className='name'>{product.name}</h1>
  <h1 className='price'>₹{product.price}</h1>
  <div className='qty-buttons'>
  <button className="minus" onClick={()=> delProduct(product)} >
    <i >-</i></button>
   {product.qty}
   <button  className="plus" onClick={()=> addProduct(product)} >
   <i>+</i></button>
  </div>
  <p className='qty-price'> Total Amount : ₹{product.qty * product.price}</p>
  </div>
)  
}

const emptyCart = () => {
  return(
    <h1>Your Cart is Empty</h1>
  )
}

const button = () => {
  return (
<div className='checkout-cont'>  
<NavLink to="checkout" className='checkout'>Checkout</NavLink>
    </div>
  )
}

return(
  <>
  {state.length === 0 && emptyCart()}
  {state.length !== 0 && state.map(product)}
  {state.length !== 0 && button()}
  </>
)
}
export default Cart