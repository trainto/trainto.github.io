import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container py-5">
        <hr style={{ backgroundColor: '#1ce492' }} />
        <div className="d-flex justify-content-between">
          <div>
            <a href="https://instagram.com/hakjoon_sim" target="_blank" rel="noopener noreferrer">
              <img className="sns" src={require('../img/instagram.png')} alt="instagram" />
            </a>
            <a className="ml-1" href="https://facebook.com/hakjoon.sim" target="_blank" rel="noopener noreferrer">
              <img className="sns" src={require('../img/facebook.png')} alt="instagram" />
            </a>
            <a className="ml-1" href="https://twitter.com/trainto" target="_blank" rel="noopener noreferrer">
              <img className="sns" src={require('../img/twitter.png')} alt="instagram" />
            </a>
            <a className="ml-1" href="https://linkedin.com/in/hakjoon-sim/" target="_blank" rel="noopener noreferrer">
              <img className="sns" src={require('../img/linkedin.png')} alt="instagram" />
            </a>
            <a className="ml-1" href="https://github.com/trainto" target="_blank" rel="noopener noreferrer">
              <img className="sns" src={require('../img/github.png')} alt="instagram" />
            </a>
          </div>
          <div>
            Hakjoon Sim&nbsp;<span className="highlite-color">&copy;2020</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
