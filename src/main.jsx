import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Main/Layout';
import Home from './Home';
import Login from './Share/Login';
import Blog from './Share/Blog';
import MyToy from './Share/MyToy';
import AllToy from './Share/AllToy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/home',
        element:<Home></Home>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
       path:'/myToy',
       element: <MyToy></MyToy>
      },
      {
       path:'/allToy',
       element: <AllToy></AllToy>
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
   </React.StrictMode>,
  </div>
)
