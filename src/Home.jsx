import Slider from './Share/Slider';
import Service from './Share/Service';
import Category from './Share/Category';

const Home = () => {
    return (
        <div>
            <div className='text-center text-3xl font-bold mt-5 text-red-600'>
            <h2 className='text-green-500'>Everything you need Start....</h2>
            </div>
            <div className='mt-5 p-5'>
            <Slider></Slider>
            <Service></Service>
            <Category></Category>
            </div>
        </div>
    );
};

export default Home;