import React, { Component } from 'react';
import './Header.css';
import github from '../public/github.png';
import linkedin from '../public/linkedin.png';
import angellist from '../public/angellist.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.setHeaderRef = this.setHeaderRef.bind(this);
  }

  componentDidMount() {
    this.props.setHeight(this.header.clientHeight);
  }

  setHeaderRef(input) {
    console.log('setting header ref', input.offsetTop);
    this.props.app.header = input;
    this.header = input;
  }

  render() {
    return (
      <div ref={this.setHeaderRef} className="header">
        <h1 className="name" onClick={() => window.scrollTo(0, 0)}>Brandon Wong</h1>
        <span>
          <a href="https://github.com/blhwong" className="links" target="_blank" rel="noopener noreferrer">
            <img className="logo" src={github} alt="GitHub logo" />
          </a>
          <a href="https://www.linkedin.com/in/blhwong/" className="links" target="_blank" rel="noopener noreferrer">
            <img className="logo" src={linkedin} alt="LinkedIn logo" />
          </a>
          <a href="https://angel.co/blhwong" className="links" target="_blank" rel="noopener noreferrer">
            <img className="logo" src={angellist} alt="AngelList logo" />
          </a>
        </span>
      </div>
    );

  }
}

export default Header;
