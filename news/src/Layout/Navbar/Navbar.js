import React from "react";
import { SiApplenews } from "react-icons/si";
import NavButtons from "./components/NavButtons";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [bgColor, setbgColor] = useState("#E7F6F2");
  const [textColor, settextColor] = useState("#2C3333");
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setbgColor("#395B64");
        settextColor("#E7F6F2");
      } else {
        setbgColor("#E7F6F2");
        settextColor("#2C3333");
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const classNames = `flex justify-between w-full fixed items-center text-[${textColor}] bg-[${bgColor}]`;
  const navButtons = [
    "BUSINESS",
    "ENTERTAINMENT",
    "HEALTH",
    "WORLD",
    "SCIENCE",
    "SPORTS",
    "TECHNOLOGY",
  ];
  return (
    <div className={classNames}>
      <div className="flex items-center p-2 px-4 font-serif text-2xl font-bold ease-in-out rounded-md shadow-md logo hover:text-teal-100 hover:scale-110">
        <SiApplenews className="w-5 h-5" />
        <span className="pl-1">NEWS</span>
      </div>
      <div className="flex items-center justify-start flex-grow pl-10">
        {navButtons.map((element, index) => {
          return <NavButtons key={index} buttons={element} />;
        })}
      </div>
      <div className="flex items-center justify-end pr-10">
        <NavButtons buttons="LOGIN" />
      </div>
    </div>
  );
}
