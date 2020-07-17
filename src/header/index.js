import React from 'react';
import './styles.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="header_menu">
        <ul className="header_menu-list">
          <li className="header_menu-item"><a href="#welcome">Home</a></li>
          <li className="header_menu-item"><a href="#videos">Videos</a></li>
          <li className="header_menu-item"><a href="#resources">Resources</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;