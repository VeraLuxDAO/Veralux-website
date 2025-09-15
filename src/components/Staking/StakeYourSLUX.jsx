import React, { useState } from "react";

export default function StakeYourSLUX() {
  const [selectedTier, setSelectedTier] = useState(1);
  const [amount, setAmount] = useState("");
  const [lockPeriod, setLockPeriod] = useState("1 Month");

  const tiers = [
    {
      id: 1,
      name: "Tier 1",
      required: "1,000 LUX",
      value: "$100",
      lock: "1 Month",
      vp: "1 VP",
      weekly: "2.88 LUX",
    },
    {
      id: 2,
      name: "Tier 2",
      required: "5,000 LUX",
      value: "$500",
      lock: "3 Months",
      vp: "5 VP",
      weekly: "14.42 LUX",
    },
    {
      id: 3,
      name: "Tier 3",
      required: "10,000 LUX",
      value: "$1,000",
      lock: "6 Months",
      vp: "10 VP",
      weekly: "28.85 LUX",
    },
    {
      id: 4,
      name: "Tier 4",
      required: "25,000 LUX",
      value: "$2,500",
      lock: "12 Months",
      vp: "25 VP",
      weekly: "72.12 LUX",
    },
  ];

  const selectedTierData = tiers.find((tier) => tier.id === selectedTier);

  const handleMaxAmount = () => {
    // This would typically get the user's available balance
    setAmount("1000");
  };

  const calculateEstimatedRewards = () => {
    if (!amount) return "0 SLUX";
    const weeklyReward = (parseFloat(amount) * 0.15) / 52; // 150% APR / 52 weeks
    return `${weeklyReward.toFixed(2)} SLUX`;
  };

  return (
    <div className="w-full flex flex-col justify-center items-center bg-[rgba(51,102,255,0.03)] p-4 sm:p-6 border border-[rgba(254,254,254,0.25)] backdrop-blur-[25px] rounded-[12px] box-border">
      <div className="w-full max-w-[530px]">
        {/* Title */}
        <h2 className="w-full h-auto font-['Instrument_Sans'] font-medium text-lg sm:text-xl md:text-2xl leading-tight text-center text-white mb-6">
          Stake Your SLUX
        </h2>

        {/* Tier Selection */}
        <div className="mb-6">
          <div className="flex gap-2 sm:gap-3 justify-center">
            {tiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition ${
                  selectedTier === tier.id
                    ? "bg-gradient-to-r from-[#3366FF] to-[#4DF3FF] text-white"
                    : "border border-white/30 text-white hover:border-white/50"
                }`}
              >
                {tier.name}
              </button>
            ))}
          </div>
        </div>

        {/* Amount Input */}
        <div className="mb-6">
          <label className="block text-sm text-gray-300 mb-2">
            Amount to Stake
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="flex-1 px-3 py-2 bg-transparent border border-white/30 rounded-md text-white placeholder-gray-400 focus:border-[#3366FF] focus:outline-none"
            />
            <button
              onClick={handleMaxAmount}
              className="px-4 py-2 bg-transparent border border-white/30 text-white text-sm rounded-md hover:border-white/50 transition"
            >
              MAX
            </button>
          </div>
        </div>

        {/* Lock Period */}
        <div className="mb-6">
          <label className="block text-sm text-gray-300 mb-2">
            Lock Period
          </label>
          <select
            value={lockPeriod}
            onChange={(e) => setLockPeriod(e.target.value)}
            className="w-full px-3 py-2 bg-transparent border border-white/30 rounded-md text-white focus:border-[#3366FF] focus:outline-none"
          >
            <option value="1 Month">1 Month</option>
            <option value="3 Months">3 Months</option>
            <option value="6 Months">6 Months</option>
            <option value="12 Months">12 Months</option>
          </select>
        </div>

        {/* Staking Summary */}
        <div className="mb-6 p-4 bg-black/20 rounded-md border border-white/10">
          <h3 className="text-sm font-medium text-white mb-3">
            Staking Summary
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-300">Staked SLUX:</span>
              <span className="text-white">{amount || "0"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Lock Period:</span>
              <span className="text-white">{lockPeriod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Voting Power:</span>
              <span className="text-white">
                {selectedTierData?.vp || "0 VP"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Estimated APR:</span>
              <span className="text-white">150%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Estimated Rewards:</span>
              <span className="text-white">{calculateEstimatedRewards()}</span>
            </div>
          </div>
        </div>

        {/* Stake Button */}
        <button className="w-full h-12 bg-gradient-to-r from-[#3366FF] to-[#4DF3FF] text-white font-medium rounded-md hover:opacity-90 transition">
          Stake
        </button>
      </div>
    </div>
  );
}
