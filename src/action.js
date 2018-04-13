export const RESTART_GAME = 'RESTART_GAME'; 
//don't want it to go out of sync, so creating variable also to help debug
export const restartGame = (correctAnswer) => {
    return {
        type: RESTART_GAME,
        correctAnswer
    }
}

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = () => {
    return {
        type: MAKE_GUESS,
        guess
    }
}




