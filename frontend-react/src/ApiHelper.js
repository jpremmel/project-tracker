export default class ApiHelper {

  apiPostNewUser(newUser) {
    let url = 'http://localhost:5000/Users/create';
    let request = new XMLHttpRequest(); 
    let body = JSON.stringify(newUser);
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/JSON');
    request.onreadystatechange = function () { // Call a function when the state changes.
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log('successfully created new user');
      }
    };
    request.send(body);
  }

  apiAttemptLogin(user) {
    console.log('user -----------', user);
    return new Promise(function(resolve, reject) {
      let url = 'http://localhost:5000/Users/authenticate';
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

  apiGetUserProjects(user, token) {
    return new Promise(function (resolve, reject) {
      let url = `http://localhost:5000/api?id=${user}`;    //token????
      let request = new XMLHttpRequest();
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open('GET', url, true);
      request.send();
    });
  }

  apiPostNewProject(newProject) {
    console.log('apiPOst new project running');
    let url = 'http://localhost:5000/api';
    let body = JSON.stringify(newProject);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/JSON');
    xhr.onreadystatechange = function () { // Call a function when the state changes.
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        // Request finished. Do processing here.
      }
    };
    xhr.send(body);
  }


}