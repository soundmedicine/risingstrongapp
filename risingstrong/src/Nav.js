import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav-extended cornflowerblue">
        <div className="nav-wrapper">
          <a href="" className="brand-logo center blue-text">
            Rising Strong
          </a>
        </div>
        <div className="nav-content center">
          <ul className="tabs tabs-transparent">
            <li className="tab">
              <a onClick={this.props.toggleSearch}>
                I Feel ...
              </a>
            </li>
            <li className="tab">
              <a onClick={this.props.toggleAdd}>
                Add Emotion
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}