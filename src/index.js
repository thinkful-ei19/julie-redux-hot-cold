import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import './reset.css';
import './index.css';
import {makeGuess, restartGame} from './action';

import Game from './components/game';

store.dispatch(makeGuess(13, 'Hot'));
console.log(store.getState());

store.dispatch(restartGame());
console.log(store.dispatch.getState());

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
