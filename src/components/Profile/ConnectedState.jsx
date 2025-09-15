import React from "react";
import UserProfileHeader from "./UserProfileHeader";
import LuxTokenWallet from "./LuxTokenWallet";
import StakingChart from "./StakingChart";
import GovernanceCard from "./GovernanceCard";
import AirdropRewards from "./AirdropRewards";
import LiveLogs from "./LiveLogs";

export default function ConnectedState() {
  return (
    <div className="min-h-screen">
      <div className="w-full mt-[100px] sm:mt-[140px] lg:mt-[180px] xl:mt-[200px]">
        <div>
          <UserProfileHeader />
        </div>
        <div className="mt-[40px] xl:mt-[120px] sm:mt-[60px] md:mt-[60px] xs:mt-[40px]">
          <LuxTokenWallet />
        </div>
        <div className="mt-[40px] xl:mt-[120px] sm:mt-[60px] md:mt-[60px] xs:mt-[40px]">
          <StakingChart />
        </div>
        <div className="mt-[40px] xl:mt-[120px] sm:mt-[60px] md:mt-[60px] xs:mt-[40px]">
          <GovernanceCard />
        </div>
        <div className="mt-[40px] xl:mt-[120px] sm:mt-[60px] md:mt-[60px] xs:mt-[40px]">
          <AirdropRewards />
        </div>
        <div className="mt-[40px] xl:mt-[120px] sm:mt-[60px] md:mt-[60px] xs:mt-[40px] mb-[40px] xl:mb-[120px] sm:mb-[60px] md:mb-[60px] xs:mb-[40px">
          <LiveLogs />
        </div>
      </div>
    </div>
  );
}
