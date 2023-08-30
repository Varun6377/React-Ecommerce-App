import React from 'react'
import { Link } from 'react-router-dom'

export default function Redirect() {
  return (
    <div className='redirect'>
      <img src="https://i.ibb.co/Z8nKhgs/63-631239-login-png-login-icon-png-transparent-png.jpg" width={250}/>
      <h1>You must log in first.</h1>
      <Link to="login" className='redirect-login'>Login</Link>
    </div>
  )
}
