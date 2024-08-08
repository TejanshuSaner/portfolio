import React, { useContext } from "react";
import {  AiFillLinkedin} from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";

import { FaGithub } from "react-icons/fa";
import { ThemeContext } from "../component/ThemeContext"; 
import "../css/Hero.css";

const Hero = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={`Hero text-center m-auto p-10 flex flex-col justify-self-center box-content ${isDarkMode ? 'dark' : ''}`}>
        <h2 className={`text-5xl pt-[30%] pb-2 text-teal-500 font-medium md:pt-[10%] md:text-6xl`}>Tejanshu Saner</h2>
        <h3 className={`text-2xl py-2 md:text-3xl ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Developer and Designer</h3>
        <p className={`text-md py-5 leading-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-800'} md:text-lg max-w-xl mx-auto`}>
          Freelancer providing services for programming and design content needs.<br />Join me down below and let's get cracking!
        </p>
        <div className="text-5xl flex justify-center gap-16 py-10 cursor-pointer">
          <a className="icon-container"  href="https://www.linkedin.com/in/tejanshu-saner-teju"><AiFillLinkedin className={isDarkMode ? 'text-white' : 'text-gray-600'} /></a>
          <a className="icon-container" href="https://github.com/TejanshuSaner"><FaGithub className={isDarkMode ? 'text-white' : 'text-gray-600'} /></a>
          <a className="icon-container" href="https://www.instagram.com/tejanshupatil03/"><  FaSquareInstagram className={isDarkMode ? 'text-white' : 'text-gray-600'} /></a>
        </div>
      </div>

      <div className={` w-full mt-20 bg-gradient-to-b from-teal-500 relative object-cover rounded-full h-80 overflow-hidden md:mx-auto md:h-96 md:w-96 ${isDarkMode ? 'dark' : ''}`}>
        <div className="img-container m-auto ">
          <img className="object-cover py-5" layout="fill" src="/dev-ed-wave.png" alt="Description" />
        </div>
      </div>
    </>
  );
}

export default Hero;
