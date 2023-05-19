import React from 'react';
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'

const Slider = () => {
    return (
        <>
        <div className="carousel w-full h-[600px] mx-auto ms-2 me-2">
    <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full rounded-xl" />
    <div className="absolute text-center flex transform -translate-y-1/2 ms-5 px-5 top-2/4">
    {/* text added that */}
   <div className='text-5xl font-bold text-white'>
   <h2 >The Arrival of toys</h2>
    <p>You must Like it...</p>
    <div className='mt-5 ms-5'>
    <button className="btn btn-outline btn-primary w-1/3">Like</button>
    <button className="btn btn-outline btn-secondary ms-5 w-1/3">view</button>
    </div>
   </div>

  
     </div>
    <div className="absolute text-center flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
    {/* text added that */}

    <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
     </div>
      
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full rounded-xl" />
    <div className="absolute text-center flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
    {/* text added that */}

    <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
     </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full rounded-xl" />
    <div className="absolute text-center flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
    {/* text added that */}

    <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
     </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full rounded-xl" />
    <div className="absolute text-center flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
    {/* text added that */}

    <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
     </div>
  </div>
   </div>
            
        </>
    );
};

export default Slider;