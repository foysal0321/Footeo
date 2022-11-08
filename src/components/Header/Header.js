import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../context/Context';
import Slider from '../home/Slider';

const Header = () => {
  const {user, logutUser} = useContext(Authcontext)
    return (
        <>
        <div className="navbar bg-base-300">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Amerta</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      
      {
        user ? 
        <>
         <li><Link to='/addservice'>Add Service</Link></li>
         <li><Link to='/review'>My Review</Link></li>
         <li> <button onClick={logutUser} className="btn btn-outline btn-primary">Log Out</button></li>
        </>
        
        :
        <>
         <li><Link to='/signup'>Signup</Link></li>
      <li><Link to='/login'>Login</Link></li>
        </>
      }
     
    </ul>
  </div>
</div>

</>
    );
};

export default Header;