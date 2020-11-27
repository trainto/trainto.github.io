import React from 'react';
import imgInstagram from '../img/instagram.png';
import imgFacebook from '../img/facebook.png';
import imgTwitter from '../img/twitter.png';
import imgLinkedIn from '../img/linkedin.png';
import imgGithub from '../img/github.png';

const Footer = () => {
  return (
    <footer>
      <div className="container py-5">
        <hr style={{ backgroundColor: '#1ce492' }} />
        <div className="d-flex justify-content-between">
          <div>
            <a href="https://instagram.com/hakjoon_sim" target="_blank" rel="noopener noreferrer">
              <img className="sns" src={imgInstagram} alt="instagram" />
            </a>
            <a className="ml-1" href="https://facebook.com/hakjoon.sim" target="_blank" rel="noopener noreferrer">
              <img className="sns" src={imgFacebook} alt="facebook" />
            </a>
            <a className="ml-1" href="https://twitter.com/trainto" target="_blank" rel="noopener noreferrer">
              <img className="sns" src={imgTwitter} alt="twitter" />
            </a>
            <a className="ml-1" href="https://linkedin.com/in/hakjoon-sim/" target="_blank" rel="noopener noreferrer">
              <img className="sns" src={imgLinkedIn} alt="linkedin" />
            </a>
            <a className="ml-1" href="https://github.com/trainto" target="_blank" rel="noopener noreferrer">
              <img className="sns" src={imgGithub} alt="github" />
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
