import React from "react";
import { FaGithub, FaMedium, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-10">
      <div className="flex justify-center space-between  items-center space-x-10">
        <a
          href="https://github.com/BuseHizarci"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl hover:text-slate-400" />
        </a>
        <a
          href="https://bhzrc.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMedium className="text-2xl hover:text-slate-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/buse-hizarci-258342111/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl hover:text-slate-400" />
        </a>

        <a href="https://www.instagram.com/busehizarci/">
          <FaInstagram className="text-2xl hover:text-slate-400" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
