import React from "react";
import StakingHeader from "../Staking/StakingHeader";
import StakingStats from "../Staking/StakingStats";
import ConnectWallet from "../Staking/ConnectWallet";
import StakingRewards from "../Staking/StaingRewards";
import APRSection from "../Staking/APRSection";
import StakingRules from "../Staking/StakingRules";

export default function Staking() {
  return (
    <div className="pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-28">
        <StakingHeader />
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-[25px] w-full min-h-[400px] lg:h-[610px] justify-center">
          <StakingStats />
          <ConnectWallet />
        </div>
        <div>
          <StakingRewards />
        </div>
        <div>
          <APRSection />
        </div>
        <div className="mb-20">
          <StakingRules />
        </div>
      </div>
    </div>
  );
}
/* Frame 24375 */
