import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ToyCard = ({card}) => {
    const [cards , SetCard] = useState([]);
    useEffect(() =>{
      fetch('http://localhost:5000/cards')
      .then(res => res.json())
      .then(data => SetCard(data))
      .catch(error => console.log(error))
    },[])
    return (
        <div>
        <section>
       <div className='grid grid-cols-3 gap-5'>
        {
          cards.map(card => <div
          key={card.id}
          
          > <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
    <img src={card.img} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
    <h2 className="card-title">{card.name}</h2>
    <p>{card.title}</p>
    <p>{card.price}</p>
    <p>{card.rating}</p>
   
    <div className="card-actions">
    <Link to='/view'><button className="btn btn-primary">
    View</button></Link>
    </div>
     </div>
   </div>


          </div> )
        }
       </div>

        </section>
            
        </div>
    );
};

export default ToyCard;