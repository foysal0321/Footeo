import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../context/Context';

const Privetrout = ({children}) => {
   const {user, loding} = useContext(Authcontext);
   const location = useLocation();

   if(loding){
    return <button className="btn loading ">loading</button>
   }
   if(user){
    return children;
   }
   return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default Privetrout;