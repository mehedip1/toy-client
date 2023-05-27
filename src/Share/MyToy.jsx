import AllToyBooking from "./AllToyBooking";




const MyToy = () => {

 

    return (
        <div>
        <h2 className="text-center text-3xl font-mono">My favorite toy</h2>
        <div className="overflow-x-auto">
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
       <AllToyBooking></AllToyBooking>
     </tbody>
    </table>
    </div>
        </div>
    );
};

export default MyToy;