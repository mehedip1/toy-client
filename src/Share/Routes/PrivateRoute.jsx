import React, { useContext } from 'react';
import { AuthContext } from './../../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    // const location = useLocation();
     
  if(loading){
    return <div className="radial-progress" style={{"--value":70}}>70%</div>
  }

    if(user?.email){
        return children;
    }
    return (
        <Navigate to="/login" state={{form: location}}  replace></Navigate>
    );
};

export default PrivateRoute;