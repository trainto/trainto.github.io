import React, { useState, useEffect } from 'react';
import './header.css';
import iconReturn from '../img/header-ic-return.png';

const STORAGE_KEY = 'last.login';
const command = 'cd .profile';

const Header = () => {
  const [lastLogin, setLastLogin] = useState('');
  const [typings, setTypings] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setTypings(command.substring(0, typings.length + 1));
    }, 200);
  }, [typings.length]);

  useEffect(() => {
    const lastLogin = localStorage.getItem(STORAGE_KEY);
    if (lastLogin) {
      setLastLogin(lastLogin);
    }

    localStorage.setItem(STORAGE_KEY, new Date().toString());
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
          <div>Welcome to iam.trainto.me</div>
          <br />

          <div className="text-truncate">
            {' '}
            * Source:{' '}
            <a href="https://github.com/trainto/trainto.github.io" target="_blank" rel="noopener noreferrer">
              https://github.com/trainto/trainto.github.io
            </a>
          </div>
          <div className="text-truncate">
            {' '}
            * Blog: &nbsp;&nbsp;<a href="https://trainto.me">https://trainto.me</a>
          </div>
          <div className="text-truncate">
            {' '}
            * Email: &nbsp;<a href="mailto:trainto@gmail.com">trainto (at) gmail.com</a>
          </div>
          <br />

          {lastLogin !== '' && (
            <>
              <div className="text-truncate mt-3">Last login: {lastLogin}</div>
              <br />
            </>
          )}

          <span className="directory-color font-bigger-2">~</span>
          <span className="point-color font-bigger-2">&raquo;</span>
          <span className="typewriter">&nbsp;{typings}</span>

          <input
            id="btn-return"
            type="image"
            className={`align-middle ml-2 ${command.length === typings.length ? 'show' : ''}`}
            src={iconReturn}
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
