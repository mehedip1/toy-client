import { useRouteError } from "react-router-dom";
import React from 'react';

const Error = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className='text-center text-white bottom-10 mt-5 py-5 bg-red-600' id="error-page">
      
        <h1 className='text-5xl text-white text-center'>404</h1>
        <h1 className='text-3xl'> Oops!</h1>
        
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
       
      </div>
    );
};

export default Error;