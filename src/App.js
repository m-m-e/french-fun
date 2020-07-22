import React from 'react';
import { Router } from "@reach/router"
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import Videos from './components/videos';
import Resources from './components/resources';
import NotFound from './components/notFound';
import './App.scss';



const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main_content">
        <Router>
          <Home path="/" />
          <Videos path="videos" />
          <Resources path="resources" />
          <NotFound default />
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
