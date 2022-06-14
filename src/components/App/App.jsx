import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <img src={logo} className="App-logo" alt="logo" />
      <div className="container">
        <div className="blurb">
          <h1>Hi there, I'm Kheda!</h1>
          <p>
            I'm best known as the horrible cop from
            <em>A Touch of Evil</em>
            {' '}
            Don't trust me.
            <a href="/about">
              Read
              more about my life...
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
