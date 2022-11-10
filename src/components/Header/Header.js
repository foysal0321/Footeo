import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../context/Context';


const Header = () => {
  const {user, logutUser} = useContext(Authcontext)

  const navitem =
  <>
      <li><Link to='/'>Home</Link></li>
       <li><Link to='/blog'>Blog</Link></li>
       <li><Link to='/allservices'>Services</Link></li>

 {
   user?.email ? 
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
 </>

 return (
     <div>
      <div className="navbar bg-base-300 h-32  ">
        <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navitem}
          </ul>
        </div>
        <img className='w-20 h-20' src='https://pbs.twimg.com/media/EZQQ9FbWkAELRsw.png' alt="" />
       <Link to='/' className="btn btn-ghost normal-case text-xl">  
          <h3 className="text-2xl font-bold">Footeo</h3>
          </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {navitem}
          </ul>
          </div>
        </div>
     </div>
 );
};

export default Header;