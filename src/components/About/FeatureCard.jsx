import React from "react";
import TokenUtilityCard from "./TokenUtilityCard";
import SecurityCard from "./SecurityCard";

const FeatureCard = () => {
  return (
    <section className="text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pt-[32px] flex justify-center">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-6">
        {/* Token Utility */}
        <div className="w-full max-w-full">
          <TokenUtilityCard />
        </div>

        {/* Security Features */}
        <div className="w-full max-w-full">
          <SecurityCard />
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
