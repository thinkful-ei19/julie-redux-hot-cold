import {RESTART_GAME, MAKE_GUESS} from '.action';
//reducer listens for actions and changes state

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
}

const guessReducer = (state = initialState, action) => {
    if (action.type === RESTART_GAME) {
        return {
            ...state,
            correctAnswer
        }
    }
    if (action.type === MAKE_GUESS) {
        return {
            ...state,
            guesses: [...state.guesses, action.guess]
        }
    }
}



export default guessReducer





//execute change through action that is initiated by event/component