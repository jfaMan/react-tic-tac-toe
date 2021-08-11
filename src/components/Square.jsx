import React from 'react';

const Square = (props) => {
  const { value, onClick, squareTextColor } = props;
  return (
    <button
      onClick={onClick}
      className={`square ${squareTextColor}`}
    > 
      {value}
    </button>
  )
}

export default Square;
