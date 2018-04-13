import {RESTART_GAME, MAKE_GUESS, FEEDBACK} from '.action';
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
        let guess = parseInt(action.guess, 10);
        if (isNaN(guess)) {
          this.setState({ feedback: 'Please enter a valid number' });
          return {
            ...state,
            feedback,
            guesses: [...state.guesses, guess]
          }
          
        }
    
        const difference = Math.abs(guess - state.correctAnswer);
    
        let feedback;
        if (difference >= 50) {
          feedback = 'You\'re Ice Cold...';
        } else if (difference >= 30) {
          feedback = 'You\'re Cold...';
        } else if (difference >= 10) {
          feedback = 'You\'re Warm.';
        } else if (difference >= 1) {
          feedback = 'You\'re Hot!';
        } else {
          feedback = 'You got it!';
        }
        
        return {
            ...state,
            feedback,
            guesses: [...state.guesses, guess]
        }
    }
    if (action.type === FEEDBACK) {
        return {
            ...state,
            feedback: [...state.feedback, action.feedback]
        }
    }
}



export default guessReducer





//execute change through action that is initiated by event/component