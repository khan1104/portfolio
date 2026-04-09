import React, { useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import TadkaAI from "../assets/TadkaAI.jpg";
import TadkaAI_2 from "../assets/TadkaAI_2.jpg";
import TadkaAI_3 from "../assets/TadkaAI_3.jpg";
import TadkaAI_4 from "../assets/TadkaAI_4.jpg";
import TadkaAI_5 from "../assets/TadkaAI_5.jpg";

import Talk_1 from "../assets/Talk_1.png";
import Talk_2 from "../assets/Talk_2.png";
import Talk_3 from "../assets/Talk_3.png";
import Talk_4 from "../assets/Talk_4.png";
import Talk_5 from "../assets/Talk_5.png";

import meem1 from "../assets/meem1.png";
import meme2 from "../assets/meme2.png";
import meme3 from "../assets/meme3.png";
import meme4 from "../assets/meme4.png";
import meme5 from "../assets/meme5.png";

import n8n1 from "../assets/n8n1.jpeg";
import n8n2 from "../assets/n8n2.jpeg";
import n8n3 from "../assets/n8n3.jpeg";
import n8n4 from "../assets/n8n4.jpeg";

import robot from "../assets/robot.mp4";

function Projects() {
  const projectsData = [
    {
      title: "MeemHub",
      description: [
        "Built a scalable full-stack social media platform for meme sharing using Next.js & FastAP",
        "Implemented JWT authentication (access & refresh tokens), OTP verification, Google OAuth and Guest login",
        "Upload images/videos with advanced validation (size, format, magic bytes)",
        "Designed a robust post system supporting image/video uploads, likes, dislikes, saves, comments, and reporting",
        "Used cursor-based pagination for efficient feed loading and infinite scroll",
        "Containerized backend using Docker and deployed on AWS EC2; frontend deployed on Vercel",
        "Added rate limiting to prevent abuse and ensure API reliability"
      ],
      tags: ["FastAPI", "Next js", "MongoDB","AWS","Docker","Supbase"],
      images: [meem1,meme2,meme3,meme4,meme5],
      github: "https://github.com/khan1104/MemeHub.git",
      live: "https://meemhub.in"
    },
    {
      title: "TadkaAi",
      description: [
        "AI-powered recipe app that suggests dishes based on available ingredients and time",
        "Voice guidance for hands-free cooking",
        "Helps reduce food waste by using limited ingredients creatively",
        "SerpAPI is integrated into the backend to fetch relevant recipe-related information from search engines",
        "The Simple Mail Transfer Protocol (SMTP) was implemented to send OTPs (One-Time Passwords) during account creation and password recovery processes",
        "The Gemini AI API powers TadkaAI’s recipe recommendation system, processing user-inputted ingredients and generating relevant recipes."
      ],
      tags: ["React Native", "Flask", "MongoDB","SerpAPI","Gemini AI"],
      images: [TadkaAI, TadkaAI_2, TadkaAI_3, TadkaAI_4, TadkaAI_5],
      github: "https://github.com/khan1104/TadkaAI",
    },
    {
      title: "Talk",
      description: [
        "Biuld a Chat Application with in-built language translation feature using React native and Flask",
        "Supports a wide range of languages such as Hindi, Arabic, Korean, Bengali etc",
        "has OTP-based authentication, profile customization, bad word detection and message persistence across sessions.",
        "Used Firebase Firestore fo real time Message",
        "The Simple Mail Transfer Protocol (SMTP) was implemented to send OTPs (One-Time Passwords) during account creation and password recovery processes"
      ],
      tags: ["React Native", "Flask", "Firebase"],
      images: [Talk_1, Talk_2, Talk_3, Talk_4, Talk_5],
      github: "https://github.com/khan1104/TalkAPP",
    },
    {
      title: "n8n Drive Automation using whatsapp",
      description: [
        "This workflow allows for a truly conversational and mobile way to manage files without opening the Drive interface.",
        "Has multiple whatsapp Command for different actions eg:-",
        "DELETE /FolderName/file.pdf: Delete a specific file.",
        "SUMMARY /FolderName: AI-Powered! Summarizes the contents of files within that folder using the Gemini API",
        "UPLOAD /FolderName/filename: Upload a file to a specific folder.",
        "MOVE /SourceFolderName/file.pdf /DestinationFolderName: Move a file between folders."
      ],
      tags: ["n8n", "OAuth 2.0", "Google Gemini API","Twilio"],
      images: [n8n1,n8n2,n8n3,n8n4],
      github: "https://github.com/khan1104",
    },
    {
      title: "Robotic Arm",
      description: [
        "Developed the complete firmware for an Arduino-based robotic arm, implementing control logic for precise movement and automation",
        "Handled all electronics integration, including motor drivers, wiring, and sensor calibration.",
        "Led the software and hardware integration for the project, and also got 1st prize in that inter-college tech competition.",
       
      ],
      tags: ["Arduino","C++","Servo motors"],
      images: [robot],
      github: "https://github.com/khan1104",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectImages, setCurrentProjectImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollRef = useRef(null);

  const openCarousel = (images) => {
    setCurrentProjectImages(images);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProjectImages([]);
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  const nextImage = () => {
    if (currentImageIndex < currentProjectImages.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

const scrollRight = () => {
  scrollRef.current?.scrollBy({
    left: scrollRef.current.clientWidth, // scroll by container width
    behavior: "smooth",
  });
};

const scrollLeft = () => {
  scrollRef.current?.scrollBy({
    left: -scrollRef.current.clientWidth,
    behavior: "smooth",
  });
};

  return (
    <section id="Projects" className="min-h-screen py-20 font-poppins">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-raleway">
          <span className="blue-text">Featured</span>
          <span className="text"> Projects</span>
        </h2>

        {/* Desktop carousel wrapper */}
       <div className="relative hidden lg:block overflow-visible">
  {/* Left Arrow */}
  <button
    onClick={scrollLeft}
    className="absolute left-[-40px] top-1/2 -translate-y-1/2 p-1 bg-gray-200 dark:bg-gray-700 rounded-full z-10 shadow"
  >
    <ChevronLeft />
  </button>

  <div
    className="flex gap-8 overflow-x-hidden scroll-smooth pb-4"
    ref={scrollRef}
  >
    {projectsData.map((project, index) => (
      <div
        key={index}
        className="min-w-[48%] bg-white dark:bg-[#2f2f30] rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
      >
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-2 text-blue-300 dark:text-blue-300 text-center font-raleway">
                    {project.title}
                  </h3>

                  <ul className="mt-3 text-gray-800 dark:text-white list-disc text-left ml-4">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-6">
                    <a
                      href={project.github}
                      className="text-2xl text-gray-800 dark:text-white hover:text-blue-500 mt-2"
                    >
                      <FaGithub />
                    </a>
                    <button
                      onClick={() => openCarousel(project.images)}
                      className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500"
                    >
                      See Media
                    </button>
                     {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
    >
      Live Demo
    </a>
  )}
                  </div>
                </div>
              </div>
            ))}
          </div>

           <button
    onClick={scrollRight}
    className="absolute right-[-40px] top-1/2 -translate-y-1/2 p-2 bg-gray-200 dark:bg-gray-700 rounded-full z-10 shadow"
  >
    <ChevronRight />
  </button>
        </div>

        {/* Mobile / default grid */}
        <div className="grid sm:grid-cols-2 lg:hidden gap-8 pt-5">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#2f2f30] rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-blue-300 dark:text-blue-300 text-center font-raleway">
                  {project.title}
                </h3>

                <ul className="mt-3 text-gray-800 dark:text-white list-disc text-left ml-4">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    className="text-2xl text-gray-800 dark:text-white hover:text-blue-500 mt-2"
                  >
                    <FaGithub />
                  </a>
                  <button
                    onClick={() => openCarousel(project.images)}
                    className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500"
                  >
                    See Photos
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {/* Modal */}
{isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-[100] p-4">
    {/* Backdrop with stronger blur */}
    <div
      className="absolute inset-0 backdrop-blur-lg bg-black/60"
      onClick={closeModal}
    ></div>

    {/* Modal Container: Max-width 6xl taaki PC screens badi dikhein */}
    <div className="relative z-10 max-w-6xl w-full bg-white dark:bg-[#1e1e1f] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
      
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 z-50 p-2 bg-black/10 hover:bg-red-500 hover:text-white dark:text-white rounded-full transition-all"
        onClick={closeModal}
      >
        <X size={24} />
      </button>

      {/* Content Area */}
      <div className="relative flex items-center justify-between p-2 md:p-6 min-h-[50vh] max-h-[90vh]">
        
        {/* Previous Button */}
        <div className="absolute left-4 z-40">
          {currentImageIndex > 0 && (
            <button
              onClick={prevImage}
              className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:scale-110 transition-transform dark:text-white"
            >
              <ChevronLeft size={28} />
            </button>
          )}
        </div>

        {/* Image Display Wrapper */}
        <div className="w-full flex justify-center items-center overflow-hidden">
          {currentProjectImages[currentImageIndex].endsWith(".mp4") ? (
  <video
    src={currentProjectImages[currentImageIndex]}
    controls
    className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-sm"
  />
) : (
  <img
    src={currentProjectImages[currentImageIndex]}
    alt="Project Preview"
    className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-sm"
  />
)}
        </div>

        {/* Next Button */}
        <div className="absolute right-4 z-40">
          {currentImageIndex < currentProjectImages.length - 1 && (
            <button
              onClick={nextImage}
              className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:scale-110 transition-transform dark:text-white"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      </div>

      {/* Image Counter (Optional - bottom indicators) */}
      <div className="pb-4 text-center text-sm text-gray-500 dark:text-gray-400">
        {currentImageIndex + 1} / {currentProjectImages.length}
      </div>
    </div>
  </div>
)}
      </div>
    </section>
  );
}

export default Projects;