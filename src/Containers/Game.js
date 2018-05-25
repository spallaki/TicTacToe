import React, { Component } from 'react';
import '../styles/App.css';
import GameGrid from "../Components/GameGrid";

class Game extends Component {
  constructor(props) {
    super(props)
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
