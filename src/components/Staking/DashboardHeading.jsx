import React from "react";

export default function DashboardHeading() {
  return (
    <div className="flex flex-col justify-center items-center mb-8 sm:mb-10 md:mb-12 px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-center font-tactic">
        Staking Requirements & Rewards
      </h2>
      <p className="text-sm sm:text-base md:text-[15px] text-gray-400 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl text-center">
        Below is a table of the four staking tiers, showing LUX tokens required,
        value at launch, lock periods, voting power, and weekly rewards at 150%
        APR.
      </p>
    </div>
  );
}
