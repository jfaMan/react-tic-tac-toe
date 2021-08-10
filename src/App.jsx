import React from 'react';
import Game from './components/Game'
import { calculateWinner, squares } from './helpers';

const App = () => {
  return (
    <div>
      <Game />
      {console.log(calculateWinner(squares))}
    </div>
  )
}

export default App;