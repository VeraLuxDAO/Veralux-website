import React from "react";
import { CheckCircle, XCircle, Star } from "lucide-react";

const GovernanceCard = () => {
  const votingHistory = [
    {
      title: "New Feature Idea: Enhanced Analytics",
      description:
        "What if users had access to deeper analytics on their activity and impact within VeraLux? Think: proposal engagement...",
      status: "Approved",
      percentage: "70% Yes",
      votes: "1,200 votes",
      time: "3 weeks ago",
    },
    {
      title: "Community-Led Marketing Initiatives",
      description:
        "How might we empower the community to lead marketing campaigns? We could offer small grants, tools, or even t...",
      status: "Rejected",
      percentage: "60% No",
      votes: "1,200 votes",
      time: "3 weeks ago",
    },
    {
      title: "New Feature Idea: Enhanced Analytics",
      description:
        "What if users had access to deeper analytics on their activity and impact within VeraLux? Think: proposal engagement...",
      status: "Approved",
      percentage: "70% Yes",
      votes: "1,200 votes",
      time: "3 weeks ago",
    },
  ];

  return (
    <div className=" text-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-[1280px] from-[#0d1015] to-[#0b0d11] rounded-2xl border border-gray-700 p-[24px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold font-tacticthin">Governance</h2>
          <button className="text-blue-500 hover:underline">
            View All Proposals
          </button>
        </div>

        <div className="flex-row lg:flex gap-6">
          {/* Left Section */}
          <div className="space-y-6 lg:w-[46%]">
            {/* Voting Power */}
            <div className="rounded-2xl border border-gray-700 p-5">
              <h3 className="text-lg font-medium mb-3">Your Voting Power</h3>
              <div className="flex items-center space-x-3 mb-2">
                <p className="text-3xl font-semibold">3 VP</p>
                <span className="px-2 py-1 text-xs rounded-full bg-green-700">
                  Active
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Your voting power is based on your staking tier and duration.
                Upgrade your tier to increase your influence in governance
                decisions.
              </p>

              <div className="flex justify-between text-sm">
                <p>
                  Current Tier: <br />
                  <span className="text-blue-400">Tier 2: Beacon</span>
                </p>
                <p>
                  Next Tier: <br />{" "}
                  <span className="text-blue-400">Tier 3: +7VP</span>
                </p>
              </div>
            </div>

            {/* How to Earn */}
            <div className="rounded-2xl border border-gray-700 p-5">
              <h3 className="text-lg font-medium mb-4">
                How to Earn More Voting Power
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-gray-400" />
                  <span>Upgrade to Tier 3 (1,250,000 $LUX) for 10 VP</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-gray-400" />
                  <span>Maintain your stake for at least 30 days</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-gray-400" />
                  <span>Participate in at least 5 governance votes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Voting History */}
          <div className="w-full">
            <h3 className="text-lg font-medium mb-4">Your Voting History</h3>
            <div className="space-y-5 rounded-2xl border border-gray-700 p-5">
              {votingHistory.map((item, idx) => (
                <div
                  key={idx}
                  className="pb-4 border-b border-gray-700 last:border-0"
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <Star className="text-yellow-400 w-4 h-4" />
                    <h4 className="font-medium">{item.title}</h4>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between text-xs">
                    <div className="flex flex-row gap-3">
                      <p
                        className={`font-medium ${
                          item.status === "Approved"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {item.status}
                      </p>
                      <p className="text-gray-300">{item.percentage}</p>
                      <p className="text-gray-300">{item.votes}</p>
                    </div>
                    <p className="text-gray-500">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceCard;
