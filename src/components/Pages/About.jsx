import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../About/HeroSection";
import AboutSection from "../About/AboutSection";
import VeraluxFeatures from "../About/VeraluxFeatures";
import Connector from "../About/Connector";
import Tokenomics from "../About/Tokenomics";
import FeatureCard from "../About/FeatureCard";
import TokenAllocation from "../About/TokenAllocation";
import TeamSection from "../About/Team";

const About = () => {
  // Detect if user prefers reduced motion (safely)
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  // Optimized stagger container for faster desktop loading
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.05, // Faster stagger
        delayChildren: prefersReducedMotion ? 0 : 0.02, // Minimal delay
        duration: prefersReducedMotion ? 0.1 : 0.3, // Quick container fade
      },
    },
  };

  // Faster section animations for desktop
  const sectionVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.4, // Faster duration
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen"
    >
      <motion.div variants={sectionVariants}>
        <HeroSection />
      </motion.div>

      <motion.div variants={sectionVariants} className="min-h-[400px]">
        <AboutSection />
      </motion.div>

      <motion.div variants={sectionVariants} className="min-h-[600px]">
        <VeraluxFeatures />
      </motion.div>

      <motion.div variants={sectionVariants} className="min-h-[300px]">
        <Connector />
      </motion.div>

      <motion.div variants={sectionVariants} className="min-h-[500px]">
        <Tokenomics />
      </motion.div>

      <motion.div variants={sectionVariants} className="min-h-[400px]">
        <FeatureCard />
      </motion.div>

      <motion.div variants={sectionVariants} className="min-h-[500px]">
        <TokenAllocation />
      </motion.div>

      <motion.div variants={sectionVariants} className="min-h-[400px]">
        <TeamSection />
      </motion.div>
    </motion.div>
  );
};

export default About;
