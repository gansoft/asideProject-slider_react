import "./slider.css";
import { useState } from "react";
import { dataSlider } from "../assets/data/dataSlider";
import Button from "./Button";
import Dots from "./Dots";

const Slider = () => {
  const [activeImage, setActiveImage] = useState({
    index: 1,
  });

  return (
    <div className="slider">
      {dataSlider.map((item, index) => {
        return (
          <div key={index} className="img-container">
            <img
              className={activeImage.index === index + 1 ? "active" : ""}
              src={item.image_url}
              alt={item.title}
            />
          </div>
        );
      })}
      <Button
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        operator={false}
      />
      <Button
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        operator={true}
      />
      <Dots
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        dataSlider={dataSlider}
      />
    </div>
  );
};

export default Slider;
