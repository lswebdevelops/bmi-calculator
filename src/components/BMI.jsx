import React, { useMemo, useState } from "react";
import "../styles/BMI.css";

const BMI = () => {
  const defaultWeight = 60;
  const defaultHeight = 150;

  const [weight, setWeight] = useState(defaultWeight);
  const [height, setHeight] = useState(defaultHeight);


  const onWeightChange = (event) => {
    const inputWeight = event.target.value;
    setWeight(inputWeight)
  };

  const onHeightChange = (event) => {
    const inputHeight = event.target.value;
    setHeight(inputHeight)
  };

  const output = useMemo(() => {
    const calculatedHeight = height /100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height])

  return (
    <div className="container">
      <h1>BMI CALCULATOR</h1>
      <div className="measurement-container">
        <label className="weight-label" htmlFor="weight">
          Weight: <span>{weight}</span> kg
          <input
            className="weight-input"
            onChange={onWeightChange}
            type="range"
            min={25}
            max={200}
            step={1}
          />
        </label>

        <label className="height-label" htmlFor="height">
          Height: <span>{height}</span>cm
          <input
            className="height-input"
            onChange={onHeightChange}
            type="range"
            min={100}
            max={250}
            step={1}
          />
        </label>

        <p className="p-ibm">Your IBM is:</p>

        <div className="output">{output}</div>
      </div>
    </div>
  );
};

export default BMI;
