import React, { useState, useEffect } from "react";
import "./header.css";

const command = "cat .profile";

const Header = () => {
  const [typings, setTypings] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setTypings(command.substring(0, typings.length + 1));
    }, 200);
  }, [typings.length]);

  const handleReturnClicked = () => {
    const aboutSection = document.getElementById("about");
    const nav = document.getElementById("nav-top");
    if (!aboutSection || !nav) {
      return;
    }
    const navHeight = nav.getBoundingClientRect().height;
    const aboutSectionTop = aboutSection.getBoundingClientRect().top;
    window.scrollTo({ top: aboutSectionTop - navHeight + window.pageYOffset, left: 0, behavior: "smooth" });
  };

  return (
    <header className="min-vh-100 d-flex justify-content-center align-items-center text-center">
      <div className="flex-colum">
        <h1>
          Hello, I&apos;m <span className="highlite-color">Hakjoon Sim.</span>
          <br />
          I'm a developer.
        </h1>
        <div className="d-inline-block w-60 mt-3 text-left">
          <div className="d-flex align-items-center">
            <span className="directory-color font-bigger-2">~</span>
            <span className="point-color font-bigger-2">&raquo;</span>
            <span className="typewriter">&nbsp;{typings}</span>

            <input
              id="btn-return"
              type="image"
              className={`ml-2 ${
                command.length === typings.length ? "show" : ""
              }`}
              src="/img/header-ic-return.png"
              alt="return"
              style={{ height: "18px" }}
              onClick={handleReturnClicked}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
