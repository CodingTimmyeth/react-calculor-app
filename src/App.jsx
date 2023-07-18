import { useState } from "react";
import CalcNumbers from "./components/CalcNumbers";
import Header from "./components/Header";

// Toggle Colors
// "bg-[#E6E6E6]"
// "bg-[#3B4664]"
// "bg-[#17062A]"

import "./App.css";

function App() {
  const [dotPosition, setDotPosition] = useState("start"); // State to track the dot position

  const handleDotClick = (position) => {
    setDotPosition(position);
  };

  console.log(dotPosition);

  // Color Schemes for the Toggle Buttons
  // When buttons' colors doesn't work reset (add and remove) buttonColor, & resetColor
  const toggleThemes = {
    start: {
      ballColor: "bg-red-500",
      bgColor: "bg-[#3B4664]",
      inputColor: "bg-[#181F32]",
      textColor: "text-white",
      numberContainer: "bg-[#252D44]",
      // Button Color
      buttonColor: "bg-[#EAE3DB]",
      btnText: "black",
      resetColor: "bg-[#647299]",
      equalColor: "bg-[#D13F30]",
      equalText: "text-white",
    },
    center: {
      ballColor: "bg-[#F18C48]",
      bgColor: "bg-[#E6E6E6]",
      textColor: "text-black",
      inputColor: "bg-white",
      numberContainer: "bg-[#D3CDCD]",
      // Button Color
      buttonColor: "bg-[#EAE3DB]",
      btnText: "black",
      resetColor: "bg-[#388187]",
      equalColor: "bg-[#C85401]",
      equalText: "text-white",
    },
    end: {
      ballColor: "bg-white",
      bgColor: "bg-[#17062A]",
      inputColor: "bg-[#1E0836]",
      textColor: "text-yellow-500",
      numberContainer: "bg-[#1E0837]",
      // Button Color
      buttonColor: "bg-[#331B4D]",
      btnText: "blue-500",
      resetColor: "bg-[#56077C]",
      equalColor: "bg-[#00DECF]",
      equalText: "text-black",
    },
  };

  return (
    <>
      <div
        className={`h-screen w-full py-4 px-5 lg:flex lg:flex-col lg:items-center lg:justify-center ${toggleThemes[dotPosition].bgColor} ${toggleThemes[dotPosition].textColor}`}
      >
        <div className="lg:w-[550px]">
          <div className="flex items-center justify-center mt-10 mb-5 lg:mb-7 ">
            <Header
              title="calc"
              subTitle="THEME"
              dotPosition={dotPosition}
              toggleThemes={toggleThemes}
            />
            <div className="flex flex-col items-center w-[75px]">
              <ul className="flex justify-around w-full text-xs mb-2 ">
                <li
                  className="cursor-pointer"
                  onClick={() => handleDotClick("start")}
                >
                  1
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => handleDotClick("center")}
                >
                  2
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => handleDotClick("end")}
                >
                  3
                </li>
              </ul>
              <div className="flex justify-center items-center w-full h-6 bg-[#252D44] rounded-xl px-1">
                <div
                  className={`${
                    toggleThemes[dotPosition].ballColor
                  } rounded-[100%] h-3/4 w-[19px] transition-transform duration-300 ${
                    dotPosition === "start"
                      ? "-translate-x-full"
                      : dotPosition === "center"
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                ></div>
              </div>
            </div>
          </div>
          <CalcNumbers dotPosition={dotPosition} toggleThemes={toggleThemes} />
        </div>
      </div>
    </>
  );
}

export default App;

// okay, my calculator application is almost finished now what I need is to toggle the colors and that's it! How can we do that?
