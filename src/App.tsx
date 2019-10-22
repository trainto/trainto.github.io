import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nav from './components/nav';
import Header from './components/header';
import About from './components/about';
import Portfolio from './components/portfolio';
import Blog from './components/blog';
import Footer from './components/footer'

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Portfolio />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
