import Slider from './Share/Slider';
import Service from './Share/Service';
import Category from './Share/Category';

const Home = () => {
    return (
        <div>
            <div className='text-center text-3xl font-bold mt-5 text-red-600'>
                <h2 className=''>Everything you need <br /> Start....</h2>
            </div>
            <Slider></Slider>
            <Service></Service>
            <Category></Category>
        </div>
    );
};

export default Home;