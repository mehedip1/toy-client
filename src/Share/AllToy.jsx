import { useEffect, useState } from "react";
import AllToyBooking from "./AllToyBooking";



const AllToy = () => {

    
  const [categories, setCategories] = useState([]);


  useEffect(()=>{
    fetch('https://arrival-toy-projects-server.vercel.app/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])

 
  



    return (
        <div>
            {/* category */}
            <h1 className=" mt-5 text-center font-semibold text-3xl">All MY new toy</h1>
            <div>
            <div className="overflow-x-auto w-full">
      <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
       <th>Seller</th>
        <th>Toy Name</th>
        <th>Sub-category</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
      {
        categories.map(category => <AllToyBooking
        
        key={category._id}
        category={category}
        >
        </AllToyBooking>)
      }
    </tbody>
   
    
  </table>
   </div>
    </div>
              

        </div>
    );
};

export default AllToy;