import React, { useState } from 'react';
import Careers from './careers';
import Education from './education';
import Papers from './papers';
import { useSpring, animated } from 'react-spring';
import { useScroll } from '../common/custom-hooks';

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

  const { ref, onScreen } = useScroll<HTMLElement>();

  const h2AniProps = useSpring({
    opacity: onScreen ? 1 : 0,
    transform: onScreen ? 'translateX(0%)' : 'translateX(-50%)',
    from: { opacity: 0, transform: 'translateX(-50%)' }
  });

  const imgAniProps = useSpring({
    transform: onScreen ? 'translateY(0%)' : 'translateY(200%)',
    opacity: onScreen ? 1 : 0,
    from: { opacity: 0, transform: 'translateY(200%)' }
  });

  const descAniProps = useSpring({
    /*
    transform: onScreen ? 'rotate(1turn)' : 'rotate(0turn)',
    opacity: onScreen ? 1 : 0,
    from: { opacity: 0, transform: 'rotate(0turn)' }
    */
    transform: onScreen ? 'translateY(0%)' : 'translateY(50%)',
    opacity: onScreen ? 1 : 0,
    from: { transform: 'translateY(50%)' }
  });

  const contentAniProps = useSpring({
    transform: onScreen ? 'translateY(0%)' : 'translateY(50%)',
    opacity: onScreen ? 1 : 0,
    from: { transform: 'translateY(50%)' }
  });

  return (
    <section ref={ref} className="py-5 scroll-area" id="about">
      <div className="container">
        <div className="text-center">
          <animated.div className="d-inline-block border-under" style={h2AniProps}>
            <h2 className="text-center font-weight-bold" id="h2-about">
              About
            </h2>
          </animated.div>

          <div className="row">
            <animated.div className="col-12 col-md-4 mt-3 text-center" style={imgAniProps}>
              <img
                src={require('../../img/joon.jpg')}
                className="img-fluid rounded-circle shadow"
                alt="Hakjoon"
                style={{ maxWidth: '60%' }}
              />
            </animated.div>
            <animated.div className="col-12 col-md-8 mt-3 text-left align-self-center" style={descAniProps}>
              I am the Front-End developer for{' '}
              <a href="https://skplanet.com" target="_blank" rel="noopener noreferrer">
                SK planet
              </a>{' '}
              in Seongnam, Korea.
              <br />
              I also worked more than 5 years as Android developer.
              <br />I love programming, traveling and doing nothing. :)
            </animated.div>
          </div>
        </div>

        <animated.div style={contentAniProps}>
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
        </animated.div>
      </div>
    </section>
  );
};

export default About;
