import React, { Component } from 'react';
import Nav from './Nav';
import Feel from './Feel';
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      toggleFeel: false
    }
  }

  toggleViewFeel = () => {
    this.setState({
      toggleFeel: true
    })
  }
  render() {
    return (
      <div className="App">
      <Nav
        toggleFeel={this.toggleViewFeel}
      />
        <header className="App-header">
          <p className="info">
            Welcome to the Rising Strong app, here to help you navigate your emotional experience!
          </p>
          <p>Let's get you back on your feet!</p>
        </header>
        {this.state.toggleFeel && <Feel/>}
      </div>
    );
  }
}

