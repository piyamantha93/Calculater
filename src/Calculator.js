import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  // Handle button click
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Clear the input
  const handleClear = () => {
    setInput("");
  };

  // Calculate the result
  const handleCalculate = () => {
    try {
      let expression = input;

      // Handle percentage: change "50%" to "50/100"
      if (expression.includes("%")) {
        expression = expression.replace(/%/g, "/100");
      }

      const result = eval(expression);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator-container">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button> 
        
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("%")}>%</button> 
      </div>
    </div>
  );
};

export default Calculator;
