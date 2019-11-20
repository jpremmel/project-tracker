import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewProjectForm(props) {

  let _title = null;
  let _description = null;

  function addNewProject(event) {
    event.preventDefault();
    props.onNewProjectCreation({title: _title.value, description: _description.value, notes: [], id: v4()});
    _title.value = '';
    _description.value = '';
  }

  var btnParent = {
    textAlign: 'center',
    marginTop: '20px'
  };
  var btnStyle = {
    backgroundColor: '#2c2321',
  };

  return (
    <div>
      <form onSubmit={addNewProject}>
        <div className='input-field'>
          <input
            id='title'
            type='text'
            placeholder='Project Title'
            ref={(input) => {_title = input;}} />
        </div>
        <div className='input-field'>
          <input
            id='description'
            type='text'
            placeholder='Project Description (ie. job application)'
            ref={(input) => {_description = input;}} />
        </div>
        <div style={btnParent}>
          <button type='submit' style={btnStyle} className="waves-effect waves-light btn-large"><i className="material-icons right">add</i>Add Project</button>
        </div>
      </form>
    </div>
  );
}

NewProjectForm.propTypes = {
  onNewProjectCreation: PropTypes.func
};

export default NewProjectForm;