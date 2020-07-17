import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Videos from '../videos';
import './styles.scss';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="main_content">
        <section id="welcome" class="welcome-content">
          <h1 className="main_title">Welcome to Reuben's French Site!</h1>
          <p>Do you want to learn some French?</p>
          <p>On this site you'll find some fun videos and resources to help you</p>
          <p>Let's go!</p>
        </section>
        <section id="videos">
          <Videos />
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
