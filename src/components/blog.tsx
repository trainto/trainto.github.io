import React, { useEffect, useState } from 'react';

const BLOG_HOST = 'https://hisblog.yoursun.me';

interface IPost {
  title: string;
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
          }

          const postArr = Array.from(el.getElementsByClassName('blog-post'));
          console.log(postArr);
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
            <li key={i}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                {post.title}
              </a>
              <br />
              <span className="ml-2 text-muted">
                Journal of Korean Institute of Intelligent Systems, 2010, 2nd
                author
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
