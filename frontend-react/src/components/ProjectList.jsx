import React from 'react';
import Project from './Project';
import PropTypes from 'prop-types';

function ProjectList(props) {
  return (
    <div>
      {props.projectList.map((project) =>
        <Project 
          title={project.title}
          description={project.description}
          key={project.id}
        />
      )}
    </div>
  );
}

ProjectList.propTypes = {
  projectList: PropTypes.array
};

export default ProjectList;