const StatusMessage = ({ winner, isXNext, squares }) => {
  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : '0';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          Winner is{' '}
          <span className={winner ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );
    }
    if (!winner && noMovesLeft) {
      return <>Game Tied Plz Try again</>;
    }
    if (!winner && !noMovesLeft) {
      return (
        <>
          nextPlayer is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </>
      );
    }
    return null;
  };

  return <div className="status-message">{renderStatusMessage()}</div>;
};

export default StatusMessage;
