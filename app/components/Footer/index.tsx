import React from "react";
import { FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="flex justify-center items-center space-x-4">
        <a
          href="https://github.com/BuseHizarci"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl hover:text-gray-400" />
        </a>
        <a
          href="https://bhzrc.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMedium className="text-2xl hover:text-gray-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/buse-hizarci-258342111/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl hover:text-gray-400" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
