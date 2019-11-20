import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
      currentProject: '5a115f12-d900-413c-a1d8-685ed36dd758',
      masterProjectList: [
        {title: "Test Project1", description: "desc 1", notes: [{note: "note1", id: "b8a095a0-644a-4676-a57a-43981706cd94"}], id: "5a115f12-d900-413c-a1d8-685ed36dd758"}
      ]
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleAddingNewProject = this.handleAddingNewProject.bind(this);
    this.handleSettingCurrentProject = this.handleSettingCurrentProject.bind(this);
    this.handleAddingNewNote = this.handleAddingNewNote.bind(this);
  }

  handleLogout() {    
    this.setState({currentUser: ''});
  }


  handleAddingNewProject(newProject){
    var copyProjectList = this.state.masterProjectList.slice();
    copyProjectList.push(newProject);
    this.setState({masterProjectList: copyProjectList});
  }

  handleSettingCurrentProject(projectId){
    this.setState({currentProject: projectId});
  }

  getCurrentProject(){
    for (let i = 0; i < this.state.masterProjectList.length; i++){
      if (this.state.currentProject == this.state.masterProjectList[i].id){
        return this.state.masterProjectList[i];
      }
    }
  }

  handleAddingNewNote(note){
    let copyMasterProjectList = this.state.masterProjectList.slice();
    for (let i = 0; i < copyMasterProjectList.length; i++){
      if (this.state.currentProject == copyMasterProjectList[i].id){
        copyMasterProjectList[i].notes.push(note);
        this.setState({masterProjectList: copyMasterProjectList});
      }
    }
  }

  render() {
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
              currentProject={this.getCurrentProject()} 
              onAddingNewNote={this.handleAddingNewNote}/>} />
            <Route path='/sign-in' 
              component={LoginPage} />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;