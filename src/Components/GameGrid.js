import React, { Component } from 'react';
import '../styles/App.css';
import Square from "../Components/Square";

class GameGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('this.props GAMEGRID', this.props);
    return (
      <div className="game-outline">
        {
          this.props.squares.map((square, idx) => (
            // id is the index of the "" in the array .map()
            <Square
              key={idx}
              idx={idx}
              turn={this.props.turn}
              onClickSquare={this.props.onClick}
            />
          ))
        }
      </div>
    );
  }
}

export default GameGrid;
