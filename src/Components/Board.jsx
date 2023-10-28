import { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [ squares, setSaquares ] = useState(Array(9).fill(null));
  const [ isXNext, setIsXNext ] = useState(true);

  const handleSquareClick = clickedPosition => {
    
    if(squares[clickedPosition]){
      return; 
    }
    
    setSaquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : '0';
        }

        return squareValue;
      });
    });

    setIsXNext((currentIsXNext) => !currentIsXNext);
  };

  const renderSquare = pos => {
    return (
      <Square 
        value={squares[pos]} 
        onclick={() => handleSquareClick(pos)} 
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
