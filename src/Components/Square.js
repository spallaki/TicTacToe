import React, { Component } from 'react';
import '../styles/App.css';

class Square extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: "",
    }
  }

  // playerO() {
  //   // randomly generate an O in any squares that are not filled
  //   // and is called when the onClick on square div is triggered
  //   console.log('i am an o');
  // }

  onChangeSquare() {
    this.props.onClickSquare(this.props.idx);
    this.setState({
      clicked: this.props.turn,
    })
  }

  render() {
    // console.log('this.props SQUARE', this.props);
    return (
      <div className="square" onClick={() => this.onChangeSquare()}>
        {this.state.clicked}
      </div>
    );
  }
}

export default Square;
