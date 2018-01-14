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
              <img className="image" alt="Brandon Wong" src="profile.jpg" />
            <div className={headerClassName}>
              <Header app={this} setHeight={this.setHeight} />
            </div>
            {isSticky && <div style={{ height: this.state.headerHeight }} ref={this.setBlockRef} />}
            <div className="sub-heading">
              I'm a full-stack software engineer.
              <br />
              Born and raised in Texas.
              <br />
              Currently living in San Francisco, CA.
            </div>
          </div>
        </div>
        <div className="container">
          <div className="profile-container">
              <img className="image" alt="University of Texas" src="longhorn.png" />
            <div className="sub-heading">
              The University of Texas at Austin
              <br />
              Bachelor of Science
              <br />
              Electrical and Computer Engineering
            </div>
          </div>
        </div>
        <div className="container">
          <div className="profile-container">
            <div className="experience">Experience</div>
            <div className="row">
              <div className="column">
                <div className="image-container">
                  <div className="box">
                    <img className="image" alt="Yerdle Recommerce" src="yerdle.jpg" />
                  </div>
                </div>
                <div className="sub-heading">
                  2017 - Present
                </div>
              </div>
              <div className="column">
                <div className="image-container">
                  <div className="box">
                    <img className="image" alt="Seagate Technology" src="seagate.jpg" />
                  </div>
                </div>
                <div className="sub-heading">
                  2016 - 2017
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="container">
          Projects
        </div>
      </div>
    );
  }
}

export default App;
