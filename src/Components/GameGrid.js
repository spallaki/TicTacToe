import React, { Component } from 'react';
import '../styles/App.css';
import Square from "../Components/Square";

class GameGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: ["", "", "", "", "x", "", "", "", ""],
    };
  }

  render() {
    return (
      <div className="game-outline">
        {
          this.state.squares.map((square, idx) => (
            <Square id={idx} square={square} />
          ))
        }
      </div>
    );
  }
}

export default GameGrid;
