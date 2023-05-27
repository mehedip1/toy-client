



const Update = ({detail}) => {
    const {price, details, quantity} = {detail};

    const handleUpdate = event => {
      event.preventDefault();

      const form = event.target;
      const price = form.price.value;
      const details = form.details.value;
      const quantity = form.quantity.value;

      const newUpdate = { price, details, quantity}
      
      console.log(newUpdate)

    }


    return (
        <div>
         
         <form onSubmit={handleUpdate}>
       <div className="form-control">
          <label className="label">
            <span className="label-text">{price}</span>
          </label>
          <input type="text" name="price" placeholder="price" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">{quantity}</span>
          </label>
          <input type="text" name="quantity" placeholder="quantity" className="input input-bordered" />
          </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">{details}</span>
          </label>
          <input type="text" name="details" placeholder="details" className="input input-bordered" />
         </div>
        <div className="form-control mt-6">
        <input className="btn btn-primary" type="submit" value= "Update" />
        </div>
       </form>
        </div>
    );
};

export default Update;