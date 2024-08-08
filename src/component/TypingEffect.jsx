import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const phrases = [
    "Hello, I'm a developer.",
    "I Love Coding!",
    "Aspring Full Stack Developer",
    "Let's Create Something Awesome."
  ];
  const typingSpeed = 100; 
  const pauseTime = 1500; 

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let timeout;

    const type = () => {
      const phrase = phrases[currentIndex];
      if (!phrase) return;

      if (currentText.length < phrase.length) {
        currentText += phrase.charAt(currentText.length);
        setText(currentText);
        timeout = setTimeout(type, typingSpeed);
      } else {
        setTimeout(() => {
          currentIndex = (currentIndex + 1) % phrases.length; 
          currentText = '';
          setText('');
          type();
        }, pauseTime);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="text-2xl py-3 text-red-600 leading-8">
      {text}
    </div>
  );
};

export default TypingEffect;
