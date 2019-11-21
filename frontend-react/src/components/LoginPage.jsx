import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

function LoginPage() {

  var loginBtnParent = {
    textAlign: 'center',
    marginTop: '20px'
  };
  var loginBtnStyle = {
    backgroundColor: '#0f2c3e',
  };

  return (
    <div>
      <form>
        <style jsx>{`
            .input-field input:focus {
              border-bottom: 1px solid #0f2c3e;
              box-shadow: 0 1px 0 0 #0f2c3e;
            }
        `}</style>
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