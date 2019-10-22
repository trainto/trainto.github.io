import React, { useState } from 'react';
import './about.css';

const About = () => {
  const [active, setActive] = useState('Skills');

  return (
    <section className="py-5 scroll-area" id="about">
      <div className="container">
        <div className="text-center">
          <div className="d-inline-block border-under">
            <h2 className="text-center font-weight-bold" id="h2-about">
              About
            </h2>
          </div>
          <div className="mt-3 mw-50">
            I am the Front-End developer for{' '}
            <a
              href="https://skplanet.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              SK planet
            </a>{' '}
            in Seongnam, Korea.
            <br />
            I also worked more than 5 years as Android developer.
            <br />
            I love programming, traveling and doing nothing. :)
          </div>
        </div>

        <div className="row mt-5">
          <div
            className={`col-12 col-md-3 text-center cursor-pointer ${
              active === 'Skills' ? 'font-weight-bold' : 'text-muted'
            }`}
            onClick={() => setActive('Skills')}
          >
            Skills
          </div>
          <div
            className={`col-12 col-md-3 text-center cursor-pointer ${
              active === 'Careers' ? 'font-weight-bold' : 'text-muted'
            }`}
            onClick={() => setActive('Careers')}
          >
            Careers
          </div>
          <div
            className={`col-12 col-md-3 text-center cursor-pointer ${
              active === 'Education' ? 'font-weight-bold' : 'text-muted'
            }`}
            onClick={() => setActive('Education')}
          >
            Education
          </div>
          <div
            className={`col-12 col-md-3 text-center cursor-pointer ${
              active === 'Papers' ? 'font-weight-bold' : 'text-muted'
            }`}
            onClick={() => setActive('Papers')}
          >
            Papers
          </div>
        </div>
      </div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
      <div>blah..</div>
    </section>
  );
};

export default About;
