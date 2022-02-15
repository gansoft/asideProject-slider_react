import "./button.css";
const Button = ({ activeImage, setActiveImage, operator }) => {
  const handleClick = (operator) => {
    const newObj = { ...activeImage };
    operator ? newObj.index++ : newObj.index--;
    newObj.index === 0 && (newObj.index = 5);
    newObj.index === 6 && (newObj.index = 1);
    setActiveImage(newObj);
  };

  let isClicking = false;
  return (
    <button
      className={`${operator ? "add" : "sub"} ${
        isClicking ? "isClicking" : ""
      }`}
      onClick={() => {
        handleClick(operator);
      }}
      onMouseEnter={() => (isClicking = true)}
    >
      {operator ? "+" : "-"}
    </button>
  );
};

export default Button;
