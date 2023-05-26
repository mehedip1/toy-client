import React from 'react';

const AllToyBooking = ({category}) => {
    const { seller, sub_category, quantity, name ,price}= {category};
    console.log(category)
    return (
         
      <tr>
      <th>
        </th>
      <td>
       
          <div className="avatar">
            <div className="rounded w-12 h-12">
              <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
      <td>
       {seller}
      </td>
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <th>
      <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
             
          
    );
};

export default AllToyBooking;