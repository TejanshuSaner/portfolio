import React, { useContext } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { ThemeContext } from '../component/ThemeContext';
import '../css/Navbar.css';
import resume from "../Document/Tejanshu_saner.pdf";

function Navbar() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className={`fixed h-[100px] top-0 left-0 w-full px-2 flex items-center justify-between z-10 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} dark:bg-gray-800 md:w-full`}>
      <h1 className={`heading mb-[45px] text-xl ${isDarkMode ? 'text-white' : 'text-black'}`}>Tejanshu</h1>
      <nav className="navbar py-10 mb-12">
        <ul className="flex items-center">
          <li>
            <MdDarkMode 
              onClick={toggleDarkMode}
              className={`cursor-pointer text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}
            />
          </li>
          <li>
            <a href={resume} download="Tejanshu_Resume.pdf" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
