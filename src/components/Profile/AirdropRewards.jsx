import React from "react";

export default function AirdropRewards() {
  return (
    <div className="w-full max-w-[1280px] mx-auto p-6 border border-white/10 rounded-[12px]">
      {/* Top Section */}
      <h2 className="text-white text-2xl font-semibold mb-6 font-tacticthin">
        Airdrop & Rewards
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Claimable Airdrops */}
        <div className=" border border-white/10 rounded-2xl p-6 shadow-md">
          <h3 className="text-white text-lg font-medium mb-2">
            Claimable Airdrops
          </h3>
          <div className="bg-[#0F172A]/80 flex flex-col gap-2 p-4">
            <div className="flex flex-row gap-2 justify-between">
              <div className="text-gray-100 text-[16px]">
                Governance Participant
              </div>
              <div className="text-gray-300 text-[16px]">5000 $LUX</div>
            </div>
            <p className="text-gray-500 text-sm">For voting in 3+ proposals</p>
            <button className="w-full mt-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium">
              Claim Now
            </button>
          </div>
        </div>

        {/* Pending Airdrops */}
        <div className=" border border-white/10 rounded-2xl p-6 shadow-md">
          <h3 className="text-white text-lg font-medium mb-2">
            Pending Airdrops
          </h3>
          <div className="bg-[#0F172A]/80 flex flex-col gap-2 p-4">
            <div className="flex flex-row gap-2 justify-between">
              <div className="text-gray-100 text-[16px]">
                Community Challenge
              </div>
              <div className="text-gray-300 text-[16px] font-semibold">
                5000 $LUX
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Releasing in: <span className="text-white">3 Days</span>
            </p>
          </div>
        </div>

        {/* Ways to Earn Airdrop */}
        <div className=" border border-white/10 rounded-2xl p-6 shadow-md">
          <h3 className="text-white text-lg font-medium mb-4">
            Ways to Earn Airdrop
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm p-4 bg-[#0F172A]/80">
            <li>• Participate in the Challenge Competition</li>
            <li>• Maintain Tier 3+ staking for 60+ days</li>
            <li>• Vote in all governance proposals</li>
            <li>• Refer new users to Versalux</li>
          </ul>
        </div>
      </div>

      {/* Badges Section */}
      <h3 className="text-white text-lg font-medium mt-10 mb-4">Your Badges</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { name: "Loyal Staker", desc: "Staked for 30+ days", icon: "🌐" },
          { name: "Civic Duty", desc: "Voted in 5+ Proposals", icon: "✅" },
          { name: "Airdrop Hunter", desc: "Claimed 3+ airdrops", icon: "🎁" },
          { name: "Early Adopter", desc: "locked", icon: "⏳" },
          { name: "Tier 4 Staker", desc: "locked", icon: "👑" },
          {
            name: "Genesis Member",
            desc: "Permanent",
            icon: "🏛️",
            highlight: true,
          },
        ].map((badge, i) => (
          <div
            key={i}
            className={`rounded-2xl p-4 border ${
              badge.highlight
                ? " border-yellow-500 text-yellow-400"
                : " border-white/10 text-yellow-300"
            } text-center shadow-md`}
          >
            <div className="text-3xl mb-2">{badge.icon}</div>
            <div className="font-medium text-white">{badge.name}</div>
            <div className="text-xs mt-1 text-gray-300">{badge.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
