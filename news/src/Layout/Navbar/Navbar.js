import React from "react";
import { SiApplenews } from "react-icons/si";
import NavButtons from "./components/NavButtons";
import { useState, useEffect } from "react";

export default function NavBar(props) {
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
  const classNames = `flex justify-between w-full fixed items-center p-2 text-[${textColor}] bg-[${bgColor}]`;
  const navButtons = [
    "POLITICS",
    "U.S.NEWS",
    "WORLD",
    "BUISNESS",
    "TECH",
    "HEALTH",
    "CULTURE",
  ];
  console.log('NavBar', props.onCategoryChange);
  return (


    <div className={classNames}>
      <div className="logo flex items-center font-bold font-serif text-2xl hover:text-teal-100 hover:scale-110 ease-in-out p-2 shadow-md rounded-md px-4">
        <SiApplenews className="w-5 h-5" />
        <span className="pl-1">NEWS</span>
      </div>
      <div className="flex-grow pl-10 flex items-center justify-start">
        {navButtons.map((element, index) => {
          return (
            <NavButtons key={index}
              onbuttonclick={props.onCategoryChange}
              buttons={element}
            />
          );
        })}
      </div>
      <div className="pr-10 flex items-center justify-end">
        <NavButtons buttons="LOGIN" />
      </div>
    </div>
  );
}
