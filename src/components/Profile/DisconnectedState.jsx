import React from "react";

export default function DisconnectedState({ onChange, visible }) {
  const handleConnect = () => {
    onChange(!visible);
  };

  return (
    <div className="mb-[120px] bg-gradient-radial mt-[222px] from-blue-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Main Content Area */}
      <div className="flex flex-col justify-center items-center bg-[rgba(51,102,255,0.03)] border border-[rgba(254,254,254,0.25)] backdrop-blur-[25px] rounded-[12px] w-full max-w-[1280px] min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] mx-auto p-6 sm:p-8 lg:p-12">
        {/* Content */}
        <div className="text-center flex flex-col items-center gap-2 sm:gap-3">
          <h1 className="font-[Instrument_Sans] font-medium text-xl sm:text-2xl lg:text-[24px] leading-tight sm:leading-[29px] text-center text-white max-w-md sm:max-w-lg lg:max-w-2xl">
            Connect Wallet to Access Your Veralux Profile
          </h1>
          <p className="font-[Instrument_Sans] font-normal text-sm sm:text-base lg:text-[16px] leading-tight sm:leading-[20px] text-center text-[#FEFEFE] opacity-50 max-w-xs sm:max-w-md lg:max-w-lg">
            Connect your wallet to view your personalized dashboard.
          </p>
          <button
            onClick={handleConnect}
            className="flex mt-4 flex-row justify-center items-center p-3 sm:p-[12px] gap-2 w-full sm:w-[200px] lg:w-[224px] h-12 sm:h-[48px] bg-gradient-to-r from-[#3366FF] via-[#3366FF] to-[#4DF3FF] rounded-lg sm:rounded-[8px] text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 transform hover:scale-105"
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}
