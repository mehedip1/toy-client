import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
     <div>
       <Link className='ms-2' to='/home'>Home</Link>
       <Link className='ms-3' to='/allToy'>All Toy</Link>
       <Link className='ms-4' to='/addToy'>Add Toy</Link>
        <Link className='ms-2' to='/myToy'>My Toy</Link>
         <Link className='ms-4' to='/blog'>Blog</Link>
      
       </div>
        </div>
    );
};

export default Header;