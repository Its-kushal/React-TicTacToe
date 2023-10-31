const Square = ({ value, onclick }) => {
  console.log(value);
  return (
    <button type="button" className={`square ${ value === 'X' ? 'text-green' : 'text-orange'}`} onClick={onclick}>
      {value}
    </button>
  );
};

export default Square;
