import React from 'react';
import "./Pages.css"
import { Link } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';

function OpeningPage() {
return (
<>
<Carousel>
      <Carousel.Item>
      <img 
        src="https://i.ibb.co/0qJk5Pp/SKDY-Press-Image-scaled.jpg"
         width={1280} height={630}
         />
        <Carousel.Caption>
        <div className='slide-1'>
        <div className='title'>SHARE THE SOUNDS
        <br/> OF SUMMER.</div>
           <Link to='/products?type=Speakers'>Shop Speakers</Link>
     </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
          src="https://i.ibb.co/7y0qKwG/317d2a6f-b698-4f06-9b34-2c38f709ea89-a47853949748444c22bf451afd705502.webp"
          width={1280} height={630}
         />
        <Carousel.Caption>
          <div className='slide-2'>
          <div className='content'>
          With the versatility of
      Wireless Stereo and <br/> Skullcandy Multi-link 
      you can keep any <br/> party popping' off with 
      all-new Skullcandy <br/> wireless speakers.
      </div >
             <Link to='/products?type=Speakers'>Shop Speakers</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img 
          src="https://i.ibb.co/sjs0nYQ/81-S9-JPU6-EEL-AC-UF894-1000-QL80.jpg"
          width={1280} height={630}
          />
        <Carousel.Caption>
          <div className='slide-3'>
            <Link to='/products?type=Speakers'>Shop Speakers</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</>
)
}

export default OpeningPage

/*<div className='home-page'>
      <img src="https://i.ibb.co/0qJk5Pp/SKDY-Press-Image-scaled.jpg" />
      <div className='title'>SHARE THE SOUNDS OF SUMMER.</div>
      <div className='content'>With the versatility of
      Wireless Stereo and <br/> Skullcandy Multi-link 
      you can keep any <br/> party popping' off with 
      all-new Skullcandy <br/> wireless speakers.</div>
     <Link to='/products?type=Speakers'>Shop Speakers</Link>
   </div>
   
    <img 
        src="https://i.ibb.co/0qJk5Pp/SKDY-Press-Image-scaled.jpg"
         width={1280} height={630}
         />
 <img 
          src="https://i.ibb.co/sjs0nYQ/81-S9-JPU6-EEL-AC-UF894-1000-QL80.jpg"
          width={1280} height={630}
         />
<img 
          src="https://i.ibb.co/7y0qKwG/317d2a6f-b698-4f06-9b34-2c38f709ea89-a47853949748444c22bf451afd705502.webp"
          width={1280} height={630}
          />
   
   */