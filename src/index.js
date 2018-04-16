import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import './reset.css';
import './index.css';
// import {makeGuess, restartGame} from './action';

import Game from './components/game';

// store.dispatch(makeGuess(13, 'Hot'));
// console.log(store.getState());


ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);

