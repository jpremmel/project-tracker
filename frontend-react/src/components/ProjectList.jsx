import React from 'react';
import Project from './Project';
import PropTypes from 'prop-types';

function ProjectList(props) {
  if (Object.entries(props.projectList).length == 0) {
    var greyStyle = {
      color: '#6e828a',
      textAlign: 'center'
    };
    return (
      <div>
        <h3 style={greyStyle}>No projects yet!</h3>
      </div>
    );
  } else {
    return (
      <div>
        {Object.keys(props.projectList).map((projectId) => {
          var project = props.projectList[projectId];
          { console.log('PROJECT =', project); }
          return <Project title={project.title}
            description={project.description}
            key={projectId}
            projectId={projectId}
            onSettingCurrentProject={props.onSettingCurrentProject}
            notes={project.notes}            
          />;
        })}
      </div>
    );
  }
}

ProjectList.propTypes = {
  projectList: PropTypes.object,
  onSettingCurrentProject: PropTypes.func
};

export default ProjectList;