import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../home/Slider';

const Header = () => {
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
      <li><Link >Services</Link></li>
     
     
    </ul>
  </div>
</div>

</>
    );
};

export default Header;