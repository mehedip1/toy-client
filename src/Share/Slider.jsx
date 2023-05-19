import React from 'react';
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'

const Slider = () => {
    return (
        <>
       <section className='grid grid-cols-2'>
       <div>
        <h2 className='text-5xl font-bold text center'>Hello I am here</h2>
       </div>
      
       <div className="h-96 carousel carousel-vertical rounded-box">
      <div className="carousel-item h-full">
    <img src={img1}/>
     </div> 
    <div className="carousel-item h-full">
    <img src={img2} />
  </div> 
  <div className="carousel-item h-full">
    <img src={img3} />
  </div> 
     <div className="carousel-item h-full">
    <img src={img4} />
     </div> 
     <div className="carousel-item h-full">
    <img src={img5} />
     </div> 
    <div className="carousel-item h-full">
    <img src={img1} />
     </div> 
    <div className="carousel-item h-full">
    <img src={img2} />
     </div>
     </div>

        </section>
  
            
        </>
    );
};

export default Slider;