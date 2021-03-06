import React from 'react';

import GuessList from './guess-list';
import GuessCount from './guess-count';
// import AuralStatus from './aural-status';

export default function StatusSection(props) {
  // const { guesses, auralStatus } = props;
 

  return (
    <section aria-labelledby="guessCount" aria-describedby="guessList">
      <GuessCount />
      <GuessList />
      {/* <AuralStatus auralStatus={auralStatus} /> */}
    </section>
  );
}
