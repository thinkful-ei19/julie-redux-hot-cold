// import {guessReducer} from './guessReducer';
//store is built off reducers

import {createStore} from 'redux';

import {reducer} from './reducer';

export default createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());