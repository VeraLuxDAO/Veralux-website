import React, { memo } from "react";
import { motion } from "framer-motion";
import pad from "../../assets/Pad.png";
import social from "../../assets/SocialMedia.png";
import market from "../../assets/market.png";
import DevTools from "../../assets/Devtools.png";
import VeraluxSolutions from "./VeraluxSolutions";
import {
  staggerContainer,
  cardFloat,
  titleAnimation,
  imageSlideIn,
  defaultViewport,
} from "../../utils/animations";

const VeraluxFeatures = () => {
  const features = [
    {
      title: "Social Hub",
      description:
        "Connect with like-minded people through chats and posts (called Flows) that reward positive, creative ideas. Build your rep by sharing helpful content and innovative ideas to unlock features like tipping or boosted visibility.",
      icon: social,
      link: "#",
      align: "right",
    },
    {
      title: "Gaming Hub",
      description:
        "Jump into fun, community-checked games where you can team up in guilds, compete for rewards, and even create your own game, it's a safe social spot to play and earn without worries about scams or unfair play.",
      icon: pad,
      link: "#",
      align: "left",
    },
    {
      title: "Marketplace",
      description:
        "Buy, sell and trade digital items, physical goods, Dev tools, AI agents and services from trusted Web3 projects. All vetted by the community and AI for safety, with low fees that drop as your rep grows.",
      icon: market,
      link: "#",
      align: "right",
    },
    {
      title: "Dev & Institutional Ready Infra Tools",
      description:
        "Access easy tools to build or launch projects, games and products. Like code helpers, SDKs, AI assistant and smart contract frameworks. Start free with high rep and subscribe for advanced features, all designed to help innovators succeed without technical headaches.",
      icon: DevTools,
      link: "#",
      align: "left",
    },
  ];

  // Using enhanced animation system
  const headerVariants = titleAnimation;
  const containerVariants = staggerContainer;

  return (
    <section
      id="features"
      className="min-h-screen text-white py-4 sm:py-6 md:py-8 lg:py-12 flex flex-col justify-center relative px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
    >
      <motion.div
        className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={headerVariants}
      >
        {/* FEATURES Button */}
        <motion.div
          className="mb-3 sm:mb-4 md:mb-6"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 border border-blue-400 rounded-lg bg-transparent text-white text-xs sm:text-sm font-medium flex items-center gap-2 hover:border-blue-300 transition-colors hover:shadow-lg hover:shadow-blue-400/20">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">T</span>
            </div>
            FEATURES
          </button>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 font-tactic bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
            },
          }}
        >
          What can I do with Veralux?
        </motion.h1>
      </motion.div>

      {/* Responsive Grid Layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-full max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={containerVariants}
      >
        {features.map((feature, index) => {
          // Alternating pattern for mobile only: odd index (0,2,4...) = right, even index (1,3,5...) = left
          // For 768px+, all icons on the right
          const isIconOnRight = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl shadow-xl border border-gray-700/50 cursor-pointer overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[250px] scroll-optimized hardware-accelerated relative"
              variants={cardFloat}
              whileHover="hover"
              style={{
                background:
                  "linear-gradient(135deg, rgba(75, 85, 99, 0.3) 0%, rgba(55, 65, 81, 0.5) 100%)",
              }}
            >
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Flex container for proper layout */}
              <div
                className={`relative z-10 flex items-center gap-4 h-full ${
                  isIconOnRight ? "flex-row" : "flex-row-reverse"
                } md:flex-row`}
              >
                {/* Text Section - Takes remaining space */}
                <motion.div
                  className="flex-1 flex flex-col justify-between h-full min-w-0"
                  variants={{
                    hidden: { opacity: 0, x: isIconOnRight ? -20 : 20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, delay: 0.1 },
                    },
                  }}
                >
                  <div>
                    <motion.h2
                      className="text-base font-tactic sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-blue-100 transition-colors duration-300"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.4, delay: 0.2 },
                        },
                      }}
                    >
                      {feature.title}
                    </motion.h2>
                    <motion.p
                      className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.4, delay: 0.3 },
                        },
                      }}
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                  <motion.a
                    href={feature.link}
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-all duration-300 text-sm sm:text-base group-hover:translate-x-2"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.4, delay: 0.4 },
                      },
                    }}
                  >
                    Learn More
                    <motion.svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </motion.svg>
                  </motion.a>
                </motion.div>

                {/* Image Section - Fixed width with animation */}
                <motion.div
                  className="flex-shrink-0 flex items-center justify-center"
                  variants={imageSlideIn}
                >
                  <motion.img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                    decoding="async"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <VeraluxSolutions />
    </section>
  );
};

export default memo(VeraluxFeatures);
