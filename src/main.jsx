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
import React from 'react';
import Signup from './Share/Signup';
import AuthProvider from './Providers/AuthProvider';
import Update from './Share/Update';
import AddToy from './Share/AddToy';
import View from './Share/View';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path:'signup',
        element: <Signup></Signup>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
       path:'myToy',
       element: <MyToy></MyToy>
      },
      {
       path:'allToy',
       element: <AllToy></AllToy>
      },
      {
        path:'addToy/:id',
        element:<AddToy></AddToy>,
        loader :() => fetch ('http://localhost:5000/services')
      },
      {
        path: 'update',
        element: <Update></Update>
      },
      {
        path: 'addToy',
        element: <AddToy></AddToy>,
        loader: () => fetch('')
      },
      {
        path: 'view',
        element: <View></View>
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
   </React.StrictMode>,
  </div>
)
