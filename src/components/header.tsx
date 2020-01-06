import React, { useState, useEffect } from 'react';
import './header.css';

const command = 'cd .profile';

const Header = () => {
  const [time, setTime] = useState('');
  const [typings, setTypings] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setTypings(command.substring(0, typings.length + 1));
    }, 200);
  }, [typings.length]);

  useEffect(() => {
    setTime(new Date().toString());
  }, []);

  /*
  const handleRequestFullScreen = () => {
    const element: any = document.documentElement;
    const request =
      element.requestFullscreen ||
      element.webkitRequestFullscreen ||
      element.mozRequestFullScreen ||
      element.msRequestFullscreen;

    if (request) {
      request.call(element);
    } else {
      alert('Your browser does not support full screen mode.');
    }
  };
  */

  const handleReturnClicked = () => {
    const aboutSection = document.getElementById('about');
    const nav = document.getElementById('nav-top');
    if (!aboutSection || !nav) {
      return;
    }
    const navHeight = nav.getBoundingClientRect().height;
    const aboutSectionTop = aboutSection.getBoundingClientRect().top;
    window.scrollTo({
      top: aboutSectionTop - navHeight + window.pageYOffset,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="vh-100 p-2 d-flex align-items-center justify-content-center" id="home">
      <div className="terminal shadow">
        <div className="terminal-header d-flex">
          <div className="terminal-button-group">
            <span className="terminal-button red" />
            <span className="terminal-button yellow ml-1" />
            <span className="terminal-button green ml-1" />
          </div>
          <div className="terminal-title text-center">trainto: ~ (zsh)</div>
        </div>
        <div className="text-center py-5">
          <h1>
            Hello, I&apos;m <span className="highlite-color">Hakjoon Sim.</span>
            <br />
            I'm a developer.
          </h1>
        </div>
        <div className="mt-4 ml-3">
          <div>Welcome to trainto.me</div>
          <br />

          <div className="text-truncate"> * Source: &nbsp;&nbsp;&nbsp;https://github.com/trainto/trainto.github.io</div>
          <div className="text-truncate"> * Blog: &nbsp;https://hisblog.yoursun.me</div>
          <div className="text-truncate"> * Email: trainto (at) gmail.com</div>
          <br />

          <div className="text-truncate mt-3">Login: {time}</div>
          <br />

          <span className="directory-color font-bigger-2">~</span>
          <span className="point-color font-bigger-2">&raquo;</span>
          <span className="typewriter">&nbsp;{typings}</span>

          <input
            id="btn-return"
            type="image"
            className={`align-middle ml-2 ${command.length === typings.length ? 'show' : ''}`}
            src="/img/header-ic-return.png"
            alt="return"
            style={{ height: '18px' }}
            onClick={handleReturnClicked}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
