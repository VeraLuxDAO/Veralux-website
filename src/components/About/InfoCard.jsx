import React from "react";

const InfoCard = () => {
  return (
    <div className="flex flex-row items-center justify-between px-2 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 bg-gray-900 rounded-xl sm:rounded-2xl shadow-lg text-white border border-gray-700 overflow-hidden w-full max-w-lg">
      {/* Card Item 1 - 100B */}
      <div className="flex flex-col items-center text-center border-r border-blue-700 pr-2 sm:pr-4 md:pr-6 flex-1 font-tactic">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-1 sm:mb-2 font-extrabold bg-gradient-to-r from-[#3366FF] via-[#4DF3FF] to-[#4DF3FF] bg-clip-text text-transparent select-none font-tactic">
          100B
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 font-tactic">
          Total Supply
        </p>
      </div>

      {/* Card Item 2 - 3% */}
      <div className="flex flex-col items-center text-center border-r border-blue-700 px-2 sm:px-4 md:px-6 flex-1">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-1 sm:mb-2 font-extrabold bg-gradient-to-r from-[#3366FF] via-[#4DF3FF] to-[#4DF3FF] bg-clip-text text-transparent select-none font-tactic">
          3%
        </h3>
        <p className="text-xs sm:text-sm text-gray-400">Transaction Fee</p>
      </div>

      {/* Card Item 3 - Fixed Deflationary */}
      <div className="flex flex-col items-center text-center pl-2 sm:pl-4 md:pl-6 flex-1">
        <h3 className="text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2 font-extrabold bg-gradient-to-r from-[#3366FF] via-[#4DF3FF] to-[#4DF3FF] bg-clip-text text-transparent select-none font-tactic">
          Fixed Deflationary
        </h3>
        <p className="text-xs sm:text-sm text-gray-400">Supply Model</p>
      </div>
    </div>
  );
};

export default InfoCard;
