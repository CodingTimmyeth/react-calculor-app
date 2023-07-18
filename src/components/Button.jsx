import React from "react";

const Button = ({ label, color, onClick, text }) => {
  return (
    <button
      className={`${color} text-${text} text-xl p-3 rounded-lg shadow-inner shadow-black cursor-pointer  transition-all hover:brightness-110 lg:text-2xl lg:p-5`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
