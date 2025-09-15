import React, { useState } from "react";

export default function ConnectedWallet() {
  const [selectedTier, setSelectedTier] = useState(1);
  const [amount, setAmount] = useState("");

  const tiers = [
    { id: 1, lux: "10,000 $LUX", lock: "7 days lock" },
    { id: 2, lux: "10,000 $LUX", lock: "7 days lock" },
    { id: 3, lux: "10,000 $LUX", lock: "7 days lock" },
    { id: 4, lux: "10,000 $LUX", lock: "7 days lock" },
  ];

  const handleMaxAmount = () => {
    // This would typically get the user's available balance
    setAmount("10000");
  };

  const calculateWeeklyRewards = () => {
    if (!amount) return "0k $LUX";
    const weeklyReward = (parseFloat(amount) * 0.15) / 52; // 150% APR / 52 weeks
    return `${(weeklyReward / 1000).toFixed(0)}k $LUX`;
  };

  return (
    <div className="w-full flex flex-col justify-center items-center bg-[rgba(51,102,255,0.03)] p-4 sm:p-6 border border-[rgba(254,254,254,0.25)] backdrop-blur-[25px] rounded-[12px] box-border">
      <div className="w-full">
        {/* Main Heading */}
        <h2 className="w-full h-auto font-['Instrument_Sans'] font-tacticthin font-medium text-lg sm:text-xl md:text-2xl leading-tight text-left text-white mb-[21px]">
          Stake Your $LUX
        </h2>

        {/* Select Tier Section */}
        <div className="mb-[24px]">
          <h3 className="text-sm sm:text-base font-light text-gray-300 mb-[16px]">
            Select Tier
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[16px] sm:gap-3">
            {tiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`p-3 sm:p-4 w-full h-[115px] rounded-lg border transition ${
                  selectedTier === tier.id
                    ? "border-[#3366FF] bg-[#3366FF]/10"
                    : "border-white/30 hover:border-white/50"
                }`}
              >
                <div className="text-left">
                  <h1>Tier 1</h1>
                  <div className="text-xs sm:text-sm font-medium text-white mb-1">
                    {tier.lux}
                  </div>
                  <div className="text-xs text-gray-400">{tier.lock}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Amount To Stake Section */}
        <div className="mb-6">
          <label className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
            Amount To Stake
          </label>
          <div className="flex gap-2 position-relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter $LUX Amount"
              className="flex-1 px-3 py-2 bg-transparent border border-white/30 rounded-md text-white placeholder-gray-400 focus:border-[#3366FF] focus:outline-none"
            />
            <button
              onClick={handleMaxAmount}
              className="px-4 py-2 bg-transparent absolute right-[20px] text-green-300 text-sm rounded-md hover:border-white/50 transition"
            >
              MAX
            </button>
          </div>
        </div>

        {/* Staking Summary Section */}
        <div className="mb-6 p-4 bg-black/20 rounded-md border border-white/10">
          <h3 className="text-sm sm:text-base font-medium text-white mb-3">
            Staking Summary
          </h3>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-300">Selected Tier:</span>
              <span className="text-white">{selectedTier}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Voting Power:</span>
              <span className="text-white">{selectedTier * 3} VP</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Lock Period:</span>
              <span className="text-white">2 weeks</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Weekly Rewards:</span>
              <span className="text-white">{calculateWeeklyRewards()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">APR:</span>
              <span className="text-green-400 font-medium">150%</span>
            </div>
          </div>
        </div>

        {/* Start Now Button */}
        <button className="w-full h-12 bg-gradient-to-r from-[#3366FF] to-[#4DF3FF] text-white font-medium rounded-md hover:opacity-90 transition">
          Start Now!
        </button>
      </div>
    </div>
  );
}
