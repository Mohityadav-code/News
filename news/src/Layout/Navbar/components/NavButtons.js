import { useEffect, useState } from "react";

export default function NavButtons(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [navColor, setNavColor] = useState("#212A3E");
  const [navTextColor, setNavTextColor] = useState("#F1F6F9");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setNavColor("bg-white");
        setNavTextColor("text-black");
      } else {
        setNavColor("bg-black");
        setNavTextColor("text-white");
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const divClass = `${navColor}  ${navTextColor} text-sm font-normal p-2 shadow-md rounded-md px-3 mx-2 transform transition-all ease-in-out duration-200 ${
    isHovered ? "scale-110" : "scale-100"
  }`;

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
        console.log("hovered");
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        console.log("not hovered");
      }}
      className={divClass}
    >
      <button>{props.buttons}</button>
    </div>
  );
}
