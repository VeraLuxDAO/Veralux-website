import React from "react";
// import backgroundimage from "../assets/Frame 24233.png";
import backgroundimage from "../../assets/Frame 24233.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const title =
    "A Community-Driven\nEcosystem, Designed For The\nFuture Of Web3";

  // Animation for each letter
  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.05 },
    }),
  };

  return (
    <section className="relative text-white px-6 md:px-20 py-24 text-center flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Background image */}
      <img
        src={backgroundimage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 mt-80"
      />

      {/* Letter-by-letter animated heading */}
      <h1 className="relative z-10 text-4xl md:text-6xl font-bold leading-tight mt-20 font-tactic">
        {title.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
            className={char === "\n" ? "block" : ""}
          >
            {char}
          </motion.span>
        ))}
      </h1>

      {/* Subheading */}
      <p className="text-gray-300 max-w-xl text-lg mb-10 relative z-10 mt-6">
        Stake, govern and thrive in a decentralized ecosystem built on trust and
        transparency.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
        <button
          onClick={() => navigate("/waitlist")}
          className="bg-gradient-to-r from-[#3366FF] to-[#4DF3FF] hover:from-[#2952CC] hover:to-[#3DD1E6] transition-all duration-200 px-6 py-3 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer w-[224px] h-[48px]"
        >
          Join Waitlist
        </button>
        <button
          onClick={() =>
            window.open("https://veralux.gitbook.io/veralux-docs/", "_blank")
          }
          className="w-full sm:w-auto sm:min-w-[200px] h-[48px] border border-gray-400 hover:border-white rounded-lg text-white font-semibold text-base transition-all duration-200 hover:bg-white/5"
        >
          Whitepaper
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
