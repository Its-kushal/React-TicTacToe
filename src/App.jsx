import { useState } from 'react';
import './style.scss';
import Board from './Components/Board.jsx';
import { calculateWinner } from './winner.js';
import StatusMessage from './Components/StatusMessage';
import History from './Components/History';

const NEW_GAME = [{ squares: Array(9).fill(null), isXNext: true }];
function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];
  const winner = calculateWinner(gamingBoard.squares);

  console.log({ historyLength: history.length, currentMove });

  const handleSquareClick = clickedPosition => {
    if (gamingBoard.squares[clickedPosition] || winner) {
      return;
    }

    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;

      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[currentHistory.length - 1];

      const nextSqauresState = lastGamingState.squares.map(
        (squareValue, position) => {
          if (clickedPosition === position) {
            return lastGamingState.isXNext ? 'X' : '0';
          }

          return squareValue;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;
      return base.concat({
        squares: nextSqauresState,
        isXNext: !lastGamingState.isXNext,
      });
    });

    setCurrentMove(move => move + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGameStart = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      {/* <h1>Tic Tac Toe</h1> */}
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <div>
        <Board
          squares={gamingBoard.squares}
          handleSquareClick={handleSquareClick}
        />

        <button type="button" onClick={onNewGameStart} className={`btn-reset ${ winner ? `active` : ``}`}>
          New Game
        </button>

        <h3 className="hisTitle">Game History</h3>
        <History history={history} moveTo={moveTo} currentMove={currentMove} />
      </div>
      {/* <h3>
        <span className={winner ? 'text-green' : 'text-orange'}>{winner}</span>
      </h3> */}
    </div>
  );
}

export default App;
