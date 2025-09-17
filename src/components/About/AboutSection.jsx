import React, { memo } from "react";
import { motion } from "framer-motion";
const aboutImage = "/assets/Frame 24430.png";
const image2 = "/assets/about-header.png";
const baseImage = "/assets/Veralux-base.png";
const coinImage = "/assets/Veralux-coin.png";
const coinImageMobile = "/assets/coin-mobile.png";
const baseImageMobile = "/assets/base-mobile.png";
import {
  fadeInLeft,
  fadeInRight,
  titleAnimation,
  imageZoom,
  defaultViewport,
} from "../../utils/animations";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="text-white w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 flex justify-center text-justify overflow-visible"
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 overflow-visible">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center lg:text-left flex flex-col justify-center items-center lg:items-start gap-4 sm:gap-6 scroll-optimized"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInLeft}
        >
          <motion.img
            src={image2}
            alt="About Header"
            className="mx-auto lg:mx-0 mb-2 sm:mb-3 w-auto h-6 sm:h-8"
            loading="lazy"
            decoding="async"
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-tactic bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.2 },
              },
            }}
          >
            What is Veralux?
          </motion.h2>
          <motion.p
            className="text-gray-300 leading-relaxed font-medium text-sm sm:text-base md:text-lg max-w-2xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.4 },
              },
            }}
          >
            VeraLux is a welcoming online space where people come together to
            create, share, and grow ideas in a safe, fair way. It's like a big
            community hub for the digital world, where you can chat, play games,
            buy or sell things, and even build new projects!
            <br /> All powered by a smart system that rewards positive
            contributions and lets everyone have a say in how it works.
            Transparent with timelocks and transaction limits to ensure your
            safety. Veralux is a place built for real people to connect and
            succeed, starting with simple tools like earning rewards for helpful
            actions and expanding to your own custom adventures.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        {/* Desktop/Tablet Coin + Base */}
        <motion.div
          className="hidden sm:block relative overflow-visible flex justify-center flex-col items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] hardware-accelerated"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInRight}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Base comes FIRST (bottom layer) */}
          <motion.div
            className="coin absolute top-[20px] sm:top-[30px] md:top-[40px] lg:top-[50px] flex -translate-x-1/2 pointer-events-none overflow-visible z-10 flex hardware-accelerated"
            variants={{
              hidden: { opacity: 0, y: -50, scale: 0.8 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.8, delay: 0.3 },
              },
            }}
          >
            <motion.img
              src={coinImage}
              alt="VeraLux Coin Front"
              className="coin-face coin-front w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px]"
              loading="lazy"
              decoding="async"
              whileHover={{
                scale: 1.05,
                filter: "drop-shadow(0 0 30px rgba(77, 243, 255, 0.4))",
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={coinImage}
              alt="VeraLux Coin Back"
              className="coin-face coin-back w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px]"
              loading="lazy"
              decoding="async"
              whileHover={{
                scale: 1.05,
                filter: "drop-shadow(0 0 30px rgba(77, 243, 255, 0.4))",
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="shine-beam"
              style={{ height: "80%" }}
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.img
            src={baseImage}
            alt="VeraLux Base Platform"
            className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] rounded-xl animate-float relative z-0"
            loading="lazy"
            decoding="async"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.8, delay: 0.1 },
              },
            }}
            whileHover={{
              scale: 1.02,
              filter: "drop-shadow(0 10px 40px rgba(51, 102, 255, 0.3))",
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Coin positioned on top center of base */}
        </motion.div>

        {/* Mobile Coin + Base */}
      </div>
    </section>
  );
};

export default memo(AboutSection);
