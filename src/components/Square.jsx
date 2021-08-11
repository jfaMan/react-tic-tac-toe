import React from 'react';

const Square = (props) => {
  const { value, onClick, squareTextColor } = props;
  return (
    <button
      onClick={onClick}
      // {console.log(squareColor)}
      className={`square ${squareTextColor}`}
    > 
      {value}
    </button>
  )
}

export default Square;