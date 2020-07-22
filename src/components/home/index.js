import React, { Component } from 'react';
import './styles.scss';
import map from '../../images/UK-and-Europe.png'


class Home extends Component {
  constructor(props){
    super(props);
    this.state = { showMessage: false };
    this.openMessage = () => this.setState({showMessage: !this.state.showMessage})
  }

  render() {
    const width = window.innerWidth;
    return (
      <div className="home">
        <section className="welcome-content">
          <h1 className="main_title">Welcome to Reuben's French Site!</h1>
          <div>
            <span role="img" aria-label="smiley-face" className="smiley" onClick={this.openMessage}>😊</span>
            {this.state.showMessage && <p className="secret-message">Bonjour Reuben! ♥ </p>}
          </div>
          {(width > 768) && <div className="maps">
            <p className="nottingham">Nottingham</p>
            <div className="arrow">France →</div>
            <img src={map} alt="Map of UK and France with Nottingham highlighted"/>
          </div>}
  
          <p>Learning languages is fun!</p>
          <p>On this site you'll find some fun videos and resources to help you learn some French.</p>
          <p>Allons-y!</p>
        </section>
      </div>
    );

  }
}

export default Home;
