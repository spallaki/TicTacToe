import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/index.css';
import Game from './Containers/Game';
import Landing from './Containers/Landing';
import registerServiceWorker from './registerServiceWorker';

class Root extends React.Component {
  render() {
    return (
        <Switch>
          <Route path='/' exact component={Landing} ></Route>
          <Route path='/game' component={Game} ></Route>
        </Switch>
    );
  }
}

ReactDOM.render((
  <BrowserRouter>
    <Root />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
