import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

function Project(props) {
  console.log('notes in project.jx', props.notes);

  function seeProjectDetails()
  {
    let projectId = props.projectId;
    console.log('hi', projectId);
    props.onSettingCurrentProject(projectId);
  }

  var cardStyle = {
    backgroundColor: '#0f2c3e'
  };
  var projectBtnStyle = {
    backgroundColor: '#e3eff3',
    color: '#0f2c3e',
    marginTop: '15px'
  };
  var projectBtnParent = {
    textAlign: 'center'
  };

  return (
    <div>
      <div className="card darken-1" style={cardStyle}>
        <div className="card-content white-text">
          <span className="card-title">{props.title}</span>
          <p>{props.description} </p>
          <div style={projectBtnParent}>
            <Link onClick={seeProjectDetails} to='/details' style={projectBtnStyle} className="btn-small waves-effect waves-light"><i className="material-icons left">assignment</i>Project Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  notes: PropTypes.array,
  completed: PropTypes.bool,
  deadlines: PropTypes.array,
  id: PropTypes.string,
  onSettingCurrentProject: PropTypes.func,
  projectId: PropTypes.string
};

export default Project;