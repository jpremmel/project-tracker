import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import PropTypes from 'prop-types';

function CreateAcctPage(props) {

  let _username = null;
  let _password = null;

  function handleCreateAcct(event){
    event.preventDefault();
    props.onCreateAcct({Username: _username.value, Password: _password.value});
    _username = '';
    _password = '';
  }

  var btnParent = {
    textAlign: 'center',
    marginTop: '20px'
  };
  var btnStyle = {
    backgroundColor: '#0f2c3e',
  };

  return (
    <div>
      <form onSubmit={handleCreateAcct}>
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
            ref={(input) => { _username = input; }}
          />
        </div>
        <div className='input-field'>
          <input
            type='password'
            placeholder='Password'
            ref={(input) => { _password = input; }}
          />
        </div>
        <div style={btnParent}>
          <button type='submit' style={btnStyle} className='waves-effect waves-light btn-large'><i className='material-icons right'>add</i>Create Account</button>
        </div>
      </form>
    </div>
  );
}

CreateAcctPage.propTypes = {
  onCreateAcct: PropTypes.func
};

export default CreateAcctPage;