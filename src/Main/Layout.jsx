import React from 'react';
import Home from '../Home';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const Layout = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;