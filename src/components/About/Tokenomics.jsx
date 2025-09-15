import React from "react";
import { motion } from "framer-motion";
import Tokenomics2 from "../../assets/TokenomicsImage.png"; // Replace with your image path
import FeatureCard from "./FeatureCard";
import InfoCard from "./InfoCard";
import TokenUtilityCard from "./TokenUtilityCard";
import header from "../../assets/Tokenomics-header.png";
import {
  fadeInLeft,
  fadeInRight,
  titleAnimation,
  imageZoom,
  defaultViewport,
} from "../../utils/animations";

const Tokenomics = () => {
  return (
    <section className="text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-32 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInLeft}
        >
          <motion.img
            src={header}
            alt="Lux Header"
            className="mb-4 mx-auto lg:mx-0 w-24 sm:w-32 md:w-40 lg:w-48"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5 },
              },
            }}
            whileHover={{
              scale: 1.1,
              filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))",
            }}
            transition={{ duration: 0.3 }}
          />

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 font-tactic bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              $LUX
            </span>{" "}
            Tokenomics
          </motion.h2>

          <motion.p
            className="text-gray-300 font-medium text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.4 },
              },
            }}
          >
            VeraLux's native token, LUX, powers the entire ecosystem. Used for
            rewards, voting, and transactions. With a fixed supply of 100
            billion tokens, it's designed for fairness and long-term growth. All
            tokens are minted at launch and distributed to treasuries for sales,
            rewards, and operations.
          </motion.p>

          <motion.div
            className="w-full flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.6 },
              },
            }}
          >
            <InfoCard />
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-[504px] flex justify-center h-full"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInRight}
        >
          <motion.img
            src={Tokenomics2}
            alt="Veralux Illustration"
            className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[504px] h-auto object-contain animate-spinInfinite"
            whileHover={{
              scale: 1.1,
              filter: "drop-shadow(0 0 30px rgba(77, 243, 255, 0.4))",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
