import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 py-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 px-4">
        {/* Thank You Text */}
        <h1 className="text-center text-blue-500 text-2xl font-bold">
          Thank You!
        </h1>

        {/* Social Links */}
        <div className="flex space-x-6 text-gray-600 dark:text-gray-300">
          <a
            href="https://github.com/khan1104"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/khan-irfan-0b43742a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        {/* Small Note */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Khan Irfan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
