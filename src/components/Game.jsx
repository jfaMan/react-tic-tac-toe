import React, { useState, useEffect } from 'react';
import Board from './Board';
import calculateWinner from '../helpers';
import Header from './Header';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [totalTurns, setTotalTurns] = useState(0);
  const [draw, setDraw] = useState(false)
  const winner = calculateWinner(board);

  useEffect(() => {
    console.log(totalTurns)
    if (totalTurns === 9 && !winner) {
      setDraw(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalTurns])

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXisNext(!xIsNext);
    setTotalTurns(totalTurns + 1)
  }

  const newGame = () => {
    setBoard(Array(9).fill(null))
    setDraw(false)
    setTotalTurns(0)
  }

  const gameStatus = () => {
    if (winner) {
      return `Player ${winner} is the winner!`
    } else if (draw) {
      return 'Draw!'
    } else {
      return totalTurns === 0 ? `Player ${xIsNext ? 'X' : 'O'} starts` : `Next player: ${xIsNext ? 'X' : 'O'}` 
    }
  }

  return (
    <>
      <Header />
      <Board squares={board} onClick={handleClick} />
      <div className='results'>
        <p>{gameStatus()}</p>
        {winner || draw ? <button className='btn btn-success' onClick={newGame}>PLAY AGAIN</button> : null}
      </div>
    </>
  )
}

export default Game;