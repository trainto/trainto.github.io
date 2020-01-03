import React, { useState } from 'react';
import Careers from './careers';
import Education from './education';
import Papers from './papers';
import './about.css';

const renderSwitcher = (active: string) => {
  switch (active) {
    case 'Careers':
      return <Careers />;
    case 'Education':
      return <Education />;
    case 'Papers':
      return <Papers />;
    default:
      break;
  }
};

const About = () => {
  const [active, setActive] = useState('Careers');

  return (
    <section className="py-5 scroll-area" id="about">
      <div className="container">
        <div className="text-center">
          <div className="d-inline-block border-under">
            <h2 className="text-center font-weight-bold" id="h2-about">
              About
            </h2>
          </div>

          <div className="row">
            <div className="col-12 col-md-4 mt-3 text-center">
              <img
                src="/img/joon.jpg"
                className="img-fluid rounded-circle shadow"
                alt="Hakjoon"
                style={{ maxWidth: '60%' }}
              />
            </div>
            <div className="col-12 col-md-8 mt-3 text-left align-self-center">
              I am the Front-End developer for{' '}
              <a href="https://skplanet.com" target="_blank" rel="noopener noreferrer">
                SK planet
              </a>{' '}
              in Seongnam, Korea.
              <br />
              I also worked more than 5 years as Android developer.
              <br />I love programming, traveling and doing nothing. :)
            </div>
          </div>
        </div>

        <div className="row mt-5 justify-content-center">
          <div
            className={`col-12 col-md-3 text-center cursor-pointer ${
              active === 'Careers' ? 'font-weight-bold active' : 'text-muted'
            }`}
            onClick={() => setActive('Careers')}
          >
            Careers
          </div>
          <div
            className={`col-12 col-md-3 text-center cursor-pointer ${
              active === 'Education' ? 'font-weight-bold active' : 'text-muted'
            }`}
            onClick={() => setActive('Education')}
          >
            Education
          </div>
          <div
            className={`col-12 col-md-3 text-center cursor-pointer ${
              active === 'Papers' ? 'font-weight-bold active' : 'text-muted'
            }`}
            onClick={() => setActive('Papers')}
          >
            Papers
          </div>
        </div>

        <hr className="mb-5" />

        {renderSwitcher(active)}
      </div>
    </section>
  );
};

export default About;
