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
    console.log('clickedId', clickedId);
      let squaresCopy = this.state.squares.slice();
      squaresCopy[clickedId] = this.state.turn;

      let updateTurn = this.state.turn === "x" ? "o" : "x";

      if (this.state.squares[clickedId] === "") {
        this.setState({
          turn: updateTurn,
          squares: squaresCopy,
        });
      } else {
        alert("Choose a different move!");
      }
  }

  refreshPage() {
    window.location.reload();
  }

  render() {
    // console.log('Game.js state', this.state);
    return (
      <div className="app">
        <h2>Click a square to play</h2>
        <GameGrid squares={this.state.squares} turn={this.state.turn} onClick={this.onClick.bind(this)} />
        <button id="landing-button" onClick={this.refreshPage}>Reset Game</button>
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
