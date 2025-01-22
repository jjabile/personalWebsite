import React from 'react';
import './Header.css'; // For styling

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#get-to-know-me">Get to Know Me</a></li>
          <li><a href="#music">Music</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
