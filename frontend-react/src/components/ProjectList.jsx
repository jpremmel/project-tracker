import React from 'react';
import Project from './Project';
import PropTypes from 'prop-types';

function ProjectList(props) {
  
  return (
    <div>
      {Object.keys(props.projectList).map(function(projectId) {      
        var project = props.projectList[projectId];     
        return <Project title={project.title}
          description={project.description}
          key={projectId}
          projectId={projectId}
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