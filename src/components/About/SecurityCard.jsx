import React from "react";
import { FiShield, FiCheckCircle } from "react-icons/fi";

const SecurityCard = () => {
  const features = [
    "Vesting Schedules",
    "Multisig Wallet",
    "Time-Locked Releases",
    "Transparent Operations",
  ];

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl w-full shadow-lg border border-gray-800">
      {/* Header */}
      <div className="flex items-center mb-4">
        <FiShield className="w-6 h-6 mr-2 text-blue-400" />
        <h2 className="text-xl font-semibold font-tactic">Security Features</h2>
      </div>

      {/* Feature List */}
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center hover:text-green-300 transition-colors duration-200"
          >
            <FiCheckCircle className="w-5 h-5 mr-2 text-gray-400" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecurityCard;
