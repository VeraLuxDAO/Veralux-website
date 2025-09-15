import React from "react";
import { motion } from "framer-motion";
import pad from "../../assets/Pad.png";
import social from "../../assets/SocialMedia.png";
import market from "../../assets/market.png";
import DevTools from "../../assets/Devtools.png";
import VeraluxSolutions from "./VeraluxSolutions";

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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="features"
      className="min-h-screen text-white py-4 sm:py-6 md:py-8 lg:py-12 flex flex-col justify-center relative px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12">
        {/* FEATURES Button */}
        <div className="mb-3 sm:mb-4 md:mb-6">
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 border border-blue-400 rounded-lg bg-transparent text-white text-xs sm:text-sm font-medium flex items-center gap-2 hover:border-blue-300 transition-colors">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">T</span>
            </div>
            FEATURES
          </button>
        </div>

        {/* Main Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 font-tactic">
          What can I do with Veralux?
        </h1>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-full max-w-6xl mx-auto">
        {features.map((feature, index) => {
          // Alternating pattern for mobile only: odd index (0,2,4...) = right, even index (1,3,5...) = left
          // For 768px+, all icons on the right
          const isIconOnRight = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl shadow-xl border border-gray-700/50 cursor-pointer overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[250px]"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Flex container for proper layout */}
              <div
                className={`flex items-center gap-4 h-full ${
                  isIconOnRight ? "flex-row" : "flex-row-reverse"
                } md:flex-row`}
              >
                {/* Text Section - Takes remaining space */}
                <div className="flex-1 flex flex-col justify-between h-full min-w-0">
                  <div>
                    <h2 className="text-base font-tactic sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-white">
                      {feature.title}
                    </h2>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <a
                    href={feature.link}
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-colors text-sm sm:text-base"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>

                {/* Image Section - Fixed width */}
                <div className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain opacity-90"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <VeraluxSolutions />
    </section>
  );
};

export default VeraluxFeatures;
