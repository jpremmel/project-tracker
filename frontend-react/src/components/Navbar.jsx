import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

function Navbar() {
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>Logo</Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li><Link to='/new-project'>New Project</Link></li>
          <li><Link to='/sign-in'>Sign In</Link></li>
          <li><Link to='/sign-out'>Sign Out</Link></li>
        </ul>
      </div>
    </nav>  
  );
}

export default Navbar;