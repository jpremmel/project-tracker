import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';
import Navbar from './Navbar';
import ProjectList from './ProjectList';
import NewProjectForm from './NewProjectForm';
import LoginPage from './LoginPage';
import ProjectDetails from './ProjectDetails';
import { cloneDeep } from 'lodash';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: '',
      currentProject: null,
      masterProjectList: {}
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleAddingNewProject = this.handleAddingNewProject.bind(this);
    this.handleSettingCurrentProject = this.handleSettingCurrentProject.bind(this);
    this.handleAddingNewNote = this.handleAddingNewNote.bind(this);
    this.handleDeletingProject = this.handleDeletingProject.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  makeApiGetCall() {
    console.log('calling api');
    //make call
    // make it into the form of state
    //use set state
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `http://localhost:5000/api?id=1`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  makeApiGetCallWrapper() {
    let dataPromise = this.makeApiGetCall();

    dataPromise.then((response) => {
      console.log(JSON.parse(response));
      let JSONresponse = JSON.parse(response);
    
      for (let i = 0; i < JSONresponse.length; i++) {
        console.log(JSONresponse[i])
        this.handleAddingNewProject(JSONresponse[i]);
      }
      console.log(this.state.masterProjectList);

    });
  }

  handleLogin(userId) {
    this.setState({ currentUser: userId });
    this.makeApiGetCallWrapper();
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
    const copyMasterProjectList = cloneDeep(this.state.masterProjectList); //use lodash to make a deep copy
    copyMasterProjectList[this.state.currentProject].notes.push(note);
    this.setState({masterProjectList: copyMasterProjectList});
  }

  handleDeletingProject(){
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
              onNewProjectCreation={this.handleAddingNewProject} />} />
            <Route path='/details' render={() => <ProjectDetails
              currentProject={this.state.currentProject}
              projectList={this.state.masterProjectList}
              onAddingNewNote={this.handleAddingNewNote}
              onDeletingProject={this.handleDeletingProject} />} />
            <Route path='/sign-in' render={() => <LoginPage 
              onLogin={this.handleLogin} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;