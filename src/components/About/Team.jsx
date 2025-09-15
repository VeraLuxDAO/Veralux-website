import React from "react";
import micheal from "../../assets/Micheal.png";
import flux from "../../assets/Flux.png";
import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Team from "../../assets/team.png";

const teamMembers = [
  {
    name: "Michael Williams",
    role: "Founder/CEO",
    image: micheal,
    links: {
      twitter: "https://x.com/Mike_Web3_",
      telegram: "https://t.me/VeraLux_Mike",
    },
  },
  {
    name: "Flux",
    role: "VP of Operations",
    image: flux,
    links: {
      twitter: "https://x.com/flux_web3_",
      telegram: "https://t.me/The_project_manageer",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TeamSection = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <motion.div
        className="text-center max-w-7xl w-full flex-1"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Heading */}
        <img src={Team} alt="" className="mb-3 mx-auto w-auto h-6 sm:h-8" />
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 font-tactic"
          variants={cardVariants}
        >
          Meet The Team
        </motion.h2>

        {/* Team Members */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12 max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative w-full aspect-[3/4] max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
              variants={cardVariants}
            >
              {/* Background image */}
              <img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay gradient at bottom for text readability */}
              <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-gradient-to-t from-[#3366FF] via-[#3366FF]/90 via-[40%] to-transparent pointer-events-none" />

              {/* Content container */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-center text-white z-10">
                {/* Left: Name and role */}
                <div className="text-left flex-1 min-w-0">
                  <h3 className="font-semibold text-base sm:text-lg md:text-xl truncate">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-80 truncate">
                    {member.role}
                  </p>
                </div>

                {/* Right: Icons */}
                <div className="flex space-x-3 sm:space-x-4 text-lg sm:text-xl md:text-2xl opacity-90 hover:opacity-100 flex-shrink-0">
                  <a
                    href={member.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Twitter`}
                    className="hover:text-blue-400"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href={member.links.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Telegram`}
                    className="hover:text-blue-400"
                  >
                    <FaTelegramPlane />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Text */}
        <motion.p
          className="text-center mb-6 sm:mb-8 text-gray-300 max-w-xs sm:max-w-md md:max-w-xl mx-auto text-sm sm:text-base"
          variants={cardVariants}
        >
          Be among the first to experience our app and help build an ecosystem
          designed for you.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4"
          variants={containerVariants}
        >
          <motion.button
            onClick={() => navigate("/waitlist")}
            className="bg-white text-gray-900 w-[224px] h-[44px] px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2 text-sm sm:text-base"
            variants={cardVariants}
          >
            Join the Waitlist
            <FiArrowUpRight className="text-sm sm:text-lg" />
          </motion.button>
          <motion.button
            className="bg-transparent border border-white px-4 w-[224px] h-[44px] sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2 text-sm sm:text-base"
            variants={cardVariants}
          >
            Learn More
            <FiArrowUpRight className="text-sm sm:text-lg" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TeamSection;
