import React from 'react';
import Terminal from './terminal';
import './header.css';

const Header = () => {
  return (
    <header className="vh-100 p-2 d-flex align-items-center justify-content-center" id="home">
      <Terminal />
    </header>
  );
};

export default Header;
