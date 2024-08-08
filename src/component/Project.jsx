import React from 'react';
import { motion } from 'framer-motion';
import '../css/Project.css';


const Project = () => {
  return (
    <div className='project-container'>
      <div>
        <h3 className='text-3xl py-1 text-center'>Portfolio</h3>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-center'>
          Since the beginning of my journey as a freelance designer and developer, I've done remote work for
          <span className='text-teal-500'> agencies </span>
          consulted for <span className='text-teal-500'>startups </span>
          and collaborated with talented people to create digital products for both business and consumer use.
        </p>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-center'>
          I offer a wide range of services, including brand design, programming, and teaching.
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-6 py-10'>
        <motion.div
          className='project-item'
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <img src='/web1.png' className='rounded-lg object-cover' alt='Project 1' />
        </motion.div>
        <motion.div
          className='project-item'
          whileHover={{ scale: 1.1, rotate: -5 }}
          transition={{ duration: 0.3 }}
        >
          <img src='/web2.png' className='rounded-lg object-cover' alt='Project 2' />
        </motion.div>
        <motion.div
          className='project-item'
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          <img src='/web3.png' className='rounded-lg object-cover' alt='Project 3' />
        </motion.div>
        <motion.div
          className='project-item'
          whileHover={{ scale: 1.1, rotate: -10 }}
          transition={{ duration: 0.3 }}
        >
          <img src='/web4.png' className='rounded-lg object-cover' alt='Project 4' />
        </motion.div>
        <motion.div
          className='project-item'
          whileHover={{ scale: 1.1, rotate: 15 }}
          transition={{ duration: 0.3 }}
        >
          <img src='/web5.png' className='rounded-lg object-cover' alt='Project 5' />
        </motion.div>
        <motion.div
          className='project-item'
          whileHover={{ scale: 1.1, rotate: -15 }}
          transition={{ duration: 0.3 }}
        >
          <img src='/web6.png' className='rounded-lg object-cover' alt='Project 6' />
        </motion.div>
      </div>
      <motion.div
        className='portfolio-conclusion text-center mt-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          These projects represent my diverse skills and passion for creating impactful digital experiences. Each project showcases my commitment to quality and innovation, tailored to meet the unique needs of clients and users alike.
        </p>


        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          Whether you need a stunning design, robust development, or expert consulting, I am here to bring your ideas to life.
        </p>
      </motion.div>
    </div>
  );
};

export default Project;
