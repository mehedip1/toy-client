import React from 'react';
import Footer from '../Footer';
import Navbar from '../Share/Navbar';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <div>
       
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;