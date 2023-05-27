import React from 'react';
import Update from "./Update";
import { useState, useEffect } from 'react';

const Details = () => {

    const [details, setDetails] = useState([]);

    useEffect(()=> {
      fetch('http://localhost:5000/details')
      .then(res => res.json())
      .then(data => setDetails(data))
    },[])
    return (
        <div>
            {
                
        details.map(detail => <Update
        
        key={detail.id}
        detail={detail}
        >
        </Update>)
      
            }
        </div>
    );
};

export default Details;