import React, { useState, useEffect } from "react";
import "./nav.css";

const Nav = () => {
  const [isScrollOnTop, setIsScrollOnTop] = useState(true);
  const [currentScroll, setCurrentScroll] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsScrollOnTop(false);
      } else {
        setIsScrollOnTop(true);
      }

      const areas = document.getElementsByClassName("scroll-area");

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  let navHeight = 0;

  const handleNavClicked = (id: string) => {
    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    const targetTop = target.getBoundingClientRect().top;

    if (!navHeight) {
      const nav = document.getElementById("nav-top");
      if (nav) {
        navHeight = nav.getBoundingClientRect().height;
      }
    }

    window.scrollTo({
      top: targetTop - navHeight + window.pageYOffset,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow ${
        isScrollOnTop ? "" : "show"
      }`}
      id="nav-top"
    >
      <div
        className="navbar-brand cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        Hakjoon Sim
      </div>
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
          <li
            className={`nav-item ${currentScroll === "about" ? "active" : ""}`}
          >
            <div
              className="nav-link cursor-pointer"
              onClick={() => handleNavClicked("about")}
            >
              About
            </div>
          </li>
          <li
            className={`nav-item ${
              currentScroll === "portfolio" ? "active" : ""
            }`}
          >
            <div
              className="nav-link cursor-pointer"
              onClick={() => handleNavClicked("portfolio")}
            >
              Portfolio
            </div>
          </li>
          <li
            className={`nav-item ${currentScroll === "blog" ? "active" : ""}`}
          >
            <div
              className="nav-link cursor-pointer"
              onClick={() => handleNavClicked("blog")}
            >
              Blog
            </div>
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
