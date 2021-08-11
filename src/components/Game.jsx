import React, { useState } from 'react';
import Board from './Board';
import calculateWinner from '../helpers';

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
      <Board squares={board} onClick={handleClick}/>
      <div className='results'>
        <p>{winner ? `Player ${winner} is the winner!`: `Next player: ${xIsNext ? 'X' : 'O'}` }</p>
        <button className='btn btn-primary' onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
      </div>
    </>
  )
}

export default Game;