import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import PropTypes from 'prop-types';

function Navbar(props) {

  console.log(props.currentUser);
  function clickLogout() {
    props.onLogout();
  }

  let signInOut = <Link to='/sign-in'>Sign In</Link>;

  if (props.currentUser)
  {
    signInOut = <Link onClick={clickLogout} to='/sign-in'>Sign Out</Link>;
  }

  var navStyle = {
    backgroundColor: '#0f2c3e'
  };

  return (
    <nav style={navStyle}>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'><i className="material-icons">home</i>My Projects</Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li><Link to='/new-project'>New Project</Link></li>
          <li>{signInOut}</li>
        </ul>
      </div>
    </nav>  
  );
}

Navbar.propTypes = {
  onLogout: PropTypes.func,
  currentUser: PropTypes.string
};

export default Navbar;