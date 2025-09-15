import React from "react";
import { motion } from "framer-motion";
import { FiInfo, FiCheckCircle } from "react-icons/fi";
import { textReveal } from "../../utils/animations";

const TokenUtilityCard = () => {
  const utilities = [
    "Governance Voting Rights",
    "Staking Rewards",
    "Transaction Payments",
    "Community Rewards",
  ];

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl w-full shadow-lg border border-gray-800 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
      {/* Header */}
      <motion.div
        className="flex items-center mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <FiInfo className="w-6 h-6 text-blue-400 mr-2" />
        </motion.div>
        <h2 className="text-xl font-semibold font-tactic group-hover:text-blue-100 transition-colors duration-300">
          Token Utility
        </h2>
      </motion.div>

      {/* List */}
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
        {utilities.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center hover:text-green-300 transition-colors duration-200 cursor-pointer"
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
                filter: "drop-shadow(0 0 8px rgba(34, 197, 94, 0.5))",
              }}
              transition={{ duration: 0.3 }}
            >
              <FiCheckCircle className="w-5 h-5 text-green-400 mr-2" />
            </motion.div>
            <span className="group-hover:text-gray-100 transition-colors duration-300">
              {item}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default TokenUtilityCard;
