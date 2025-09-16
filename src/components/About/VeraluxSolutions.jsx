import React from "react";
import { motion } from "framer-motion";
import cube from "../../assets/3DCUBE.png";
import {
  fadeInLeft,
  fadeInRight,
  titleAnimation,
  staggerContainer,
  defaultViewport,
} from "../../utils/animations";

const VeraluxSolutions = () => {
  return (
    <section
      id="solutions"
      className="text-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 flex justify-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full max-w-7xl gap-8 sm:gap-12 lg:gap-16">
        {/* Image Section */}
        <motion.div
          className="flex justify-center lg:justify-start flex-shrink-0"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInLeft}
        >
          <motion.img
            src={cube}
            alt="Veralux Illustration"
            className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[465px] object-contain animate-spinInfinite"
            whileHover={{
              scale: 1.1,
              filter: "drop-shadow(0 0 30px rgba(77, 243, 255, 0.4))",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1 w-full p-4 sm:p-6 lg:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInRight}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center lg:text-left font-tactic bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent"
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
              Veralux
            </span>{" "}
            Solutions
          </motion.h2>
          <motion.p
            className="text-gray-300 leading-relaxed font-medium text-sm sm:text-base md:text-lg text-center lg:text-left mb-6 sm:mb-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, delay: 0.4 },
              },
            }}
          >
            Bridging creators, builders, institutions, marketplace & gamers in
            one social hub.
          </motion.p>

          <motion.ul
            className="py-4 sm:py-6 space-y-3 text-sm sm:text-base md:text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.6,
                },
              },
            }}
          >
            {[
              {
                title: "For Creators:",
                desc: "Monetize work, collaborate, retain ownership",
              },
              {
                title: "For Gamers:",
                desc: "Trade assets, earn rewards, shape games",
              },
              {
                title: "For Builders/Institutions:",
                desc: "Fund projects, access talent, govern",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start group cursor-pointer"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                whileHover={{
                  x: 8,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.span
                  className="text-blue-400 font-semibold mr-2 mt-1"
                  whileHover={{
                    scale: 1.3,
                    rotate: 360,
                    filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  ✓
                </motion.span>
                <div className="group-hover:text-blue-100 transition-colors duration-300">
                  <span className="font-semibold text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                    {item.title}
                  </span>
                  <span className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                    {" "}
                    {item.desc}
                  </span>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="p-4 sm:p-6 border border-gray-700 rounded-lg text-sm sm:text-base bg-gray-800/40 backdrop-blur-sm hover:border-blue-500/50 hover:bg-gray-800/60 transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 25px rgba(77, 243, 255, 0.1)",
            }}
          >
            <motion.p
              className="leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              It's all connected, so your actions in one area (like earning rep
              from a game) boost you in others (like getting better deals in the
              marketplace). This creates a vibrant community where ideas grow,
              people collaborate, and everyone benefits from transparency and
              fairness.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VeraluxSolutions;
