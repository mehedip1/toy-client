import React from 'react';
import img2 from '../assets/images/img2.jpg'

const View = () => {
   
    return (
        <div>
            <section className='grid grid-cols-2 border-4 rounded mt-3 bg-black'>
            <img className='w-96 mx-auto' src={img2} alt="" />
            <div className='text-white mt-3'>
              <h2>Name: Thons</h2>
              <p>Price: $15</p>
              <p>About : Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, autem ad minus quos asperiores doloremque earum magnam impedit numquam molestias! Veritatis atque hic tempora porro sed quisquam ut, quam iusto!</p>
            </div>

            </section>
             </div>


            
       
    );
};

export default View;