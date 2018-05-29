import React, { Component } from 'react';
import '../styles/App.css';

class Square extends Component {
  constructor(props) {
    super(props)

    this.state = {
      empty: this.props.squareProp,
    }
  }

  // playerO() => {
  //
  // }

  render() {
    console.log('this.props', this.props.squareProps);
    return (
      <div className="square" onClick={e => this.setState({ empty: "x" })}>
        {this.state.empty}
      </div>
    );
  }
}

export default Square;
