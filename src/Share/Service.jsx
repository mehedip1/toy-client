import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';


const Service = ({service}) => {
    const [services, setServices] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    })
    return (
        <div className='mt-5'>
            <section className='mt-5 mx-auto'>
            <h2 className='text-center font-bold text-5xl'>New Toy</h2>
            <div className='mx-auto ms-5 grid grid-cols-2 gap-5 mt-5'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
              </div>
               
            </section>
        </div>
    );
};

export default Service;