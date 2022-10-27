import { memo, useState } from 'react';
import FullStack from './full-stack';
import FrontEnd from './front-end';
import Android from './android';
import { useSpring, animated } from 'react-spring';
import { useScroll } from '../common/custom-hooks';

const renderSwitcher = (active: string) => {
  switch (active) {
    case 'Full-Stack':
      return <FullStack />;
    case 'Front-End':
      return <FrontEnd />;
    case 'Android':
      return <Android />;
    default:
      return null;
  }
};

const Portfolio = memo(({ title }: { title: string }) => {
  const [active, setActive] = useState('Full-Stack');

  const { ref, onScreen } = useScroll<HTMLElement>();

  const h2AniProps = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0 },
    opacity: onScreen ? 1 : 0,
  });

  const contentAniProps = useSpring({
    transform: onScreen ? 'translateY(0%)' : 'translateY(50%)',
    opacity: onScreen ? 1 : 0,
    from: { transform: 'translateY(50%)' },
  });

  return (
    <section ref={ref} className="py-5 scroll-area bg-light-gray" id={title}>
      <div className="container">
        <div className="text-center">
          <animated.div className="d-inline-block border-under" style={h2AniProps}>
            <h2 className="text-center font-weight-bold" id="h2-portfolio">
              {title}
            </h2>
          </animated.div>
        </div>

        <animated.div style={contentAniProps}>
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
        </animated.div>
      </div>
    </section>
  );
});

export default Portfolio;
