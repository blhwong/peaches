import React, { Component } from 'react';
import './App.css';
import github from '../public/github.png';
import linkedin from '../public/linkedin.png';
import angellist from '../public/angellist.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="profile-container">
          <img className="profile" alt="Brandon Wong" src="profile.jpg"/>
          <div>
            <h1 className="name">Brandon Wong</h1>
            <span>
              <a href="https://github.com/blhwong" className="links">
                <img className="logo" src={github} alt="Github logo"/>
              </a>
              <a href="https://www.linkedin.com/in/blhwong/" className="links">
                <img className="logo" src={linkedin} alt="LinkedIn logo"/>
              </a>
              <a href="https://angel.co/blhwong" className="links">
                <img className="logo" src={angellist} alt="AngelList logo"/>
              </a>
            </span>
          </div>
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
