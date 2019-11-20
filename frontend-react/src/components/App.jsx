import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ProjectList from './ProjectList';
import NewProjectForm from './NewProjectForm';
import LoginPage from './LoginPage';

class App extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div className='container'>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={ProjectList} />
          <Route path='/new-project' component={NewProjectForm} />
          <Route path='/sign-in' component={LoginPage} />
        </Switch>
      </div>
    );
  }

}

export default App;