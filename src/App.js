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
            <h2 className="experience-header">Experience</h2>
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
          <div className="profile-container">
            <h2 className="projects-header">Projects</h2>
            <div className="row">
              <div className="column">
                <div className="sub-heading">
                  <a href="https://github.com/blhwong/bewty" target="_blank" rel="noopener noreferrer">MindFits</a>
                </div>
                <div className="image-container">
                  <div className="box large">
                    <img className="image large" alt="MindFits" src="mindfits.png" />
                  </div>
                </div>
                <div className="sub-heading">
                  Daily journaling that analyzes emotion.
                </div>
              </div>
              <div className="column">
                <div className="sub-heading">
                  <a href="https://github.com/blhwong/spotiviv" target="_blank" rel="noopener noreferrer">Spotiviv</a>
                </div>
                <div className="image-container">
                  <div className="box large">
                    <img className="image large" alt="Spotiviv" src="spotiviv.png" />
                  </div>
                </div>
                <div className="sub-heading">
                  Music track search.
                </div>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <div className="sub-heading">
                  <a href="https://github.com/blhwong/Viz-ly" target="_blank" rel="noopener noreferrer">Viz.ly</a>
                </div>
                <div className="image-container">
                  <div className="box large">
                    <img className="image large" alt="Viz.ly" src="vizly.png" />
                  </div>
                </div>
                <div className="sub-heading">
                  Data visualizer for your photos.
                </div>
              </div>
              <div className="column">
                <div className="sub-heading">
                  <a href="https://github.com/blhwong/The-Project" target="_blank" rel="noopener noreferrer">Diff</a>
                </div>
                <div className="image-container">
                  <div className="box large">
                    <img className="image large" alt="Diff" src="diff.png" />
                  </div>
                </div>
                <div className="sub-heading">
                  Bill splitting and tracking with friends.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
