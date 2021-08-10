import React from 'react';
import Board from './Board';

const Game = () => {

  const handleClick = () => {
    console.log('Clicked');
  }

  return (
    <Board onClick={handleClick}/>
  )
}

export default Game;