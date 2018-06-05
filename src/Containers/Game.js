import React, { Component } from 'react';
import '../styles/App.css';
import GameGrid from "../Components/GameGrid";
import { Link } from "react-router-dom";

class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // this is the overall game, so what do you need to know?
      gameOver: false,
      turn: "x",
      squares: ["", "", "", "", "", "", "", "", ""],
    }
  }

  // need the onClick here bc this is where you modify state
  onClick(clickedId) {
    // console.log('clickedId', this.state);
      let squaresCopy = this.state.squares.slice();
      squaresCopy[clickedId] = this.state.turn;
      let updateTurn = this.state.turn === "x" ? "o" : "x";

      // [x, x, x, o, x, o, o, x, o]
      // loop through the squares array after every click
        // if 012, 345, 678 -> winner, diff of 1
        // if 036, 147, 258 -> winner, diff of 3
        // if 048, 246 -> winner, diff of 4 or 2

      if (squaresCopy[0] === this.state.turn && squaresCopy[1] === this.state.turn && squaresCopy[2] === this.state.turn) {
        this.setState({
          gameOver: true,
        })
      }

      if (squaresCopy[3] === this.state.turn && squaresCopy[4] === this.state.turn && squaresCopy[5] === this.state.turn) {
        this.setState({
          gameOver: true,
        })
      }

      if (squaresCopy[6] === this.state.turn && squaresCopy[7] === this.state.turn && squaresCopy[8] === this.state.turn) {
        this.setState({
          gameOver: true,
        })
      }

      if (squaresCopy[0] === this.state.turn && squaresCopy[4] === this.state.turn && squaresCopy[8] === this.state.turn) {
        this.setState({
          gameOver: true,
        })
      }

      if (squaresCopy[2] === this.state.turn && squaresCopy[4] === this.state.turn && squaresCopy[6] === this.state.turn) {
        this.setState({
          gameOver: true,
        })
      }

      if (squaresCopy[1] === this.state.turn && squaresCopy[4] === this.state.turn && squaresCopy[7] === this.state.turn) {
        this.setState({
          gameOver: true,
        })
      }

      if (squaresCopy[0] === this.state.turn && squaresCopy[3] === this.state.turn && squaresCopy[6] === this.state.turn) {
        this.setState({
          gameOver: true,
        })
      }

      if (squaresCopy[2] === this.state.turn && squaresCopy[5] === this.state.turn && squaresCopy[8] === this.state.turn) {
        this.setState({
          gameOver: true,
        })
      }

      if (this.state.squares[clickedId] === "") {
        this.setState({
          turn: updateTurn,
          squares: squaresCopy,
        });
      } else {
        alert("Choose a different move!");
      }
  }

  resetButton() {
    // refresh page on click
    window.location.reload();
  }

  render() {
    console.log('Game.js state', this.state);
    return (
      <div className="app">
        <h2>Click a square to play</h2>
        <GameGrid
          squares={this.state.squares}
          turn={this.state.turn}
          onClick={this.onClick.bind(this)}
        />
        <button id="landing-button" onClick={this.resetButton}>Reset Game</button>

        {this.state.gameOver ? <p>Player {this.state.turn === "x" ? "o" : "x"} wins!</p> : <p></p>}
      </div>
    );
  }
}

export default Game;


// Game -> GameGrid
// Game -> Square
// INSTEAD OF
// Game -> GameGrid -> Square

// GAME needs to know about the state of the squares
  // squareId
  // array of squares
// Game Grid also needs to know about the state of the squares
  // squareId
