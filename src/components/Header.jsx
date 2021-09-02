import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faGamepad} className="logo" />
      <h1>React Tic-tac-toe</h1>
    </div>
  )
}

export default Header;
