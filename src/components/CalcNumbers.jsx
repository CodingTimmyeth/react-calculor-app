import React, { useEffect, useState } from "react";
import Button from "./Button";
import DisplayNums from "./DisplayNums";

const CalcNumbers = ({ dotPosition, toggleThemes }) => {
  const [numbers, setNumbers] = useState([]);
  const [total, setTotal] = useState(0);
  const [equalClicked, setEqualClicked] = useState(false);

  const handleOnClick = (e) => {
    const clickedValue = e.target.textContent;
    const isNumber = !isNaN(clickedValue);

    if (clickedValue === "DEL") {
      setNumbers((prevValues) => prevValues.slice(0, -1));
      return; // Exit the function after deleting the last item
    }

    if (isNumber) {
      setNumbers((prevValues) => [...prevValues, Number(clickedValue)]);
    } else {
      setNumbers((prevValues) => [...prevValues, clickedValue]);
    }
  };

  const caluculateTotal = () => {
    const expression = numbers.join(""); // Join all numbers and symbols into a single string expression

    try {
      // Evaluate the expression using the eval() function
      const result = eval(expression);
      const roundedResult = result.toString().includes(".")
        ? result.toFixed(2)
        : result;

      setTotal(roundedResult);
      setNumbers([roundedResult]);
      setEqualClicked(true);
    } catch (error) {
      console.log("Error: Invalid expression");
      setTotal(0);
      setEqualClicked(false);
      setNumbers([]);
      alert("Error: Invalid expression");
    }
    console.log("Total", total);
  };

  const handleResetClick = () => {
    setNumbers([]);
  };

  const buttons = [
    {
      label: "7",
      color: toggleThemes[dotPosition].buttonColor,
      text: toggleThemes[dotPosition].btnText,
    },
    {
      label: "8",
      color: toggleThemes[dotPosition].buttonColor,
      text: toggleThemes[dotPosition].btnText,
    },
    {
      label: "9",
      color: toggleThemes[dotPosition].buttonColor,
      text: toggleThemes[dotPosition].btnText,
    },
    {
      label: "DEL",
      color: toggleThemes[dotPosition].resetColor,
      text: "white",
    },
    {
      label: "4",
      color: toggleThemes[dotPosition].buttonColor,
      text: toggleThemes[dotPosition].btnText,
    },
    {
      label: "5",
      color: toggleThemes[dotPosition].buttonColor,
      text: toggleThemes[dotPosition].btnText,
    },
    {
      label: "6",
      color: toggleThemes[dotPosition].buttonColor,
      text: toggleThemes[dotPosition].btnText,
    },
    {
      label: "+",
      color: toggleThemes[dotPosition].buttonColor,
      text: toggleThemes[dotPosition].btnText,
    },
    {
      label: "1",
      color: toggleThemes[dotPosition].buttonColor,
      text: toggleThemes[dotPosition].btnText,
    },
    {
      label: "2",
      color: toggleThemes[dotPosition].buttonColor,
      text: toggleThemes[dotPosition].btnText,
    },
    {
      label: "3",
      color: toggleThemes[dotPosition].buttonColor,
      text: toggleThemes[dotPosition].btnText,
    },
    {
      label: "-",
      color: toggleThemes[dotPosition].buttonColor,
      text: toggleThemes[dotPosition].btnText,
    },
    {
      label: ".",
      color: toggleThemes[dotPosition].buttonColor,
      text: toggleThemes[dotPosition].btnText,
    },
    {
      label: "0",
      color: toggleThemes[dotPosition].buttonColor,
      text: toggleThemes[dotPosition].btnText,
    },
    {
      label: "/",
      color: toggleThemes[dotPosition].buttonColor,
      text: toggleThemes[dotPosition].btnText,
    },
    {
      label: "*",
      color: toggleThemes[dotPosition].buttonColor,
      text: toggleThemes[dotPosition].btnText,
    },
  ];
  return (
    <main>
      <DisplayNums
        number={numbers}
        dotPosition={dotPosition}
        toggleThemes={toggleThemes}
      />
      <section
        className={`w-full h-full ${toggleThemes[dotPosition].numberContainer} p-5 rounded-lg lg:p-7`}
      >
        <div className="grid grid-cols-4 gap-3 font-bold">
          {buttons.map((button, index) => (
            <Button
              onClick={handleOnClick}
              key={index + 1}
              label={button.label}
              color={button.color}
              text={button.text}
            />
          ))}
          <button
            className={`${toggleThemes[dotPosition].resetColor}  text-white text-xl p-4 rounded-lg col-span-2 shadow-inner shadow-black cursor-pointer  transition-all hover:brightness-110`}
            onClick={handleResetClick}
          >
            RESET
          </button>
          <button
            className={`${toggleThemes[dotPosition].equalColor} ${toggleThemes[dotPosition].equalText} text-xl p-4 rounded-lg col-span-2 shadow-inner shadow-black cursor-pointer transition-all hover:brightness-110`}
            onClick={caluculateTotal}
          >
            =
          </button>
        </div>
      </section>
    </main>
  );
};

export default CalcNumbers;
