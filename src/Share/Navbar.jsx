import Header from './Header';
import logo from '../../src/assets/images/logo.jfif'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <h2 className='text-center font-bold text-5xl'>Toy Market</h2>
    

      <section className='mt-5'>
      <div className="navbar bg-indigo-300	">
    <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Arrival of Toy</a>
    <section className='mx-auto'>
        <Header></Header>
      </section>
  </div>
    
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={logo} />
        </div>
      </label>

      {/* new item */}
     

      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link to='/'>
          <a className="justify-between">
            Profile
            </a>
          </Link>
        </li>
     {
      <li><Link to='/login'> Logout</Link> </li>
     }
      </ul>
    </div>
  </div>
     </div>
      </section>
    </div>
  );
};

export default Navbar;