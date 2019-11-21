import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

class NewProjectForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      redirect: false
    };
    this._title = null;
    this._description = null;
    this.addNewProject = this.addNewProject.bind(this);
  }

  addNewProject(event) {
    event.preventDefault();
    this.props.onNewProjectCreation({title: this._title.value, description: this._description.value, notes: []});
    this._title.value = '';
    this._description.value = '';
    this.setState({redirect: true});
  }

  render() {
    var btnParent = {
      textAlign: 'center',
      marginTop: '20px'
    };
    var btnStyle = {
      backgroundColor: '#0f2c3e',
    };
    return (
      <div>
        {this.state.redirect ? <Redirect to='/' /> : ''}
        <form onSubmit={this.addNewProject}>
          <style jsx>{`
            .input-field input[type=text]:focus {
              border-bottom: 1px solid #0f2c3e;
              box-shadow: 0 1px 0 0 #0f2c3e;
            }
        `}</style>
          <div className='input-field'>
            <input
              id='title'
              type='text'
              placeholder='Project Title'
              ref={(input) => {this._title = input;}} />
          </div>
          <div className='input-field'>
            <input
              id='description'
              type='text'
              placeholder='Project Description (ie. job application)'
              ref={(input) => {this._description = input;}} />
          </div>
          <div style={btnParent}>
            <button type='submit' style={btnStyle} className="waves-effect waves-light btn-large"><i className="material-icons right">add</i>Add Project</button>
          </div>
        </form>
      </div>
    );
  }
}

NewProjectForm.propTypes = {
  onNewProjectCreation: PropTypes.func
};

export default NewProjectForm;