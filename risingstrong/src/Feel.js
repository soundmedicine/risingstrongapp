import React, { Component } from 'react';
import './Feel.css';

export default class Feel extends Component {
  render() {
    return (
      <div className="feel">
        { this.props.children }
        <h1>How are you feeling?</h1>
        <ul className="feelMenu">
          <li><button className="feel">afraid</button></li>
          <li><button className="feel">alone</button></li>
          <li><button className="feel">angry</button></li>
          <li><button className="feel">confused</button></li>
          <li><button className="feel">hurt</button></li>
          <li><button className="feel">resentful</button></li>
          <li><button className="feel">sad</button></li>
        </ul>
        <h2>And what is the story you're telling yourself?</h2>
      </div>
    )
  }
}
