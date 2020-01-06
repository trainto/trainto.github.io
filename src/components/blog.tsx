import React, { useEffect, useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './blog.css';

const BLOG_HOST = 'https://hisblog.yoursun.me/';

interface IPost {
  title: string;
  date: string;
  link: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
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

          const postArr = Array.from(el.getElementsByClassName('blog-post'));

          const postsParsed: IPost[] = [];
          postArr.forEach(post => {
            const title = (post.getElementsByClassName('blog-post-title').item(0) as HTMLElement).innerText;
            const date = (post.getElementsByClassName('blog-post-meta').item(0) as HTMLElement).innerText;
            const link = post.getElementsByTagName('a')[0].href;

            postsParsed.push({
              title,
              date: date.split('|')[0].trim(),
              link: link.replace(/http:\/\/.*?\//i, BLOG_HOST)
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
    from: { transform: 'rotate(0deg)' }
  });

  const contentAniProps = useSpring({
    transform: onScreen ? 'translateY(0%)' : 'translateY(50%)',
    opacity: onScreen ? 1 : 0,
    from: { transform: 'translateY(50%)' }
  });

  return (
    <section ref={sectionRef} className="py-5 scroll-area" id="blog">
      <div className="container">
        <div className="text-center">
          <animated.div className="d-inline-block border-under" style={h2AniProps}>
            <h2 className="text-center font-weight-bold" id="h2-blog">
              Blog
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
        </animated.div>
      </div>
    </section>
  );
};

export default Blog;
