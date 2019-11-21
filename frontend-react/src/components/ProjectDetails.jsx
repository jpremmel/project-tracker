import React from 'react';
import PropTypes from 'prop-types';
import NoteList from './NoteList';
import { v4 } from 'uuid';
import Moment from 'moment';
import {Redirect} from 'react-router-dom';

function ProjectDetails(props) {
  let _note = null;

  function addNewNote(event) {
    event.preventDefault();
    props.onAddingNewNote({note: _note.value, id: v4(), timeWritten: new Moment()});
    _note.value = '';
  }

  function deleteProject() {
    props.onDeletingProject(props.currentProject);
  }


  var btnParent = {
    textAlign: 'center',
    marginTop: '20px'
  };
  var btnStyle = {
    backgroundColor: '#0f2c3e',
  };
  var headerStyle = {
    textAlign: 'center',
    color: '#0f2c3e'
  };

  if(props.currentProject){
    let project = props.projectList[props.currentProject]
  
    return (
      <div>
        <h1 style={headerStyle}>{project.title}</h1>
        <p>{project.description}</p>
        <NoteList noteList={project.notes} />
        <form onSubmit={addNewNote}>
          <style jsx>{`
            .input-field input[type=text]:focus {
              border-bottom: 1px solid #0f2c3e;
              box-shadow: 0 1px 0 0 #0f2c3e;
            }
        `}</style>
          <div className='input-field'>
            <input
              id='note'
              type='text'
              placeholder='Add a new note'
              ref={(input) => { _note = input; }} />
          </div>
          <div style={btnParent}>
            <button type='submit' style={btnStyle} className="waves-effect waves-light btn-small"><i className="material-icons left">edit</i>Add Note</button>
          </div>
        </form>
        <div style={btnParent}>
          <button style={btnStyle} className="btn-small waves-effect waves-light" onClick={deleteProject}><i className="material-icons left">delete</i>Delete This Project</button>
        </div>
      </div>
    );
  } else {
    return (
      <Redirect to='/' />
    );
  }
}

ProjectDetails.propTypes = {
  projectList: PropTypes.object,
  currentProject: PropTypes.string,
  onAddingNewNote: PropTypes.func,
  onDeletingProject: PropTypes.func
};

export default ProjectDetails;