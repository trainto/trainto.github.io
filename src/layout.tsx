import Nav from './components/nav';
import Header from './components/header';
import About from './components/about';
import Portfolio from './components/portfolio';
import Blog from './components/blog';
import Footer from './components/footer';
import Contribution from './components/contribution';
import { observer } from 'mobx-react-lite';
import { useStore } from './store';

const Layout = observer(() => {
  const store = useStore();

  return (
    <>
      <Nav />
      <Header />

      {store.sections
        .filter((section) => section.from === 'about')
        .map((about) => (
          <About title={about.title} key={about.title} />
        ))}

      {store.sections
        .filter((section) => section.from === 'portfolio')
        .map((portfolio) => (
          <Portfolio title={portfolio.title} key={portfolio.title} />
        ))}

      {store.sections
        .filter((section) => section.from === 'contribution')
        .map((contribution) => (
          <Contribution title={contribution.title} key={contribution.title} />
        ))}

      {store.sections
        .filter((section) => section.from === 'blog')
        .map((blog) => (
          <Blog title={blog.title} key={blog.title} />
        ))}

      <Footer />
    </>
  );
});

export default Layout;
