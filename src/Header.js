import React from 'react';
import './Header.css';
import github from '../public/github.png';
import linkedin from '../public/linkedin.png';
import angellist from '../public/angellist.png';

const Header = () => {
  return (
    <div className="header">
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
  );
}

export default Header;
