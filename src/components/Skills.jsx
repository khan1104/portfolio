import React, { useState } from "react";

import {
  FaPython, FaJsSquare, FaGitAlt, FaDocker, FaReact, FaNodeJs, FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript, SiFastapi, SiFlask,SiExpress, SiTailwindcss,
  SiFirebase, SiRedis, SiMongodb, SiMysql, SiPostgresql,
  SiPostman, SiN8N, SiLinux, SiCplusplus, SiArduino
} from "react-icons/si";

const categories = ["all", "languages", "libraries & frameworks", "databases", "tools & technologies"];

// Skills Data
const skillsData = [
  // Languages
  { name: "Python", icon: <FaPython className="text-yellow-400 text-4xl" />, category: "languages" },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-4xl" />, category: "languages" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-4xl" />, category: "languages" },
  { name: "C/C++", icon: <SiCplusplus className="text-blue-500 text-4xl" />, category: "languages" },

  // Libraries & Frameworks
  { name: "FastAPI", icon: <SiFastapi className="text-green-500 text-4xl" />, category: "libraries & frameworks" },
  { name: "Flask", icon: <SiFlask className="text-gray-500 text-4xl" />, category: "libraries & frameworks" },
  { name: "Express.js", icon: <SiExpress className="text-gray-400 text-4xl" />, category: "libraries & frameworks" },
  { name: "React.js", icon: <FaReact className="text-blue-400 text-4xl" />, category: "libraries & frameworks" },
  { name: "React Native", icon: <FaReact className="text-indigo-400 text-4xl" />, category: "libraries & frameworks" },

  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" />, category: "libraries & frameworks" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" />, category: "libraries & frameworks" },

  // Databases
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-4xl" />, category: "databases" },
  { name: "Redis", icon: <SiRedis className="text-red-500 text-4xl" />, category: "databases" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-4xl" />, category: "databases" },
  { name: "MySQL", icon: <SiMysql className="text-blue-500 text-4xl" />, category: "databases" },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500 text-4xl" />, category: "databases" },

  // Tools & Technologies
  { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500 text-4xl" />, category: "tools & technologies" },
  { name: "Docker", icon: <FaDocker className="text-blue-500 text-4xl" />, category: "tools & technologies" },
  { name: "Postman", icon: <SiPostman className="text-orange-400 text-4xl" />, category: "tools & technologies" },
  { name: "n8n", icon: <SiN8N className="text-orange-400 text-4xl" />, category: "tools & technologies" },
  { name: "REST APIs", icon: <FaDatabase className="text-gray-500 text-4xl" />, category: "tools & technologies" },
  { name: "Arduino", icon: <SiArduino className="text-blue-400 text-4xl" />, category: "tools & technologies" },
  { name: "Linux (Ubuntu)", icon: <SiLinux className="text-yellow-500 text-4xl" />, category: "tools & technologies" },
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="Skills" className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-12">
          <span className="blue-text">My</span>
          <span className="text"> Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full capitalize px-6 py-2  
                transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer
                ${activeCategory === category
                  ? "bg-blue-400 text-white dark:bg-blue-500"
                  : "bg-white text-black dark:bg-[#2f2f30] dark:text-white hover:bg-blue-100 dark:hover:bg-[#3a3a3b]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white dark:bg-[#2f2f30] rounded-xl shadow-lg transition-all duration-300 hover:scale-120"
            >
              {skill.icon}
              <p className="mt-3 text-gray-800 dark:text-white font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
