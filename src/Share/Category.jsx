import React from 'react';
import './Category.css'
import Tabs from '../Tabs';


const Category = () => {
  

    return (
        <div className='mt-5'>
           <h2 className='text-5xl font-bold text-center'>Some Category items </h2>
         <section className='mt-5'>
          <Tabs></Tabs>
         </section>     
        
        </div>
    );
};

export default Category;
