import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

export default function SocialConnect() {
  return (
    <div>  <div className="SocialMediaIcons flex ">
    <button className=" flex  hover:text-teal-100 hover:bg-gray-900  hover:scale-110 ease-in-out shadow-md shadow-[#212A3E] rounded-md  bg-[#394867] text-[#F1F6F9]   justify-center items-center  px-3 py-1 m-1 ">
      <BsFacebook className="w-5 h-5" />
    </button>
    <button className=" flex  hover:text-teal-100 hover:bg-gray-900  hover:scale-110 ease-in-out shadow-md shadow-[#212A3E] rounded-md  bg-[#394867] text-[#F1F6F9]   justify-center items-center px-3 py-1 m-1 ">
      <AiFillTwitterCircle className="w-6 h-6" e />
    </button>
    <button className="  hover:text-teal-100 hover:bg-gray-900  hover:scale-110 ease-in-out shadow-md shadow-[#212A3E] rounded-md  bg-[#394867] text-[#F1F6F9]  flex  justify-center items-center px-3 py-1 m-1 ">
      <AiFillInstagram className="w-6 h-6" />
    </button>
  </div></div>
  )
}
