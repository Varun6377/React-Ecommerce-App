import React from 'react'
import { useLocation, useLoaderData, NavLink
, } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getProduct } from '../api.js'
import { addToCart } from '../redux/features/cartSlice.js'

export function loader({ params }) {
   return getProduct(params.id)
}

 function ProductsDetail() {
   
   const product = useLoaderData()
   const location = useLocation()
   
   const search = location.state?.search || "";
   const type = location.state?.type || "all";
   
   const dispatch = useDispatch()
  
   const addProduct = (product) => {
     dispatch(addToCart(product))
   }
      
    return (
      <>
      <div className='back-to-products'>
    <NavLink to='/products'>← Back To Products Page</NavLink>
      </div>
      <div key={product.id} className='details-page'>
       <img src={product.imageUrl} width={450}/>
        <h1>{product.name}</h1>
        
        <h1 className='details-price'>₹{product.price}</h1>
        <div className='add-to-cart'>
        <button 
         onClick={() => addProduct(product)}>
           Add to cart
        </button>
          </div>
        <div className='go-to-cart'>     
        <NavLink to='/cart' type="submit">--Go-To-Cart--</NavLink>
        </div>
     </div>
       </>
   )
  }
  
  export default ProductsDetail 