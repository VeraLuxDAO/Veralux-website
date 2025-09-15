import React from "react";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-white py-8 sm:py-12 md:py-16 flex flex-col items-center space-y-6 sm:space-y-8 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      {/* Logo and Brand */}
      <div className="flex items-center space-x-4">
        <img src={Logo} alt="Veralux Logo" className="h-8 sm:h-10 md:h-12" />
      </div>

      {/* About Us link */}
      <a
        href="#"
        className="hover:text-blue-400 pt-4 sm:pt-6 md:pt-8 text-sm sm:text-base transition-colors"
      >
        About Us
      </a>

      {/* Social icons */}
      <div className="flex space-x-6 sm:space-x-8">
        <a
          href="https://x.com/VeraLux_LUX"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          title="Twitter"
          className="hover:text-blue-400 transition-colors"
        >
          <FaXTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
        <a
          href="https://t.me/The_project_manageer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          title="Telegram"
          className="hover:text-blue-400 transition-colors"
        >
          <FaTelegramPlane className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
        <a
          href="https://discord.gg/gWTFWwaVbD"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          title="Discord"
          className="hover:text-blue-400 transition-colors"
        >
          <FaDiscord className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
      </div>

      {/* Divider + Copyright */}
      <div className="w-full max-w-md border-t border-gray-700 pt-4 text-xs sm:text-sm text-center">
        Veralux © 2025
      </div>
    </footer>
  );
};

export default Footer;
