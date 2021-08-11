import React, { useState } from 'react';
import Board from './Board';
import calculateWinner from '../helpers';
import Header from './Header';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }

  return (
    <>
      <Header />
      <Board squares={board} onClick={handleClick} />
      <div className='results'>
        <p>{winner ? `Player ${winner} is the winner!`: ()`Next player: ${xIsNext ? 'X' : 'O'}` }</p>
        <button className='btn btn-success' onClick={() => setBoard(Array(9).fill(null))}>START GAME</button>
      </div>
    </>
  )
}

export default Game;
