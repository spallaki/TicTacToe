import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
    <div className="landingContainer">
      <h2>Welcome to Tic Tac Toe</h2>
        <Link id="landing-button" to="/game">Start Game</Link>
    </div>
    );
  }
}

export default Landing;
