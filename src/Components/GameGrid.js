import React, { Component } from 'react';
import '../styles/App.css';
import Square from "../Components/Square";

class GameGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      emptySquares: 9,
      // if emptySquares = 0 -> set gameOver: true & display winner
    };
  }


  render() {
    console.log('squares state', this.state);
    return (
      <div className="game-outline">
        {
          this.state.squares.map((square, idx) => (
            // each square has a an "" value through squareProps and an id 0->8
            <Square id={idx} squareProp={square} />
          ))
        }
      </div>
    );
  }
}

export default GameGrid;
