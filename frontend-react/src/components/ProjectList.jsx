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
          id={project.id}
          onSettingCurrentProject={props.onSettingCurrentProject}
        />
      )}
    </div>
  );
}

ProjectList.propTypes = {
  projectList: PropTypes.array,
  onSettingCurrentProject: PropTypes.func
};

export default ProjectList;