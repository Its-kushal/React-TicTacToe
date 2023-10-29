import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './style.scss';
import Board from './Components/Board.jsx';
import { calculateWinner } from './winner.js';
import StatusMessage from './Components/StatusMessage';

function App() {
  // const [count, setCount] = useState(0)

  const [squares, setSaquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
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

    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares} />
      <div>
        <Board squares={squares} handleSquareClick={handleSquareClick} />
      </div>
      <h3>
        <span className={winner ? 'text-green' : 'text-orange'}>{winner}</span>
      </h3>
    </div>
  );
}

export default App;
