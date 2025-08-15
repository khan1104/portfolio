import React, { useState } from "react";
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


function Projects() {
  const projectsData = [
    {
      title: "TadkaAi",
      description: [
        "AI-powered recipe app that suggests dishes based on available ingredients and time",
        "Voice guidance for hands-free cooking",
        "Helps reduce food waste by using limited ingredients creatively"
      ],
      tags: ["React Native", "Python", "MongoDB"],
      images: [TadkaAI, TadkaAI_2, TadkaAI_3, TadkaAI_4, TadkaAI_5],
      github: "https://github.com/khan1104/TadkaAI",
    },
    {
      title: "Talk",
      description: [
        "A Multilingual chat app with real-time translation",
        "Supports a wide range of languages",
        "TALK is an innovative chat application designed to revolutionize communication by breaking language barriers"
      ],
      tags: ["React Native", "Python", "Firebase"],
      images: [Talk_1, Talk_2, Talk_3, Talk_4, Talk_5],
      github: "https://github.com/khan1104/TalkAPP",
    },
    {
      title: "Social Media Backend API",
      description: [
        "FastAPI backend for (MastMeme) with JWT authentication",
        "Includes likes, comments, follow, and nested comment systems",
        "Built with production-style architecture for scalability and maintainability"
      ],
      tags: ["FastAPI", "Python", "MongoDB"],
      images: ["https://via.placeholder.com/400x250?text=Social+Media+API"],
      github: "https://github.com/khan1104",
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectImages, setCurrentProjectImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <section id="Projects" className="min-h-screen py-24 px-4 font-poppins">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-raleway">
          <span className="blue-text">Featured</span>
          <span className="text"> Projects</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-5">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#2f2f30] rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2 text-blue-300 dark:text-blue-300 text-center font-raleway">
                  {project.title}
                </h3>

                {/* Bullet Points */}
                <ul className="mt-3 text-gray-800 dark:text-white list-disc text-left ml-4">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Tags */}
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

                {/* Actions */}
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
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="absolute inset-0 backdrop-blur-md bg-black/40"
              onClick={closeModal}
            ></div>

            <div className="relative z-10 max-w-3xl w-[90%] bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4 flex flex-col items-center">
              <button
                className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
                onClick={closeModal}
              >
                <X size={24} />
              </button>

              <div className="flex items-center justify-between w-[80%]">
                {currentImageIndex > 0 ? (
                  <button
                    onClick={prevImage}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
                  >
                    <ChevronLeft />
                  </button>
                ) : (
                  <div className="w-10" />
                )}

                <img
                  src={currentProjectImages[currentImageIndex]}
                  alt="Image Not Found for this Project"
                  className="max-h-[70vh] w-[80%] object-contain rounded-lg"
                />

                {currentImageIndex < currentProjectImages.length - 1 ? (
                  <button
                    onClick={nextImage}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
                  >
                    <ChevronRight />
                  </button>
                ) : (
                  <div className="w-10" />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
