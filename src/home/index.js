import React from 'react';
import Header from '../header';
import Footer from '../footer';
import './styles.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>I am the main section</main>
      <Footer />
    </div>
  );
}

export default Home;
