import React from "react";

export default function StakingHeader() {
  return (
    <div className="text-center px-4  md:px-8 pt-16 sm:pt-24  md:pt-24 lg:pt-32 xl:pt-[212px] pb-16 sm:pb-20 md:pb-24 lg:pb-32 xl:pb-[120px]">
      <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white px-4 font-tactic">
        Staking System
      </h1>
      <p className="text-gray-400 text-sm sm:text-base md:text-[15px] mt-2 sm:mt-3 md:mt-4 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto px-4">
        The VeraLux staking system lets users lock LUX tokens to earn weekly
        rewards and gain voting power (VP) for governance
      </p>
    </div>
  );
}
