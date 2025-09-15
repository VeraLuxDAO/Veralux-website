import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function StakingChart() {
  const data = [
    { week: "Week 1", staked: 250000, reward: 10000 },
    { week: "Week 2", staked: 250000, reward: 12000 },
    { week: "Week 3", staked: 300000, reward: 15000 },
    { week: "Week 4", staked: 500000, reward: 18000 },
    { week: "Week 5", staked: 500000, reward: 20000 },
    { week: "Week 6", staked: 500000, reward: 22000 },
    { week: "Week 7", staked: 500000, reward: 24000 },
    { week: "Week 8", staked: 500000, reward: 25000 },
  ];

  return (
    <div className="w-full max-w-[1280px] mx-auto rounded-2xl from-[#0f172a]/80 to-[#0b1120]/80 p-6 sm:p-8 border border-white/10 shadow-lg text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg sm:text-xl font-semibold font-tacticthin">
          Staking
        </h2>
        <button className="text-blue-400 text-sm hover:underline">
          View Staking Details
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] mb-6">
        <div className="rounded-xl border border-white/10  p-4">
          <p className="text-gray-400 text-sm">$LUX Staked</p>
          <h3 className="text-xl font-bold mt-[24px]">500,000 $LUX</h3>
        </div>
        <div className="rounded-xl border border-white/10  p-4">
          <p className="text-gray-400 text-sm">Weekly Earnings</p>
          <h3 className="text-xl font-bold mt-[24px]">14,423 $LUX</h3>
        </div>
        <div className="rounded-xl border border-white/10  p-4">
          <p className="text-gray-400 text-sm">Current Tier</p>
          <h3 className="text-xl font-bold mt-[24px]">Tier 2: Beacon</h3>
        </div>
        <div className="rounded-xl border border-white/10  p-4">
          <p className="text-gray-400 text-sm">Rewards Unclaimed</p>
          <h3 className="text-xl font-bold mt-[24px]">28,846 $LUX</h3>
        </div>
      </div>

      {/* Chart + APR */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Chart */}
        <div className="rounded-xl border border-white/10  p-4 lg:col-span-2 h-[335px]">
          <h3 className="text-gray-300 text-sm mb-3">Staking Progress</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="week" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #1e293b",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="staked"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="reward"
                  stroke="#22c55e"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center gap-6 mt-4 text-sm justify-center">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="text-gray-400">Staked Amount</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="text-gray-400">Reward</span>
            </div>
          </div>
        </div>

        {/* APR Info */}
        <div className="">
          <div className="rounded-xl border border-white/10  p-4 flex flex-col justify-between p-[24px] pb-[40px]">
            <p className="text-gray-400  text-[22px] mb-3">Current APR</p>
            <div className="flex  gap-1 justify-between items-end mt-4">
              <h3 className="text-2xl font-bold text-green-400">150%</h3>
              <p className="text-xs text-gray-400 mt-1">
                Next Evaluation: 2d 4h
              </p>
            </div>
            <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-[80%] bg-green-500"></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Pool: 8.5B $LUX</span>
              <span>Threshold: 7.3B $LUX</span>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-[24px]">
            <button className="px-4 py-2 rounded-md h-[44px] font-medium bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:opacity-90 transition flex items-center justify-center gap-2">
              <span>🎁</span> Claim Rewards
            </button>
            <button className="px-4 py-2 rounded-md h-[44px] font-medium border border-white/20 text-white hover:bg-white/10 transition">
              Upgrade Tier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
