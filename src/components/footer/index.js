import React from 'react';
import { Link } from "@reach/router"
import './styles.scss';

const Footer = () => {
  return (
      <footer className="footer">
        <Link to="/">
          <img className="home-icon" src="https://img.icons8.com/ios-glyphs/60/000000/home.png" alt="home icon" />
        </Link>
        <p>Thanks for visiting Reuben's French Site!</p>
        <p>Made with love by <a target="_blank" rel="noopener noreferrer" href="https://github.com/m-m-e">m-m-e</a></p>
        {/* <a href="https://icons8.com/icon/59809/casa">Home icon by Icons8</a> */}
      </footer>
  );
}

export default Footer;
