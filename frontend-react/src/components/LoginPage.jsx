import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

function LoginPage() {

  var loginBtnParent = {
    textAlign: 'center',
    marginTop: '20px'
  };
  var loginBtnStyle = {
    backgroundColor: '#2c2321',
  };

  return (
    <div>
      <form>
        <div className='input-field'>
          <input
            type='text'
            placeholder='Username or email address'
          />
        </div>
        <div className='input-field'>
          <input
            type='password'
            placeholder='Password'
          />
        </div>
        <div style={loginBtnParent}>
          <Link to='/' style={loginBtnStyle} className="waves-effect waves-light btn-large"><i className="material-icons right">chevron_right</i>Log in</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;