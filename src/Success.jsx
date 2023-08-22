import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Success() {
  return (
    <div className='success'>
      <img src="https://i.ibb.co/2j18fXt/photo-1509017174183-0b7e0278f1ec.jpg" width={600}/>
       <p className='line-1'>Your Payment Is Successfull</p>
       <p className='line-2'>Thank you for your payment. An automated payment <br /> receipt will be sent to your email.</p>
   <NavLink to="/" className="back-to-home">Back To Home</NavLink>
       </div>
  )
}
