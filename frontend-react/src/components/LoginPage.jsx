import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LoginPage(props) {

  let _userId = null;

  function handleLogin(event) {
    console.log('handle login running');
    event.preventDefault();
    props.onLogin(_userId.value);
    _userId = '';
  }

  var loginBtnParent = {
    textAlign: 'center',
    marginTop: '20px'
  };
  var loginBtnStyle = {
    backgroundColor: '#0f2c3e',
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <style jsx>{`
            .input-field input:focus {
              border-bottom: 1px solid #0f2c3e;
              box-shadow: 0 1px 0 0 #0f2c3e;
            }
        `}</style>
        <div className='input-field'>
          <input
            type='text'
            placeholder='User ID'
            ref={(input) => { _userId = input; }}
          />
        </div>
        <div className='input-field'>
          <input
            type='password'
            placeholder='Password'
          />
        </div>
        <div style={loginBtnParent}>
          <button type='submit' style={loginBtnStyle} className='waves-effect waves-light btn-large'><i className='material-icons right'>chevron_right</i>Log in</button>
        </div>
      </form>
    </div>
  );
}

LoginPage.propTypes = {
  onLogin: PropTypes.func
}

export default LoginPage;