import React, { useContext } from "react";
import { ThemeContext } from "../component/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <footer className={`py-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'}`}>
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tejanshu Saner. All Rights Reserved.
        </p>
        <p className="mt-1 text-xs">
          Designed with <span role="img" aria-label="love">❤️</span> in React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
