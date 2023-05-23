import Header from './Header';
import logo from '../../src/assets/images/logo.jfif'


const Navbar = () => {
  return (
    <div>
      <h2 className='text-center font-bold text-5xl'>Arrival of Toys</h2>
    

      <section>
      <div className="navbar bg-lime-500">
    <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
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
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
     </div>
      </section>
    </div>
  );
};

export default Navbar;