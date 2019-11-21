import React from 'react';
import PropTypes from 'prop-types';
import NoteList from './NoteList';
import { v4 } from 'uuid';
import Moment from 'moment';

function ProjectDetails(props) {
  let _note = null;

  function addNewNote(event) {
    event.preventDefault();
    props.onAddingNewNote({note: _note.value, id: v4(), timeWritten: new Moment()});
    _note.value = '';
  }

  function deleteProject() {
    props.onDeletingProject();
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
      <h1>{props.currentProject.title}</h1>
      <p>{props.currentProject.description}</p>
      <NoteList noteList={props.currentProject.notes} />
      <form onSubmit={addNewNote}>
        <input
          id='note'
          type='text'
          placeholder='Add a new note'
          ref={(input) => { _note = input; }} />
        <div style={btnParent}>
          <button type='submit' style={btnStyle} className="waves-effect waves-light btn"><i className="material-icons left">add</i>Add Note</button>
        </div>
      </form>
      <button style={btnStyle} className="btn-small waves-effect waves-light" onClick={deleteProject}><i className="material-icons left">delete</i>Delete This Project</button>
    </div>
  );
}

ProjectDetails.propTypes = {
  currentProject: PropTypes.object,
  onAddingNewNote: PropTypes.func,
  onDeletingProject: PropTypes.func
};

export default ProjectDetails;