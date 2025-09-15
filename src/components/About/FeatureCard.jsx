import React from "react";
import { motion } from "framer-motion";
import TokenUtilityCard from "./TokenUtilityCard";
import SecurityCard from "./SecurityCard";
import {
  staggerContainer,
  cardFloat,
  defaultViewport,
} from "../../utils/animations";

const FeatureCard = () => {
  return (
    <section className="text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pt-[32px] flex justify-center">
      <motion.div
        className="w-full max-w-7xl flex flex-col md:flex-row gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
      >
        {/* Token Utility */}
        <motion.div
          className="w-full max-w-full"
          variants={cardFloat}
          whileHover="hover"
        >
          <TokenUtilityCard />
        </motion.div>

        {/* Security Features */}
        <motion.div
          className="w-full max-w-full"
          variants={cardFloat}
          whileHover="hover"
        >
          <SecurityCard />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeatureCard;
