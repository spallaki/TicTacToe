import React, { Component } from 'react';
import '../styles/App.css';
import GameGrid from "../Components/GameGrid";

class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // this is the overall game, so what do you need to know?
        // whos turn it is (x is always first)
        // if gameOver: true, then display who won
        // remaining squares left to click on -> GameGrid
      gameOver: false,
      // playerXTurn: true,
    }
  }

  render() {
    return (
      <div className="app">
        <h2>Click to Play</h2>
        <GameGrid />
        <p id="won" style={{ display: 'none' }}>You won!</p>
        <p id="lost" style={{ display: 'none' }}>You lost.</p>
      </div>
    );
  }
}

export default Game;
