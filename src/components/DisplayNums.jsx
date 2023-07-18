import React from "react";
import { FaDollarSign } from "react-icons/fa";

const DisplayNums = ({ number, dotPosition, toggleThemes }) => {
  // User state to keep track if the equal sign has been clicked

  return (
    <section
      className={`h-[88px] w-full ${toggleThemes[dotPosition].inputColor} flex flex-row-reverse items-center justify-between p-4 rounded-xl mb-5 text-3xl lg:text-5xl lg:p-7 lg:h-[125px]`}
    >
      <p className="font-bold">{number}</p>
      <FaDollarSign className="text-green-500" />
    </section>
  );
};

export default DisplayNums;
