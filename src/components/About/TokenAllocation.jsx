import React from "react";
import { motion } from "framer-motion";
import TokenAll from "../../assets/Groupie.png";
import TokenAllMobile from "../../assets/mobile-token.png";
import {
  titleAnimation,
  imageZoom,
  defaultViewport,
} from "../../utils/animations";

const TokenAllocation = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={titleAnimation}
    >
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-center font-tactic bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
          },
        }}
      >
        Token Allocation
      </motion.h1>
      <motion.p
        className="text-gray-300 text-sm sm:text-base md:text-lg text-center mb-6 sm:mb-8"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.2 },
          },
        }}
      >
        Transparent distribution of 100 billion $LUX tokens
      </motion.p>

      {/* Chart Image Area - Optimized Size */}
      <motion.div
        className="relative w-full max-w-4xl mx-auto flex items-center justify-center"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, delay: 0.4 },
          },
        }}
      >
        {/* Desktop / Tablet */}
        <motion.img
          src={TokenAll}
          alt="Token Allocation Chart"
          className="hidden sm:block object-contain w-full max-h-[450px] md:max-h-[500px] lg:max-h-[550px] opacity-80"
          whileHover={{
            scale: 1.05,
            opacity: 1,
            filter: "drop-shadow(0 0 25px rgba(77, 243, 255, 0.3))",
          }}
          transition={{ duration: 0.3 }}
        />
        {/* Mobile */}
        <motion.img
          src={TokenAllMobile}
          alt="Token Allocation Chart Mobile"
          className="block sm:hidden object-contain w-full h-auto max-h-[400px] max-w-[320px] mx-auto"
          whileHover={{
            scale: 1.05,
            filter: "drop-shadow(0 0 25px rgba(77, 243, 255, 0.3))",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.div
        className="mt-4 sm:mt-6 md:mt-8 border border-gray-600 rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-center space-x-2 sm:space-x-3 bg-gray-800/30 backdrop-blur-sm max-w-sm sm:max-w-md mx-auto font-tactic hover:border-blue-500/50 hover:bg-gray-800/50 transition-all duration-300 group"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.8 },
          },
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(77, 243, 255, 0.2)",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-400 group-hover:text-cyan-300 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          10,000,000,000
        </motion.span>
        <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-white group-hover:text-blue-100 transition-colors duration-300">
          Total Supply
        </span>
      </motion.div>
    </motion.div>
  );
};

export default TokenAllocation;
