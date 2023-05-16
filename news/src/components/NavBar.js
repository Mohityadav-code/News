import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle,AiFillInstagram } from "react-icons/ai";
import { SiApplenews } from "react-icons/si";


export default function NavBar() {
  return (
    <div className="flex w-full font-bold  fixed bg-[#212A3E]  font-serif  items-center p-4">
      <div className="logo  hover:text-teal-100 hover:bg-gray-900  hover:scale-110 ease-in-out p-2 shadow-md shadow-[#212A3E] rounded-md  px-4 bg-[#394867] text-[#F1F6F9] ">
        <SiApplenews className="w-5 h-5" />
      </div>
      <div className="sideBorder h-full w-1 bg-[#212A3E] ml-10 rounded-lg "></div>
      <div className="half pl-10 flex w-1/3 justify-between items-center ">
        <div className="Learn  hover:text-teal-100 hover:bg-gray-900  hover:scale-110 ease-in-out p-2 shadow-md shadow-[#212A3E] rounded-md  px-4 bg-[#394867] text-[#F1F6F9]  ">
          <button>LEARN</button>
        </div>
        <div className="Blog   hover:text-teal-100 hover:bg-gray-900  hover:scale-110 ease-in-out p-2 shadow-md shadow-[#212A3E] rounded-md  px-4 bg-[#394867] text-[#F1F6F9] ">
          <button>BLOG</button>
        </div>
        <div className="Bookmarks  hover:text-teal-100 hover:bg-gray-900  hover:scale-110 ease-in-out p-2 shadow-md shadow-[#212A3E] rounded-md  px-4 bg-[#394867] text-[#F1F6F9] ">
          <button>BOOKMARKS</button>
        </div>
      </div>
      <div className="other-half pr-10 flex w-1/2 justify-end items-center">
        <div className="login  hover:text-teal-100 hover:bg-gray-900  hover:scale-110 ease-in-out px-4 py-1 shadow-md shadow-[#212A3E] rounded-md  bg-[#394867] text-[#F1F6F9] ">
          <button>LOGIN</button>
        </div>
      </div>
        <div className="SocialMediaIcons flex ">
            <button className=" flex  hover:text-teal-100 hover:bg-gray-900  hover:scale-110 ease-in-out shadow-md shadow-[#212A3E] rounded-md  bg-[#394867] text-[#F1F6F9]   justify-center items-center  px-3 py-1 m-1 ">
                <BsFacebook className="w-5 h-5"  />
            </button>
            <button className=" flex  hover:text-teal-100 hover:bg-gray-900  hover:scale-110 ease-in-out shadow-md shadow-[#212A3E] rounded-md  bg-[#394867] text-[#F1F6F9]   justify-center items-center px-3 py-1 m-1 ">
                <AiFillTwitterCircle className="w-6 h-6"  e/>
            </button>
            <button className="  hover:text-teal-100 hover:bg-gray-900  hover:scale-110 ease-in-out shadow-md shadow-[#212A3E] rounded-md  bg-[#394867] text-[#F1F6F9]  flex  justify-center items-center px-3 py-1 m-1 ">
                <AiFillInstagram className="w-6 h-6"  />
            </button>
        </div>
    </div>
  );
}
