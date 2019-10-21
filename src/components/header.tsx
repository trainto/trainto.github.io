import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="min-vh-100 d-flex justify-content-center align-items-center text-center">
      <h1>
        Hello, I&apos;m <span className="highlite">Hakjoon Sim.</span>
        <br />
        I'm a developer.
      </h1>
    </header>
  );
};

export default Header;
