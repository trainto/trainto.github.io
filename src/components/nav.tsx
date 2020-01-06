import React, { useState, useEffect } from 'react';
import './nav.css';

const Nav = () => {
  const [isScrollOnTop, setIsScrollOnTop] = useState(true);
  const [currentScroll, setCurrentScroll] = useState('home');
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsScrollOnTop(false);
      } else {
        setIsScrollOnTop(true);
      }

      const areas = document.getElementsByClassName('scroll-area');

      let maxPortion = 0;
      let currentOnScreen = '';
      for (let i = 0; i < areas.length; i += 1) {
        const area = areas.item(i);
        if (!area) {
          continue;
        }

        const rect = area.getBoundingClientRect();
        const portion = rect.height - Math.abs(rect.top);
        if (portion <= 0) {
          continue;
        }

        if (portion > maxPortion) {
          maxPortion = portion;
          currentOnScreen = area.id;
        }
      }

      if (currentOnScreen !== currentScroll) {
        setCurrentScroll(currentOnScreen);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const nav = document.getElementById('nav-top');
  const navHeight = nav ? nav.getBoundingClientRect().height : 0;

  const handleNavClicked = (id: string) => {
    setCollapsed(true); // close nav

    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    const targetTop = target.getBoundingClientRect().top;

    window.scrollTo({
      top: targetTop - navHeight + window.pageYOffset,
      left: 0,
      behavior: 'smooth'
    });
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
          <li className={`nav-item ${currentScroll === 'about' ? 'active' : ''}`}>
            <div className="nav-link cursor-pointer" onClick={() => handleNavClicked('about')}>
              About
            </div>
          </li>
          <li className={`nav-item ${currentScroll === 'portfolio' ? 'active' : ''}`}>
            <div className="nav-link cursor-pointer" onClick={() => handleNavClicked('portfolio')}>
              Portfolio
            </div>
          </li>
          <li className={`nav-item ${currentScroll === 'blog' ? 'active' : ''}`}>
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
