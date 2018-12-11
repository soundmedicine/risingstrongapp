import React, { Component } from 'react';
import './Feel.css';

export default class Feel extends Component {
  render() {
    return (
      <div className="feel">
        { this.props.children }
        <h1>I feel ...</h1>
        <ul>
          <li><button>afraid</button></li>
          <li><button>alone</button></li>
          <li><button>angry</button></li>
          <li><button>confused</button></li>
          <li><button>hurt</button></li>
          <li><button>resentful</button></li>
          <li><button>sad</button></li>
          
        </ul>
      </div>
    )
  }
}
