import React, { useState } from 'react';
import FullStack from './full-stack';
import './portfolio.css';

const renderSwitcher = (active: string) => {
  switch (active) {
  case 'Full-Stack':
    return <FullStack />;
  default:
    return null;
  }
};

const Portfolio = () => {
  const [active, setActive] = useState('Full-Stack');

  return (
    <section className="py-5 bg-light-gray scroll-area" id="portfolio">
      <div className="container">
        <div className="text-center">
          <div className="d-inline-block border-under">
            <h2 className="text-center font-weight-bold" id="h2-portfolio">
              Portfolio
            </h2>
          </div>
        </div>

        <div className="row mt-5 justify-content-center">
          <div
            className={`col-12 col-md-3 text-center cursor-pointer ${
              active === 'Full-Stack' ? 'font-weight-bold active' : 'text-muted'
            }`}
            onClick={() => setActive('Full-Stack')}
          >
            Full-Stack
          </div>
          <div
            className={`col-12 col-md-3 text-center cursor-pointer ${
              active === 'Front-End' ? 'font-weight-bold active' : 'text-muted'
            }`}
            onClick={() => setActive('Front-End')}
          >
            Front-End
          </div>
          <div
            className={`col-12 col-md-3 text-center cursor-pointer ${
              active === 'Android' ? 'font-weight-bold active' : 'text-muted'
            }`}
            onClick={() => setActive('Android')}
          >
            Android
          </div>
        </div>

        <hr />

        {renderSwitcher(active)}
      </div>
    </section>
  );
};

export default Portfolio;
