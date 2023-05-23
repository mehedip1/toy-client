import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
              <div className=''>
       <Link className='ms-2' to='/home'>Home</Link>
        <Link className='ms-2' to='/myToy'>My Toy</Link>
        <Link className='ms-3' to='/allToy'>All toy</Link>
        <Link className='ms-4' to='/blog'>Blog</Link>
       </div>
        </div>
    );
};

export default Header;