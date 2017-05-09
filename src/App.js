import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="profile-container">
          <img className="profile" alt="Brandon Wong" src="profile.jpg"/>
          <h1>Brandon Wong</h1>
          <div className="sub-heading">I'm a software engineer, full-stack JavaScript developer, bird enthusiast, and a displaced Texan living in<br/>San Francisco, California.</div>
          </div>
        </div>
        <div className="container">
          Bio
        </div>
        <div className="container">
          Projects
        </div>
      </div>
    );
  }
}

export default App;
