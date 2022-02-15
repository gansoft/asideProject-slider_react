import "./dots.css";
const Dots = ({ activeImage, setActiveImage, dataSlider }) => {
  const handleClick = (index) => {
    const newObj = { ...activeImage };
    newObj.index = index + 1;
    setActiveImage(newObj);
  };
  return (
    <div className="dots">
      {dataSlider.map((item, index) => {
        return (
          <div
            key={index}
            className={
              activeImage.index === index + 1 ? "dot active-dot" : "dot"
            }
            onClick={() => {
              handleClick(index);
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Dots;
