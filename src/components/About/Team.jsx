import React from "react";
import micheal from "../../assets/Micheal.png";
import flux from "../../assets/Flux.png";
import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Team from "../../assets/team.png";
import {
  staggerContainer,
  titleAnimation,
  defaultViewport,
} from "../../utils/animations";

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

// Enhanced team card variants
const teamCardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
    rotateY: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    y: -10,
    scale: 1.05,
    rotateY: 5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Additional variants for text and buttons
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const TeamSection = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <motion.div
        className="text-center max-w-7xl w-full flex-1"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={titleAnimation}
      >
        {/* Heading */}
        <motion.img
          src={Team}
          alt="Team Header"
          className="mb-3 mx-auto w-auto h-6 sm:h-8"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5 },
            },
          }}
        />
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 font-tactic bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.2 },
            },
          }}
        >
          Meet The Team
        </motion.h2>

        {/* Team Members */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group relative w-full aspect-[3/4] max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg cursor-pointer hardware-accelerated"
              variants={teamCardVariants}
              whileHover="hover"
            >
              {/* Background image */}
              <motion.img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />

              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Overlay gradient at bottom for text readability */}
              <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-gradient-to-t from-[#3366FF] via-[#3366FF]/90 via-[40%] to-transparent pointer-events-none group-hover:from-[#4DF3FF] transition-colors duration-300" />

              {/* Content container */}
              <motion.div
                className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex justify-between items-center text-white z-10"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Left: Name and role */}
                <div className="text-left flex-1 min-w-0">
                  <motion.h3
                    className="font-semibold text-base sm:text-lg md:text-xl truncate group-hover:text-blue-100 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    className="text-xs sm:text-sm opacity-80 truncate group-hover:opacity-100 group-hover:text-cyan-200 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {member.role}
                  </motion.p>
                </div>

                {/* Right: Icons */}
                <div className="flex space-x-3 sm:space-x-4 text-lg sm:text-xl md:text-2xl opacity-90 hover:opacity-100 flex-shrink-0">
                  <motion.a
                    href={member.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Twitter`}
                    className="hover:text-blue-400 transition-colors duration-200"
                    whileHover={{
                      scale: 1.3,
                      rotate: 10,
                      filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))",
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaXTwitter />
                  </motion.a>
                  <motion.a
                    href={member.links.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Telegram`}
                    className="hover:text-blue-400 transition-colors duration-200"
                    whileHover={{
                      scale: 1.3,
                      rotate: -10,
                      filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))",
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTelegramPlane />
                  </motion.a>
                </div>
              </motion.div>
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
