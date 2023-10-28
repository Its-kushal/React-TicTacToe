const Square = ({ value, onclick }) => {
  console.log(value);
  return (
    <button type="button" className="square" onClick={onclick}>
      {value}
    </button>
  );
};

export default Square;
