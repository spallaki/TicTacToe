import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import Game from './Containers/Game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <Game />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
