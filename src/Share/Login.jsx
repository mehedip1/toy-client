import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    
   const {signIn} = useContext(AuthContext);
  //  const location = useLocation();
  //  const navigate = useNavigate();

  //  const from = location.state?.from?.pathname || '/';

     const handleLogin = event =>{
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

      
        signIn(email, password)
        .then(result => {
            const user = result.user;
            const loggedUser = {
              email: user.email
            }
            console.log(loggedUser);
            // navigate(from,{replace: true})
            fetch('http://localhost:5000/jwt', {
              method: 'POST',
              headers:{
                'content-type': 'application/json'
              },
              body: JSON.stringify(loggedUser)
            })
        })
        .then(res => res.json())
        .then(data => {
          console.log('jwt work', data);
        })


        .catch(error => console.log(error));
    }
    return (
        <div>
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      
   </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-3xl text-center font-bold">Login now.</h1>
       <form onSubmit={handleLogin}>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input className="btn btn-primary" type="submit" value= "Login" />
        </div>
       </form>
      </div>
    </div>
       </div>
     </div>
        </div>
    );
};

export default Login;
