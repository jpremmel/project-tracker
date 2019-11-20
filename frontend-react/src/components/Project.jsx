import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';

function Project(props) {
  return (
    <div>
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.title}</span>
          <p>{props.description} </p>
          <div>
            <button className="btn-small waves-effect waves-light"><i className="material-icons">thumb_up</i>Project Details</button>
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
  deadlines: PropTypes.array
}

export default Project;