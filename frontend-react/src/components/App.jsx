import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';
import Navbar from './Navbar';
import ProjectList from './ProjectList';
import NewProjectForm from './NewProjectForm';
import LoginPage from './LoginPage';
import ProjectDetails from './ProjectDetails';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'Ethan',
      currentProject: null,
      masterProjectList: {}
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleAddingNewProject = this.handleAddingNewProject.bind(this);
    this.handleSettingCurrentProject = this.handleSettingCurrentProject.bind(this);
    this.handleAddingNewNote = this.handleAddingNewNote.bind(this);
    this.handleDeletingProject = this.handleDeletingProject.bind(this);
  }

  handleLogout() {    
    this.setState({currentUser: ''});
  }


  handleAddingNewProject(newProject){
    var newProjectId = v4();
    var newMasterProjectList = Object.assign({}, this.state.masterProjectList, {
      [newProjectId]: newProject
    });
    this.setState({ masterProjectList: newMasterProjectList});
  }

  handleSettingCurrentProject(projectId){
    this.setState({currentProject: projectId});
  }

  handleAddingNewNote(note){
    note.timeWritten = (note.timeWritten);
    let copyMasterProjectList = this.state.masterProjectList.slice();
    for (let i = 0; i < copyMasterProjectList.length; i++){
      if (this.state.currentProject == copyMasterProjectList[i].id){
        copyMasterProjectList[i].notes.push(note);
        this.setState({masterProjectList: copyMasterProjectList});
      }
    }
  }

  handleDeletingProject(){
    console.log('check');
    console.log(this.state.masterProjectList);
    let copyMasterProjectList = this.state.masterProjectList.slice();
    for (let i = 0; i < copyMasterProjectList.length; i++){
      if (this.state.currentProject == copyMasterProjectList[i].id){
        copyMasterProjectList.splice(i, 1);
        this.setState({masterProjectList: copyMasterProjectList});
        this.setState({currentProject: null});
      }
    }
  }

  render() {
    console.log('log', this.state.currentProject);
    return(
      <div>
        <Navbar onLogout={this.handleLogout} currentUser={this.state.currentUser}/>
        <div className='container'>
          <Switch>
            <Route exact path='/' render={() => <ProjectList 
              projectList={this.state.masterProjectList} 
              onSettingCurrentProject={this.handleSettingCurrentProject} />} />
            <Route path='/new-project' render={() => <NewProjectForm  
              onNewProjectCreation={this.handleAddingNewProject} />} />
            <Route path='/details' render={() => <ProjectDetails
              currentProject={this.state.currentProject}
              projectList={this.state.masterProjectList} 
              onAddingNewNote={this.handleAddingNewNote}
              onDeletingProject={this.handleDeletingProject} />} />
            <Route path='/sign-in' 
              component={LoginPage} />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;