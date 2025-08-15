import React, { useState, useEffect } from 'react';
import { ArrowDown } from "lucide-react";

function Hero() {
  const titles = ["Developer", "Coder", "Programmer", "Engineer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);


  const scrollToprojects = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="Home"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold flex flex-wrap justify-center items-center text-center">
        <span className="text-gray-800 dark:text-white">Hi, I'm a&nbsp;</span>
        <span
          key={index}
          className="text-blue-400 dark:text-blue-500 transition-all duration-500 transform translate-y-0 animate-slide"
        >
          {titles[index]}
        </span>
      </div>

      {/* Subtitle */}
      <div className="max-w-3xl text-center mt-4 text-base sm:text-lg md:text-xl text-gray-800 dark:text-white mx-auto px-2">
        <p>
          Aspiring Backend Developer | Passionate about Python, Node.js, FastAPI, and Scalable APIs.
          Loves building real-world projects with AI, ML, and automation at the core.
        </p>
      </div>

      {/* Button */}
      <button
        onClick={() => { scrollToprojects("Projects") }}
        className="mt-8 button button-primary"
      >
        View My Work
      </button>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="mb-2 text-gray-800 dark:text-white text-xl font-bold"> Scroll </span>
        <ArrowDown className="h-6 w-6 text-blue-400 dark:text-blue-500" />
      </div>
    </section>
  );
}

export default Hero;
