import React from 'react'
import { Link } from'react-router-dom'
import "./Pages.css"

function OpeningPage() {
  return (
    <div className='home-page'>
      <img src="https://i.ibb.co/0qJk5Pp/SKDY-Press-Image-scaled.jpg" />
      <div className='title'>SHARE THE SOUNDS OF SUMMER.</div>
      <div className='content'>With the versatility of
      Wireless Stereo and <br/> Skullcandy Multi-link 
      you can keep any <br/> party popping' off with 
      all-new Skullcandy <br/> wireless speakers.</div>
     <Link to='/products?type=Speakers'>Shop Speakers</Link>
     </div>
   
  )
}

export default OpeningPage