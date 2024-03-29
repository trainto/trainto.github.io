import { useSpring, animated } from 'react-spring';
import { useScroll } from './common/custom-hooks';
import githubImg from '../img/github.png';
import { memo } from 'react';

const CONTRIBUTIONS = [
  {
    site: 'github',
    repo: 'transmission/transmission',
    text: 'fix(web): some style edited',
    link: 'https://github.com/transmission/transmission/pull/1529',
  },
  {
    site: 'github',
    repo: 'denoland/deno_website2',
    text: 'style: add border radius to .prism-code',
    link: 'https://github.com/denoland/deno_website2/pull/1713',
  },
  {
    site: 'github',
    repo: 'denoland/deno_website2',
    text: 'fix: broken link in benchmarks',
    link: 'https://github.com/denoland/deno_website2/pull/1707',
  },
  {
    site: 'github',
    repo: 'securingsincity/react-ace',
    text: 'chore(package): add React 17 support',
    link: 'https://github.com/securingsincity/react-ace/pull/967',
  },
  {
    site: 'github',
    repo: 'facebook/create-react-app',
    text: 'chore: bump versions of typescript and some @types',
    link: 'https://github.com/facebook/create-react-app/pull/10141',
  },
  {
    site: 'github',
    repo: 'transmission/transmission',
    text: 'chore(web): get rid of webpack-dev-server warning',
    link: 'https://github.com/transmission/transmission/pull/1502',
  },
  {
    site: 'github',
    repo: 'transmission/transmission',
    text: 'chore(web): dev environment',
    link: 'https://github.com/transmission/transmission/pull/1489',
  },
  {
    site: 'github',
    repo: 'transmission/transmission',
    text: 'fix: overflow menu should be closed when click it once again',
    link: 'https://github.com/transmission/transmission/pull/1485',
  },
  {
    site: 'github',
    repo: 'weskinner/symbol-gen',
    text: 'Add keybinding for windows and linux',
    link: 'https://github.com/weskinner/symbol-gen/pull/48',
  },
];

const Contribution = memo(({ title }: { title: string }) => {
  const { ref, onScreen } = useScroll<HTMLElement>();

  const h2AniProps = useSpring({
    transform: onScreen ? 'rotate(0deg)' : 'rotate(360deg)',
    opacity: onScreen ? 1 : 0,
    from: { transform: 'rotate(0deg)' },
  });

  const contentAniProps = useSpring({
    transform: onScreen ? 'translateY(0%)' : 'translateY(50%)',
    opacity: onScreen ? 1 : 0,
    from: { transform: 'translateY(50%)' },
  });

  return (
    <section ref={ref} className="py-5 scroll-area" id={title}>
      <div className="container">
        <div className="text-center">
          <animated.div className="d-inline-block border-under" style={h2AniProps}>
            <h2 className="text-center font-weight-bold" id="h2-blog">
              {title}
            </h2>
          </animated.div>
          <div className="mt-3">
            <small className="text-muted">Open source contributions</small>
          </div>
        </div>

        <animated.div style={contentAniProps}>
          <ul className="mt-5">
            {CONTRIBUTIONS.map((cont, i) => (
              <li className="mt-3" key={i}>
                <img src={githubImg} alt="github" width="20" height="20" />
                <span className="ml-2 mr-2">{cont.repo},</span>
                <a href={cont.link} target="_blank" rel="noopener noreferrer">
                  {cont.text}
                </a>
              </li>
            ))}
          </ul>
        </animated.div>
      </div>
    </section>
  );
});

export default Contribution;
