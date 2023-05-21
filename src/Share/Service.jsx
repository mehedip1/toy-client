import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';


const Service = ({service}) => {
    const [services, setServices] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    })
    return (
        <div>
            <section>
                <h2 className='text-center font-bold tex-5xl'>Recent toy relies</h2>
              <p>services:{services.length}</p>
              <div>
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