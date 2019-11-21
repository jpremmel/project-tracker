import React from 'react';
import Project from './Project';
import PropTypes from 'prop-types';

function ProjectList(props) {
  return (
    <div>
      {Object.keys(props.projectList).map(function (id) {      
        var project = props.projectList[id];        
        return <Project title={project.title}
          description={project.description}
          key={project.id}
          id={project.id}
          onSettingCurrentProject={props.onSettingCurrentProject}
        />;
      })}
    </div>
  );
}

ProjectList.propTypes = {
  projectList: PropTypes.object,
  onSettingCurrentProject: PropTypes.func
};

export default ProjectList;