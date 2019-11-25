import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';
import Navbar from './Navbar';
import ProjectList from './ProjectList';
import NewProjectForm from './NewProjectForm';
import LoginPage from './LoginPage';
import ProjectDetails from './ProjectDetails';
import CreateAcctPage from './CreateAcctPage';
import { cloneDeep } from 'lodash';
import ApiHelper from '../ApiHelper.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: '',
      currentProject: null,
      masterProjectList: {},
      token: null
    };
    this.apiHelper = new ApiHelper();
    this.handleLogout = this.handleLogout.bind(this);
    this.handleAddingNewProject = this.handleAddingNewProject.bind(this);
    this.handleSettingCurrentProject = this.handleSettingCurrentProject.bind(this);
    this.handleAddingNewNote = this.handleAddingNewNote.bind(this);
    this.handleDeletingProject = this.handleDeletingProject.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleCreateAcct = this.handleCreateAcct.bind(this);
  }

  getProjectList() { //to be called in handleLogin once user is successfully authenticated
    let dataPromise = this.apiGetUserProjects(this.state.currentUser, this.state.token);

    dataPromise.then((response) => {
      console.log(JSON.parse(response));
      let JSONresponse = JSON.parse(response);

      for (let i = 0; i < JSONresponse.length; i++) {
        console.log(JSONresponse[i]);
        this.handleAddingNewProjectFromApi(JSONresponse[i]);
      }
      console.log(this.state.masterProjectList);
    });
  }

  handleCreateAcct(newUser) {
    this.apiHelper.apiPostNewUser(newUser);
  }

  handleLogin(user) {
    let loginPromise = this.apiHelper.apiAttemptLogin(user);
    loginPromise.then(function(response) {
      console.log('WE ARE HERE', response);
    });

    //once user is authenticated, call getProjectList()
    
  }


  handleLogout() {
    this.setState({ currentUser: '' });
  }

  handleAddingNewProject(newProject) {
    var newProjectId = v4();
    var newMasterProjectList = Object.assign({}, this.state.masterProjectList, {
      [newProjectId]: newProject
    });
    this.setState({ masterProjectList: newMasterProjectList });
    this.apiPostNewProject(newProject); // NEW LINE
    console.log('--------', newProject);
  }

  handleSettingCurrentProject(projectId) {
    this.setState({ currentProject: projectId });
  }

  handleAddingNewProjectFromApi(newProject) {
    var newProjectId = v4();
    var newMasterProjectList = Object.assign({}, this.state.masterProjectList, {
      [newProjectId]: newProject
    });
    this.setState({ masterProjectList: newMasterProjectList });
    // this.apiPostNewProject(newProject); // NEW LINE
    console.log('--------', newProject);
  }

  handleAddingNewNote(note) {
    note.timeWritten = (note.timeWritten);
    const copyMasterProjectList = cloneDeep(this.state.masterProjectList); //use lodash to make a deep copy
    copyMasterProjectList[this.state.currentProject].notes.push(note);
    this.setState({ masterProjectList: copyMasterProjectList });
  }

  handleDeletingProject() {
    let copyMasterProjectList = cloneDeep(this.state.masterProjectList); //use lodash to make a deep copy
    delete copyMasterProjectList[this.state.currentProject];
    this.setState({ masterProjectList: copyMasterProjectList });
    this.setState({ currentProject: null });
  }

  render() {
    return (
      <div>
        <Navbar onLogout={this.handleLogout} currentUser={this.state.currentUser} />
        <div className='container'>
          <Switch>
            <Route exact path='/' render={() => <ProjectList
              projectList={this.state.masterProjectList}
              onSettingCurrentProject={this.handleSettingCurrentProject} />} />
            <Route path='/new-project' render={() => <NewProjectForm
              onNewProjectCreation={this.handleAddingNewProject}
              currentUser={this.state.currentUser} />} />
            <Route path='/details' render={() => <ProjectDetails
              currentProject={this.state.currentProject}
              projectList={this.state.masterProjectList}
              onAddingNewNote={this.handleAddingNewNote}
              onDeletingProject={this.handleDeletingProject} />} />
            <Route path='/sign-in' render={() => <LoginPage
              onLogin={this.handleLogin} />} />
            <Route path='/create-account' render={() => <CreateAcctPage
              onCreateAcct={this.handleCreateAcct} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;