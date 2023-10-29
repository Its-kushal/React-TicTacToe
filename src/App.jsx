import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Board from './Components/Board.jsx';
import './style.scss';
import { calculateWinner } from './winner.js';

function App() {
  // const [count, setCount] = useState(0)

  const [ squares, setSaquares ] = useState(Array(9).fill(null));
  const [ isXNext, setIsXNext ] = useState(true);

  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'X' : '0';
  const statusMessage = winner ? `Winner is ${winner}` : `Next Player is ${nextPlayer}`;

  const handleSquareClick = clickedPosition => {
    
    if(squares[clickedPosition] || winner){
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

  return (
    <div className='app'>
      <h1>Tic Tac Toe</h1>
      <h3>{statusMessage}</h3>
      <div><Board squares={squares} handleSquareClick={handleSquareClick}/></div>
      <h3>{winner}</h3>
    </div>
  );
}

export default App
