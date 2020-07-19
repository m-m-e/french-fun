import React from 'react';
import { Link } from "@reach/router"
import './styles.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="header_menu">
        <ul className="header_menu-list">
          <li className="header_menu-item"><Link to="/">Home</Link></li>
          <li className="header_menu-item"><Link to="videos">Videos</Link></li>
          <li className="header_menu-item"><Link to="resources">Resources</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
