// import {guessReducer} from './guessReducer';
//store is built off reducers

import {createStore} from 'redux';

import {reducer} from './reducer';

export default createStore(reducer);