import React, { Component } from 'react';
import '../styles/App.css';

class Square extends Component {
  render() {
    return (
      <div className="square">
        {this.props.square}
      </div>
    );
  }
}

export default Square;
