import { memo, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useScroll } from './common/custom-hooks';

const BLOG_HOST = 'https://heyjoon.dev/';
const LIST_COUNT_TO_SHOW = 10;

type Post = {
  title: string;
  date: string;
  link: string;
};

const Blog = memo(({ title }: { title: string }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const { ref, onScreen } = useScroll<HTMLElement>();

  // Fetch blog main html and parse recent posts
  useEffect(() => {
    const fetchRecenPosts = async () => {
      try {
        const res = await fetch(BLOG_HOST);
        if (res.ok && res.body) {
          const page = await res.text();
          const el = document.createElement('html');
          const match = page.match(/<body>.*<\/body>/is);
          if (match) {
            el.innerHTML = match[0];
          } else {
            return;
          }

          const postArrAll = Array.from(el.getElementsByTagName('article'));
          const postArr = postArrAll.slice(0, LIST_COUNT_TO_SHOW);

          const postsParsed: Post[] = [];
          postArr.forEach((post) => {
            const title = (post.querySelector('header h3 a') as HTMLElement).innerText;
            const date = (post.querySelector('small') as HTMLElement).innerText;
            const link = (post.querySelector('header h3 a') as HTMLAnchorElement).href;

            postsParsed.push({
              title,
              date: date.split('|')[0].trim(),
              link: link.replace(/https?:\/\/.*?\//i, BLOG_HOST),
            });
          });

          if (postsParsed.length > 0) {
            setPosts(postsParsed);
          }
        }
      } catch (err) {
        // do Nothing
      }
    };

    fetchRecenPosts();
  }, []);

  const h2AniProps = useSpring({
    transform: onScreen ? 'rotate(360deg)' : 'rotate(0deg)',
    opacity: onScreen ? 1 : 0,
    from: { transform: 'rotate(0deg)' },
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
            <h2 className="text-center font-weight-bold" id="h2-blog">
              {title}
            </h2>
          </animated.div>
        </div>

        <animated.div style={contentAniProps}>
          <ul className="mt-5">
            {posts.map((post, i) => (
              <li className="mt-3" key={i}>
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
                <small className="ml-2 text-muted">- {post.date}</small>
              </li>
            ))}
          </ul>

          <div className="mt-3 text-center">
            <a href={BLOG_HOST + '2'} target="_blank" rel="noopener noreferrer" className="text-muted">
              more...
            </a>
          </div>
        </animated.div>
      </div>
    </section>
  );
});

export default Blog;
