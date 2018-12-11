import React, { Component } from 'react';
import Nav from './Nav';
import Feel from './Feel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
        <header className="App-header">
          <p className="info">
            Welcome to the Rising Strong app, here to help you navigate your emotional experience!
          </p>
          <a
            href=""
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's get you back on your feet!
          </a>
        </header>
        <Feel/>
      </div>
    );
  }
}

export default App;
