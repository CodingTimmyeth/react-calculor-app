import React from "react";

const Header = ({ title, subTitle }) => {
  return (
    <header className="flex items-center justify-between w-full">
      <h1 className="font-bold text-xl lg:text-2xl">{title}</h1>
      <div className="flex items-center justify-center">
        <div className="mr-10">
          <p className="font-bold text-sm">{subTitle}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
