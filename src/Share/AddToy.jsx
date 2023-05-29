import Swal from 'sweetalert2'


const AddToy = () => {


    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const rating = form.rating.value;
        const price = form.price.value;

        const newAdd = {name, email, rating, price}
        console.log(newAdd)

        fetch('https://arrival-toy-projects-server.vercel.app/services',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAdd)
        })
        .then(req => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){

                Swal.fire({
                    title: 'success',
                    text: 'Add toy success',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
   

     return (
        <div>
         
        <h2 className='text-center mt-5 font-bold text-3xl'>Add a New toy</h2>

     <div className="hero min-h-screen max-w-screen bg-base-200">
     <div className="hero-content flex-col ">
     <div className="text-center lg:text-left">
  
    </div>
    <div className="card flex flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <div className="card-body">
  <h1 className="text-3xl text-center font-bold">Add Toy</h1>
   <form onSubmit={handleAddToy}>
   {/* form row */}
   <div className="flex">
   <div className="form-control md:1/2">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="text" name="email" placeholder="email" className="input input-bordered w-full" />
    </div>
   <div className="form-control md:1/2">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name="name" placeholder="name" className="input input-bordered w-full" />
    </div>
    </div>
  
   {/* form row */}
   <div className="flex">
   <div className="form-control md:1/2">
      <label className="label">
        <span className="label-text">Rating</span>
      </label>
      <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full" />
    </div>
   <div className="form-control md:1/2">
      <label className="label">
        <span className="label-text">Price</span>
      </label>
      <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
    </div>
    </div>
   <div className="form-control mt-6">
    <input className="btn btn-primary" type="submit" value= "Add" />
    </div>


    </form>
    </div>
   </div>
   </div>
    </div>
    
        </div>
    );
};


export default AddToy;