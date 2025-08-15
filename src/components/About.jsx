import React,{useState}from "react";
import { Server, CodeXml, Cpu } from "lucide-react";
import JourneyModal from "./JourneyModel";

function About() {
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);
  const scrollToprojects = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="About" className="min-h-screen py-24 px-4">
      {/* Heading */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">
          <span className="text">About</span>
          <span className="blue-text"> Me</span>
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 mt-10 max-w-5xl mx-auto px-4">
        {/* Bio Section */}
        <div className="flex-1 p-6">
          <p className="text-gray-800 dark:text-white text-center">
            Passionate about building scalable, secure, and high-performance backend systems.
            I specialize in Python, Node.js, and FastAPI, working with modern databases to
            create robust APIs and data-driven applications.
          </p>
          <p className="text-gray-800 dark:text-white text-center mt-4 ">
            I enjoy integrating AI, ML, and automation into real-world solutions that make an
            impact. For me, the tech stack doesn't matter — solving the problem does. I'm always eager
            to learn, adapt, and deliver clean, efficient, and production-ready code.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center cursor-pointer">
            <a onClick={() => scrollToprojects("Contact")} className="button button-primary">
              Hire Me
            </a>

            <a
              // href="https://drive.google.com/uc?export=download&id=1btMycK0-jQ9BRwv233WMHpznkGhtw1EG"
              href="https://drive.google.com/file/d/1btMycK0-jQ9BRwv233WMHpznkGhtw1EG/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              Download CV
            </a>

          </div>
        </div>

        {/* Skills Section */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Backend */}
          <div className="flex items-center gap-4 p-5 hover:shadow-md transition-all duration-300 hover:scale-105">
            <Server className="h-10 w-10 text-blue-400 dark:text-blue-500 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">Backend Development</p>
              <span className="text-gray-600 dark:text-gray-300 text-sm">
                Building secure, scalable APIs & backend systems.
              </span>
            </div>
          </div>

          {/* frontend developemtn */}
          <div className="flex items-center gap-4 p-5 hover:shadow-md transition-all duration-300 hover:scale-105">
            <CodeXml className="h-10 w-10 text-blue-400 dark:text-blue-500 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">Frontend development</p>
              <span className="text-gray-600 dark:text-gray-300 text-sm">
                Crafting clean, Frontend development in React js and React Native.
              </span>
            </div>
          </div>

          {/* AI/ML */}
          <div className="flex items-center gap-4 p-5 hover:shadow-md transition-all duration-300 hover:scale-105">
            <Cpu className="h-10 w-10 text-blue-400 dark:text-blue-500 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">AI & Automation</p>
              <span className="text-gray-600 dark:text-gray-300 text-sm">
                Integrating AI, ML, and automation into applications.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-14">
        <button
          onClick={() => setIsJourneyOpen(true)}
          className="button button-primary"
        >
          View My Journey
        </button>
      </div>

      {/* Journey Modal */}
      <JourneyModal isOpen={isJourneyOpen} onClose={() => setIsJourneyOpen(false)} />
      
    </section>
  );
}

export default About;
