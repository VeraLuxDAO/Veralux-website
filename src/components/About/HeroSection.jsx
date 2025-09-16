import React, { memo } from "react";
// import backgroundimage from "../assets/Frame 24233.png";
import backgroundimage from "../../assets/Frame 24233.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const title =
    "A Community-Driven\nEcosystem, Designed For The\nFuture Of Web3";

  // Optimized animation for the entire title - faster for desktop
  const titleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }, // Faster duration
    },
  };

  return (
    <section className="relative text-white px-6 md:px-20 py-24 text-center flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Background image */}
      <img
        src={backgroundimage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 mt-80"
        loading="lazy"
        decoding="async"
      />

      {/* Optimized animated heading */}
      <motion.h1
        className="relative z-10 text-4xl md:text-6xl font-bold leading-tight mt-20 font-tactic hardware-accelerated"
        variants={titleAnimation}
        initial="hidden"
        animate="visible"
      >
        {title.split("\n").map((line, i) => (
          <div key={i} className="block">
            {line}
          </div>
        ))}
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-gray-300 max-w-xl text-lg mb-10 relative z-10 mt-6"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }} // Faster and earlier
      >
        Stake, govern and thrive in a decentralized ecosystem built on trust and
        transparency.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }} // Much faster
      >
        <motion.button
          onClick={() => navigate("/waitlist")}
          className="bg-gradient-to-r from-[#3366FF] to-[#4DF3FF] hover:from-[#2952CC] hover:to-[#3DD1E6] transition-all duration-200 px-6 py-3 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl cursor-pointer w-[224px] h-[48px]"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(77, 243, 255, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Join Waitlist
        </motion.button>
        <motion.button
          onClick={() =>
            window.open("https://veralux.gitbook.io/veralux-docs/", "_blank")
          }
          className="w-full sm:w-auto sm:min-w-[200px] h-[48px] border border-gray-400 hover:border-white rounded-lg text-white font-semibold text-base transition-all duration-200 hover:bg-white/5"
          whileHover={{
            scale: 1.02,
            borderColor: "rgba(255, 255, 255, 1)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          Whitepaper
        </motion.button>
      </motion.div>
    </section>
  );
};

export default memo(HeroSection);
