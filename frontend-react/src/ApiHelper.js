export default class ApiHelper {

  apiPostNewUser(newUser) {
    let url = 'http://localhost:5000/users/create';
    let request = new XMLHttpRequest(); 
    let body = JSON.stringify(newUser);
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/JSON');
    request.onreadystatechange = function () { // Call a function when the state changes.
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log('Successfully created new user');
      }
    };
    request.send(body);
  }

  apiAttemptLogin(user) {
    console.log('USER ATTEMPTING LOGIN: ', user);
    return new Promise(function(resolve, reject) {
      let url = 'http://localhost:5000/users/authenticate';
      let request = new XMLHttpRequest();
      let body = JSON.stringify(user);
      request.open('POST', url, true);
      request.setRequestHeader('Content-Type', 'application/JSON');
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.send(body);
    });
  }

  apiGetUserProjects(token) {
    return new Promise(function (resolve, reject) {
      let url = 'http://localhost:5000/projects';
      let request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.setRequestHeader('Content-Type', 'application/JSON');
      request.setRequestHeader('Authorization', 'Bearer ' + token);
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
          console.log('Successful API call to get user\'s projects');
        } else {
          reject(Error(request.statusText));
        }
      };
      request.send();
    });
  }

  apiPostNewProject(newProject, token) {
    return new Promise(function(resolve, reject) {
      let url = 'http://localhost:5000/projects';
      let request = new XMLHttpRequest();
      let body = JSON.stringify(newProject);
      request.open('POST', url, true);
      request.setRequestHeader('Content-Type', 'application/JSON');
      request.setRequestHeader('Authorization', 'Bearer ' + token);
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.send(body);
    });
  }

  apiPostNewNote(newNote, token) {
    console.log(newNote);
    return new Promise(function(resolve, reject) {
      let url = 'http://localhost:5000/notes';
      let request = new XMLHttpRequest();
      let body = JSON.stringify(newNote);
      request.open('POST', url, true);
      request.setRequestHeader('Content-Type', 'application/JSON');
      request.setRequestHeader('Authorization', 'Bearer ' + token);
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.send(body);
    });
  }

}