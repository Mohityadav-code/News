import React from "react";

import { SiApplenews } from "react-icons/si";
import NavButtons from "./components/NavButtons";
import { useState,useEffect } from "react";

export default function NavBar() {
    const [bgColor,setbgColor] =useState("bg-[#F1F6F9]");
    const [textColor,settextColor] =useState("text-black");
    useEffect(() => {
        const changeColor = () => {
          if (window.scrollY >= 100) {
            setbgColor("bg-black");
            settextColor("text-white");
          } else {
            setbgColor("bg-white");
            settextColor("text-black");
          }
        };
        window.addEventListener("scroll", changeColor);
        return () => {
          window.removeEventListener("scroll", changeColor);
        };
      }, []);
    const classNames= `flex w-full   fixed ${bgColor}  items-center p-2  ${textColor}`;
  const navButtons = [
    "POLITICS",
    "U.S.NEWS",
    "WORLD",
    "BUISNESS",
    "TECH",
    "HEALTH",
    "CULTURE",
  ];
  return (
    <div className={classNames}>
      <div className="logo  flex items-center font-bold font-serif  hover:text-teal-100   hover:scale-110 ease-in-out p-2 shadow-md shadow-[#212A3E] rounded-md  px-4  ">
        <SiApplenews className="w-5 h-5" />
        <span className="text-2xl pl-1">NEWS</span>
      </div>
      <div className="half pl-10 flex  justify-between items-center ">
        {navButtons.map((element, index) => {
          return <NavButtons buttons={element} />;
        })}
      </div>
      <div className="other-half pr-10 flex w-1/2 justify-end items-center">
        <NavButtons buttons="LOGIN" />
      </div>
    </div>
  );
}
