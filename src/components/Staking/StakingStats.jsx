import React from "react";

export default function StakingStats() {
  return (
    // <div className="bg-gray-900/60 backdrop-blur-lg p-6 rounded-2xl w-[432px] shadow-lg ">
    <div className="w-full lg:w-[45vw] bg-[rgba(51,102,255,0.03)] p-4 sm:p-6 border border-[rgba(254,254,254,0.25)] backdrop-blur-[25px] rounded-[12px] box-border">
      <div className="mb-6 sm:mb-8">
        <h2 className="w-full h-auto font-['TacticSans-Reg'] font-normal text-lg sm:text-xl md:text-2xl leading-tight tracking-[-0.02em] text-white flex-none order-0 self-stretch grow-0 font-tacticthin">
          Your Staking Stats
        </h2>
      </div>
      <ul className="space-y-2 text-gray-300 text-sm sm:text-base flex flex-col gap-3 sm:gap-4">
        <li className="flex justify-between items-center">
          <span>Staked SLUX:</span> <span>0</span>
        </li>
        <li className="flex justify-between items-center">
          <span>Current Tier:</span> <span>-</span>
        </li>
        <li className="flex justify-between items-center">
          <span>Lock Period:</span> <span>-</span>
        </li>
        <li className="flex justify-between items-center">
          <span>Voting Power:</span> <span>0 VP</span>
        </li>
        <li className="flex justify-between items-center">
          <span>Reward Available:</span> <span>0 SLUX</span>
        </li>
        <li className="flex justify-between items-center">
          <span>Next Reward:</span> <span>-</span>
        </li>
      </ul>

      <div className="mt-6 sm:mt-8 flex flex-col gap-4 sm:gap-6">
        <button className="w-full h-11 sm:h-[44px] py-2 bg-gradient-to-r from-[#3366FF] to-[#4DF3FF] rounded-md hover:bg-blue-600 transition text-white font-medium text-sm sm:text-base">
          Claim Rewards
        </button>
        <button className="w-full h-11 sm:h-[44px] py-2 rounded-md border border-gray-500 hover:bg-gray-800 transition text-white font-medium text-sm sm:text-base">
          Unstake
        </button>
      </div>
    </div>
  );
}
