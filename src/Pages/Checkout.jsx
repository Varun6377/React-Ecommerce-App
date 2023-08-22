import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'



const Checkout = () => {
  const state = useSelector((state)=> state.handleCart)

  var total = 0

  const itemList = (product) => {
      total = total + product.price * product.qty

      return (
             <>
            <div key={product.id} className='checkout-details'>
                  <h6 className='checkout-name'>{product.name}</h6>
                  <span>{product.qty} x ₹{product.price}</span>
            </div>
             </>   
          )
    }

return(
  <>
   <div className="back-to-shop">
     <NavLink to='/products' type="submit" >Back Shopping</NavLink>
          </div>
<div className='checkout-total'>
<h1 className='ord-sum'>Order summary</h1>
{state.map(itemList)}
<span className='total'>Total Amount : </span>₹{total}
<br></br>
<div className='pay-now'>
<NavLink to="/success">Pay Now</NavLink>
</div>
</div>0
  </>
          )                
    }

export default Checkout;
                        
                