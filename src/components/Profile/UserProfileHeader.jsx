import React from "react";
import { FaRegCopy, FaClock } from "react-icons/fa";
import Profile from "../../assets/Profile.png";

export default function UserProfileHeader() {
  return (
    <div className="w-full max-w-[1280px] mx-auto rounded-2xl bg-[rgba(51,102,255,0.03)] border border-[rgba(254,254,254,0.25)] backdrop-blur-[25px] from-[#0f172a]/80 to-[#0b1120]/80 p-4 sm:p-6 lg:p-8 border border-white/10 shadow-lg">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-6">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-[25px] w-full lg:w-auto">
          {/* Avatar */}
          <img
            src={Profile}
            alt="profile"
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[96px] lg:h-[96px] rounded-full border border-blue-600 bg-[#B190B6] flex-shrink-0"
          />

          {/* User Info */}
          <div className="flex flex-col gap-1 sm:gap-[6px] flex-1 sm:flex-none">
            <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold font-tactic">
              Welcome Back, Crypto Whale
            </h2>

            {/* Wallet + Copy */}
            <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm mt-1">
              <span>0x12...ab34</span>
              <FaRegCopy
                className="cursor-pointer hover:text-white transition-colors"
                size={14}
              />
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="px-2 sm:px-3 py-1 text-xs rounded-md bg-gray-800 text-gray-300 border border-gray-600">
                Level 4: Governance Guru
              </span>
              <span className="px-2 sm:px-3 py-1 text-xs rounded-md bg-green-700 text-green-200">
                Active Staker
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start lg:items-end gap-2 sm:gap-[14px] w-full lg:w-auto xl:mb-[35px]">
          <button className="px-3 sm:px-4 py-2 text-sm rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium shadow w-full sm:w-auto rounded-[4px] bg-[linear-gradient(91.84deg,_#3366FF_47.38%,_#4DF3FF_128.54%)] transition-colors">
            Edit Profile
          </button>
          <div className="flex items-center text-gray-400 text-xs gap-1">
            <FaClock size={12} />
            <span>Last active: 2hrs ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
