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
      currentUser: 0,
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

  handleCreateAcct(newUser) {
    this.apiHelper.apiPostNewUser(newUser);
  }

  //NEXT 3 METHODS: log in, get user's projects from API, update masterProjectList in state with user's projects
  handleLogin(user) {
    let loginPromise = this.apiHelper.apiAttemptLogin(user);
    loginPromise.then((response) => {
      let parsedResponse = JSON.parse(response);
      console.log('JSON RESPONSE (handleLogin): ', parsedResponse);
      this.setState({currentUser: parsedResponse.userId});
      this.setState({token: parsedResponse.token});
    }).then(() => {this.getProjectList()});  
  }
  getProjectList() {
    let dataPromise = this.apiHelper.apiGetUserProjects(this.state.token);
    dataPromise.then((response) => {
      let parsedResponse = JSON.parse(response);
      console.log('JSON RESPONSE (getProjectList): ', parsedResponse);
      for (let i = 0; i < parsedResponse.length; i++) {
        this.handleAddingProjectToState(parsedResponse[i]);
      }
    });
  }
  handleAddingProjectToState(project) {
    var projectId = v4();
    var newMasterProjectList = Object.assign({}, this.state.masterProjectList, {
      [projectId]: project
    });
    this.setState({ masterProjectList: newMasterProjectList });
  }

  handleAddingNewProject(newProject) {
    var newProjectId = v4();
    var newMasterProjectList = Object.assign({}, this.state.masterProjectList, {
      [newProjectId]: newProject
    });
    this.setState({ masterProjectList: newMasterProjectList });
    this.apiHelper.apiPostNewProject(newProject, this.state.token);
    console.log('HANDLE ADDING NEW PROJECT: ', newProject);
  }

  handleAddingNewNote(note) {
    note.timeWritten = (note.timeWritten);
    const copyMasterProjectList = cloneDeep(this.state.masterProjectList); //use lodash to make a deep copy
    copyMasterProjectList[this.state.currentProject].notes.push(note);
    this.setState({ masterProjectList: copyMasterProjectList });
  }

  handleSettingCurrentProject(projectId) {
    this.setState({ currentProject: projectId });
  }

  handleDeletingProject() {
    let copyMasterProjectList = cloneDeep(this.state.masterProjectList); //use lodash to make a deep copy
    delete copyMasterProjectList[this.state.currentProject];
    this.setState({ masterProjectList: copyMasterProjectList });
    this.setState({ currentProject: null });
  }

  handleLogout() {
    this.setState({ currentUser: 0 });
    this.setState({ currentProject: null });
    this.setState({ masterProjectList: {} });
    this.setState({ token: null });
  }

  render() {
    console.log('APP STATE: ', this.state);
    return (
      <div>
        <Navbar 
          onLogout={this.handleLogout} 
          currentUser={this.state.currentUser} />
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