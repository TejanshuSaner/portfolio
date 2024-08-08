import React, { useContext } from 'react';
import "../css/Service.css";
import Type from "./TypingEffect.jsx";
import { ThemeContext } from '../component/ThemeContext';

const Services = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className="services-container">
      <div>
        <h3 className='text-3xl pt-6'> Who Am I ? <Type /> </h3>
        <p className={`text-md py-2 leading-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          An energetic and curious full-stack Asprint developer on a mission to build amazing web experiences. Armed with a fresh degree in
          <span className="text-teal-500"> BCA </span>
          from <span className="text-teal-500">North Maharastra University </span>,
          I’m all set to dive into the tech world with enthusiasm and creativity.
        </p>
        <p className={`text-md py-2 leading-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          I offer from a wide range of services, including brand design,
          programming, and teaching.
        </p>
      </div>

      <div className='flex flex-col md:flex-row gap-10'>

        <div className={`card-container text-center shadow-lg p-10 rounded-xl my-10 align-center justify-center ${isDarkMode ? 'dark-mode-card' : 'light-mode-card'}`}>
          <img src="/design.png" className='m-auto' alt="" width={100} height={100} />
          <h3 className={`text-lg font-medium pt-8 pb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Beautiful design</h3>
          <p className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Creating elegant designs suited for your needs following core design theory.</p>
          <h4 className='py-4 text-teal-600'>Design tools I use</h4>
          <p className={`py-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Illustrator</p>
          <p className={`py-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Figma</p>
          <p className={`py-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Photoshop</p>
        </div>

        <div className={`card-container text-center shadow-lg p-10 rounded-xl my-10 align-center justify-center ${isDarkMode ? 'dark-mode-card' : 'light-mode-card'}`}>
          <img src="/consulting.png" className='m-auto' alt="" width={100} height={100} />
          <h3 className={`text-lg font-medium pt-8 pb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Consulting</h3>
          <p className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Providing expert consulting services to guide your projects towards success.</p>
          <h4 className='py-4 text-teal-600'>Consulting Areas</h4>
          <p className={`py-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Strategy</p>
          <p className={`py-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Project Management</p>
          <p className={`py-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Technical Guidance</p>
        </div>

        <div className={`card-container text-center shadow-lg p-10 rounded-xl my-10 align-center justify-center ${isDarkMode ? 'dark-mode-card' : 'light-mode-card'}`}>
          <img src="/code.png" className='m-auto' alt="" width={100} height={100} />
          <h3 className={`text-lg font-medium pt-8 pb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Development</h3>
          <p className={`py-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Building robust and scalable applications tailored to your business needs.</p>
          <h4 className='py-4 text-teal-600'>Technologies I Use</h4>
          <p className={`py-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>React.js</p>
          <p className={`py-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Node.js</p>
          <p className={`py-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>MongoDB</p>
        </div>

      </div>
    </div>
  );
}

export default Services;
