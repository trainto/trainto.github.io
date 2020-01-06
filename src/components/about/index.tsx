import React, { useState, useEffect, useRef } from 'react';
import Careers from './careers';
import Education from './education';
import Papers from './papers';
import { useSpring, animated } from 'react-spring';
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
  const [onScreen, setOnScreen] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (onScreen) {
      return;
    }

    const handleScroll = () => {
      if (sectionRef.current) {
        const top = sectionRef.current.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.7 && !onScreen) {
          setOnScreen(true);
        }
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onScreen]);

  const h2AniProps = useSpring({
    opacity: onScreen ? 1 : 0,
    transform: onScreen ? 'translateX(0%)' : 'translateX(-100%)',
    from: { opacity: 0, transform: 'translateX(-100%)' }
  });

  const imgAniProps = useSpring({
    transform: onScreen ? 'translateY(0%)' : 'translateY(200%)',
    opacity: onScreen ? 1 : 0,
    from: { opacity: 0, transform: 'translateY(200%)' }
  });

  const descAniProps = useSpring({
    transform: onScreen ? 'rotate(1turn)' : 'rotate(0turn)',
    opacity: onScreen ? 1 : 0,
    from: { opacity: 0, transform: 'rotate(0turn)' }
  });

  const contentAniProps = useSpring({
    transform: onScreen ? 'translateY(0%)' : 'translateY(50%)',
    opacity: onScreen ? 1 : 0,
    from: { transform: 'translateY(50%)' }
  });

  return (
    <section ref={sectionRef} className="py-5 scroll-area" id="about">
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
                src="/img/joon.jpg"
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
