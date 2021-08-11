import React from 'react';
import Square from './Square';

const Board = (props) => {
  const { squares, onClick } = props;
  return (
    <div className="board">
      {squares.map((square, i) => {
        return (
          <Square
            key={i}
            value={square}
            onClick={() => onClick(i)}
            squareTextColor={square === 'X' ? 'x-color' : 'o-color'} 
          />
        )}
      )}
    </div>
  )
}

export default Board;