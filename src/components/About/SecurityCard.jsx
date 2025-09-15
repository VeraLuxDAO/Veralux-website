import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiCheckCircle } from "react-icons/fi";

const SecurityCard = () => {
  const features = [
    "Vesting Schedules",
    "Multisig Wallet",
    "Time-Locked Releases",
    "Transparent Operations",
  ];

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl w-full shadow-lg border border-gray-800 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group">
      {/* Header */}
      <motion.div
        className="flex items-center mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{
            rotate: [0, -10, 10, -10, 0],
            scale: 1.2,
            filter: "drop-shadow(0 0 12px rgba(59, 130, 246, 0.6))",
          }}
          transition={{ duration: 0.5 }}
        >
          <FiShield className="w-6 h-6 mr-2 text-blue-400" />
        </motion.div>
        <h2 className="text-xl font-semibold font-tactic group-hover:text-purple-100 transition-colors duration-300">
          Security Features
        </h2>
      </motion.div>

      {/* Feature List */}
      <motion.ul
        className="space-y-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-center hover:text-purple-300 transition-colors duration-200 cursor-pointer"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.4 },
              },
            }}
            whileHover={{
              x: 8,
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              whileHover={{
                rotate: 360,
                scale: 1.3,
                filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.5))",
              }}
              transition={{ duration: 0.3 }}
            >
              <FiCheckCircle className="w-5 h-5 mr-2 text-gray-400 hover:text-purple-400 transition-colors duration-200" />
            </motion.div>
            <span className="group-hover:text-gray-100 transition-colors duration-300">
              {feature}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default SecurityCard;
