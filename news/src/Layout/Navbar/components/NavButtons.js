import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function NavButtons(props) {

  const [isHovered, setIsHovered] = useState(false);
  const [navColor, setNavColor] = useState("#A5C9CA");
  const [navTextColor, setNavTextColor] = useState("#2C3333");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setNavColor("#395B64");
        setNavTextColor("#E7F6F2");
      } else {
        setNavColor("#A5C9CA");
        setNavTextColor("#2C3333");
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const divClass = `bg-[${navColor}] text-[${navTextColor}] text-sm font-normal p-2 shadow-md rounded-md px-3 mx-2 transform transition-all ease-in-out duration-200 ${
    isHovered ? "scale-110" : "scale-100"
  }`;

  const navItem = props.buttons
  const navItemLower = navItem.toLowerCase()
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={divClass}
    >
      <Link to={`/${navItemLower}`}>{navItem} </Link>
    </div>
  );
}
