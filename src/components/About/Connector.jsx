import React from "react";
import { motion } from "framer-motion";
const connectorDesktop = "/assets/connector.png";
const connectorMobile = "/assets/connector-mobile.png";
import {
  staggerContainer,
  imageZoom,
  defaultViewport,
} from "../../utils/animations";

const Connector = () => {
  // Enhanced animation variants for the ecosystem diagram
  const ecosystemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.3,
      },
    },
  };

  // Pulsing glow effect for the network connections
  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 1, 0.7, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="flex w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={staggerContainer}
    >
      <div className="relative w-full flex justify-center">
        {/* Desktop / Tablet View */}
        <motion.div
          className="hidden md:block relative"
          variants={ecosystemVariants}
        >
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl"
            variants={glowVariants}
            style={{
              width: "120%",
              height: "120%",
              left: "-10%",
              top: "-10%",
            }}
          />

          {/* Main ecosystem image */}
          <motion.img
            src={connectorDesktop}
            alt="Veralux Ecosystem Network - Connecting Users, Builders, Institutions, Marketplace, and Gamers"
            className="w-full h-auto max-h-[375px] object-contain relative z-10"
            whileHover={{
              scale: 1.05,
              filter: "drop-shadow(0 0 30px rgba(77, 243, 255, 0.3))",
              transition: { duration: 0.3 },
            }}
            variants={{
              hidden: { opacity: 0, y: 30, rotateX: -15 },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeOut",
                },
              },
            }}
          />

          {/* Floating particles effect */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Mobile View */}
        <motion.div
          className="block md:hidden relative"
          variants={ecosystemVariants}
        >
          {/* Mobile animated background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-2xl"
            variants={glowVariants}
            style={{
              width: "150%",
              height: "120%",
              left: "-25%",
              top: "-10%",
            }}
          />

          {/* Mobile ecosystem image */}
          <motion.img
            src={connectorMobile}
            alt="Veralux Ecosystem Network - Mobile View"
            className="w-full max-w-[192px] h-auto max-h-[594px] object-contain mx-auto relative z-10"
            whileHover={{
              scale: 1.03,
              filter: "drop-shadow(0 0 20px rgba(77, 243, 255, 0.3))",
              transition: { duration: 0.3 },
            }}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeOut",
                },
              },
            }}
          />

          {/* Mobile floating particles */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50"
              style={{
                left: `${25 + i * 20}%`,
                top: `${20 + (i % 2) * 60}%`,
              }}
              animate={{
                y: [-8, 8, -8],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.7, 1.1, 0.7],
              }}
              transition={{
                duration: 2.5 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Connection lines animation overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={defaultViewport}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Animated connection pulses */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${30 + i * 10}%`,
                top: `${40 + (i % 2) * 20}%`,
              }}
              animate={{
                scale: [0, 2, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Connector;
