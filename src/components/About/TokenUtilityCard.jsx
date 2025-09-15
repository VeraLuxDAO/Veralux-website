import React from "react";
import { FiInfo, FiCheckCircle } from "react-icons/fi";

const TokenUtilityCard = () => {
  const utilities = [
    "Governance Voting Rights",
    "Staking Rewards",
    "Transaction Payments",
    "Community Rewards",
  ];

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl w-full shadow-lg border border-gray-800">
      {/* Header */}
      <div className="flex items-center mb-4">
        <FiInfo className="w-6 h-6 text-blue-400 mr-2" />
        <h2 className="text-xl font-semibold font-tactic">Token Utility</h2>
      </div>

      {/* List */}
      <ul className="space-y-3">
        {utilities.map((item, index) => (
          <li
            key={index}
            className="flex items-center hover:text-green-300 transition-colors duration-200"
          >
            <FiCheckCircle className="w-5 h-5 text-green-400 mr-2" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TokenUtilityCard;
