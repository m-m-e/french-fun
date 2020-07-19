import React from 'react';
import './styles.scss';
import map from '../../images/UK-and-Europe.png'

const Home = () => {
  return (
    <div className="home">
      <section className="welcome-content">
        <h1 className="main_title">Welcome to Reuben's French Site!</h1>
        <div className="maps">
          <p className="nottingham">Nottingham</p>
          <div className="arrow">France →</div>
          <img src={map} alt="Map of UK and France with Nottingham highlighted"/>
        </div>

        <p>Learning languages is fun!</p>
        <p>On this site you'll find some fun videos and resources to help you learn some French.</p>
        <p>Allons-y!</p>
      </section>
    </div>
  );
}

export default Home;
