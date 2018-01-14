import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerHeight: undefined,
      pageYOffset: undefined,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.setHeight = this.setHeight.bind(this);
    this.setBlockRef = this.setBlockRef.bind(this);
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  setHeight(headerHeight) {
    this.setState({ headerHeight });
  }

  setBlockRef(input) {
    this.block = input;
  }

  handleScroll() {
    this.setState({ pageYOffset: window.pageYOffset });
  }

  render() {
    const offsetTop = (
      (this.header && this.header.offsetTop) || (this.block && this.block.offsetTop)
    );
    const isSticky = this.state.pageYOffset >= offsetTop;
    const headerClassName = isSticky ? 'sticky' : 'non-sticky';
    return (
      <div className="App">
        <div className="container">
          <div className="profile-container">
            <img className="profile" alt="Brandon Wong" src="profile.jpg" />
            <div className={headerClassName}>
              <Header app={this} setHeight={this.setHeight} />
            </div>
            {isSticky && <div style={{ height: this.state.headerHeight }} ref={this.setBlockRef} />}
            <div className="sub-heading">I'm a software engineer, full-stack JavaScript developer, bird enthusiast, and a displaced Texan living in<br />San Francisco, California.</div>
          </div>
        </div>
        <div className="container">
          Education
        </div>
        <div className="container">
          Experience
        </div>
        <div className="container">
          Projects
        </div>
      </div>
    );
  }
}

export default App;
