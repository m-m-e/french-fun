import React from 'react';
import Header from '../header';
import Footer from '../footer';
import './styles.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="main_content">
        <section id="welcome">
          <h1 className="main_title">Welcome to Reuben's French Site!</h1>
        </section>
        <section id="videos">
          <h2 className="main_subtitle">Videos</h2>
          <div className="videos-container">
            <iframe title="video-1" src="https://player.vimeo.com/video/437959757" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
        </section>
        <section id="resources">
          <h2 className="main_subtitle">Resources</h2>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
