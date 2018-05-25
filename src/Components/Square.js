import React, { Component } from 'react';
import '../styles/App.css';

class Square extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="square">
        {this.props.square}
      </div>
    );
  }
}

export default Square;
