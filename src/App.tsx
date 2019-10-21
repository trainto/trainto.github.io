import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/header';
import Nav from './components/nav';

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Header />

      <div>hehe</div>
      <div>hehe</div>
      <div>hehe</div>
      <div>hehe</div>
    </div>
  );
};

export default App;
