import React, { Component } from 'react';
import '../styles/App.css';
import GameGrid from "../Components/GameGrid";

class Game extends Component {
  render() {
    return (
      <div className="app">
        <h2>Welcome to Tic Tac Toe</h2>
        <GameGrid />
      </div>
    );
  }
}

export default Game;
