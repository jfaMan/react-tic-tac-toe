import React from 'react';
import Board from './Board';
import calculateWinner from '../helpers';

const Game = () => {

  const handleClick = () => {
    console.log('Clicked');
  }

  return (
    <Board onClick={handleClick}/>
  )
}

export default Game;