import React, { useState, useEffect } from "react";
import "./nav.css";

const Nav = () => {
  const [scrolltop, setScrollTop] = useState(true);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setScrollTop(false);
    } else {
      setScrollTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-dark bg-dark ${
        scrolltop ? "" : "show"
      }`}
    >
      <div className="navbar-brand">Hakjoon Sim</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <div className="nav-link">
              About <span className="sr-only">(current)</span>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">Portfolio</div>
          </li>
          <li className="nav-item">
            <div className="nav-link">Blog</div>
          </li>
        </ul>
        <div>
          <a
            href="https://instagram.com/hakjoon_sim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="sns" src="/img/instagram.png" alt="instagram" />
          </a>
          <a
            className="ml-1"
            href="https://facebook.com/hakjoon.sim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="sns" src="/img/facebook.png" alt="instagram" />
          </a>
          <a
            className="ml-1"
            href="https://twitter.com/trainto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="sns" src="/img/twitter.png" alt="instagram" />
          </a>
          <a
            className="ml-1"
            href="https://linkedin.com/in/hakjoon-sim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="sns" src="/img/linkedin.png" alt="instagram" />
          </a>
          <a
            className="ml-1"
            href="https://github.com/trainto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="sns" src="/img/github.png" alt="instagram" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
