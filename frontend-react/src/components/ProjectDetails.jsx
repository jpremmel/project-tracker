import React from 'react';
import PropTypes from 'prop-types';

function ProjectDetails(props) {
  return(
    <div>
      <h1>{props.currentProject.title}</h1>
      <p>{props.currentProject.description}</p>
    </div>
  );
}

ProjectDetails.propTypes = {
  currentProject: PropTypes.object
};

export default ProjectDetails;