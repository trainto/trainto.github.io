import React, { useState, useEffect } from 'react';
import { scrollToId } from '../lib/utils';
import './nav.css';

const Nav = () => {
  const [isScrollOnTop, setIsScrollOnTop] = useState(true);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsScrollOnTop(false);
      } else {
        setIsScrollOnTop(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleNavClicked = (id: string) => {
    setCollapsed(true); // close nav

    scrollToId(id);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow ${isScrollOnTop ? '' : 'show'}`}
      id="nav-top"
    >
      <div
        className="navbar-brand cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
      >
        Hakjoon Sim
      </div>
      <button
        className={`navbar-toggler ${collapsed ? 'collapsed' : ''}`}
        type="button"
        onClick={() => setCollapsed(!collapsed)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`navbar-collapse collapse ${collapsed ? '' : 'show'}`}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <div className="nav-link cursor-pointer" onClick={() => handleNavClicked('about')}>
              About
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link cursor-pointer" onClick={() => handleNavClicked('portfolio')}>
              Portfolio
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link cursor-pointer" onClick={() => handleNavClicked('contribution')}>
              Contribution
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link cursor-pointer" onClick={() => handleNavClicked('blog')}>
              Blog
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
