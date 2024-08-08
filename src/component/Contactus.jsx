import React, { useContext, useRef } from "react";
import { motion } from "framer-motion";
import Lottie from 'lottie-react';
import animation from "../component/assets/rocket.json";
import { ThemeContext } from "../component/ThemeContext";
import Swal from 'sweetalert2';

const Contactus = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const formRef = useRef(null); 

  const onSubmit = async (event) => {
    event.preventDefault();
    
 
    if (!event.target.checkValidity()) {
      event.target.reportValidity();
      return;
    }

    const formData = new FormData(event.target);
    formData.append("access_key", "928f26bd-caf0-4bd5-a315-53fefa096d57");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

 
    formRef.current.reset();

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Good job!",
        text: "Your message has been sent!",
        icon: "success"
      });
    }
  };

  
  const animationVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay: 0.5 }
  };

  return (
    <div className={`contact-container flex flex-col md:flex-row items-center justify-center min-h-screen ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="animation-container w-full md:w-1/2 lg:w-2/5 md:flex md:items-center justify-center">
        <motion.div
          initial={animationVariants.initial}
          animate={animationVariants.animate}
          transition={animationVariants.transition}
          style={{ maxWidth: "100%", height: "auto" }}
        >
          <Lottie animationData={animation} loop={true} />
        </motion.div>
      </div>
      <div className="shadow-md rounded-lg p-6 md:p-8 max-w-md w-full md:w-1/2 lg:w-3/5 md:ml-4 md:mt-0">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
        >
          Contact Us
        </motion.h2>
        <motion.form
          ref={formRef}
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          noValidate
          className="space-y-4"
        >
          <motion.div className="mb-2">
            <label htmlFor="name" className={`block font-semibold mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${isDarkMode ? 'border-gray-600 focus:ring-blue-500 text-gray-800 placeholder-gray-400' : 'border-gray-300 focus:ring-blue-500 text-gray-800 placeholder-gray-600'}`}
              placeholder="Your Name"
              required
            />
          </motion.div>
          <motion.div className="mb-2">
            <label htmlFor="email" className={`block font-semibold mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${isDarkMode ? 'border-gray-600 focus:ring-blue-500 text-gray-800 placeholder-gray-400' : 'border-gray-300 focus:ring-blue-500 text-gray-800 placeholder-gray-600'}`}
              placeholder="Your Email"
              required
            />
          </motion.div>
          <motion.div className="mb-2">
            <label htmlFor="message" className={`block font-semibold mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${isDarkMode ? 'border-gray-600 focus:ring-blue-500 text-gray-800 placeholder-gray-400' : 'border-gray-300 focus:ring-blue-500 text-gray-800 placeholder-gray-600'}`}
              placeholder="Your Message"
              required
            ></textarea>
          </motion.div>
          <motion.div>
            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-600 hover:to-teal-600 focus:ring-blue-500`}
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
}

export default Contactus;
