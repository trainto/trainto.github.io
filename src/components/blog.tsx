import React, { useEffect, useState } from 'react';
import './blog.css';

const BLOG_HOST = 'https://hisblog.yoursun.me/';

interface IPost {
  title: string;
  date: string;
  link: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

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

  return (
    <section className="py-5 scroll-area" id="blog">
      <div className="container">
        <div className="text-center">
          <div className="d-inline-block border-under">
            <h2 className="text-center font-weight-bold" id="h2-blog">
              Blog
            </h2>
          </div>
        </div>

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
      </div>
    </section>
  );
};

export default Blog;
