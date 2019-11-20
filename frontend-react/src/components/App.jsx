import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ProjectList from './ProjectList';
import NewProjectForm from './NewProjectForm';
import LoginPage from './LoginPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: 'Ethan',
      masterProjectList: []
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.handleAddingNewProject = this.handleAddingNewProject.bind(this);
  }

  handleLogout() {    
    this.setState({currentUser: ''});
  }

  handleAddingNewProject(newProject){
    var copyProjectList = this.state.masterProjectList.slice();
    copyProjectList.push(newProject);
    this.setState({masterProjectList: copyProjectList});
  }

  render() {
    return(
      <div>
        <Navbar onLogout={this.handleLogout} currentUser={this.state.currentUser}/>
        <div className='container'>
          <Switch>
            <Route exact path='/' render={() => <ProjectList 
              projectList={this.state.masterProjectList} />} />
            <Route path='/new-project' render={() => <NewProjectForm  
              onNewProjectCreation={this.handleAddingNewProject} />} />
            <Route path='/sign-in' component={LoginPage} />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;