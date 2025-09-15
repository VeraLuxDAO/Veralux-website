import React from "react";
import DashboardHeading from "./DashboardHeading";
import StakingTable from "./StakingTable.jsx";
import { stakingTiers } from "./StakingData";

export default function StakingRewards() {
  return (
    <div className="text-white pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-[120px]">
      <DashboardHeading />
      <StakingTable tiers={stakingTiers} />
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16"></div>
    </div>
  );
}
