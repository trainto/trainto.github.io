import { memo, useCallback, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { useScroll } from '../common/custom-hooks';
import CrypExit from './crypexit';

const SideProject = memo(({ title }: { title: string }) => {
  const [active, setActive] = useState('CrypExit');

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

  const renderSwitcher = useCallback((active: string) => {
    switch (active) {
      case 'CrypExit':
        return <CrypExit />;
      default:
        return null;
    }
  }, []);

  return (
    <section ref={ref} className="py-5 scroll-area" id={title}>
      <div className="container">
        <div className="text-center">
          <animated.div className="d-inline-block border-under" style={h2AniProps}>
            <h2 className="text-center font-weight-bold" id="h2-portfolio">
              Side Project
            </h2>
          </animated.div>
        </div>

        <animated.div style={contentAniProps}>
          <div className="row mt-5 justify-content-center">
            <div
              className={`col-12 col-md-3 text-center cursor-pointer ${
                active === 'CrypExit' ? 'font-weight-bold active' : 'text-muted'
              }`}
              onClick={() => setActive('CrypExit')}
            >
              CrypExit
            </div>
          </div>

          <hr />

          {renderSwitcher(active)}
        </animated.div>
      </div>
    </section>
  );
});

export default SideProject;
