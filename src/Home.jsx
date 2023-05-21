import React from 'react';
import Navbar from './Share/Navbar';
import Slider from './Share/Slider';
import Service from './Share/Service';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='text-center text-3xl font-bold mt-5 text-red-600'>
                <h2 className=''>Everything you need <br /> Start....</h2>
            </div>
            <Slider></Slider>
            <Service></Service>
        </div>
    );
};

export default Home;