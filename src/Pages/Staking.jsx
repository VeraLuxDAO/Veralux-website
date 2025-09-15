import React from "react";
import StakingHeader from "../components/Staking/StakingHeader";
import StakingStats from "../components/Staking/StakingStats";
import ConnectWallet from "../components/Staking/ConnectWallet";
import StakingRewards from "../components/Staking/StaingRewards";
import APRSection from "../components/Staking/APRSection";
import StakingRules from "../components/Staking/StakingRules";

export default function Staking() {
  return (
    <div>
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
