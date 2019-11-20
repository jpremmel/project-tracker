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
      currentUser: 'Ethan'

    }
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {    
    this.setState({currentUser: ''});
  }

  render() {
    return(
      <div>
        <Navbar onLogout={this.handleLogout} currentUser={this.state.currentUser}/>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={ProjectList} />
            <Route path='/new-project' component={NewProjectForm} />
            <Route path='/sign-in' component={LoginPage} />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;