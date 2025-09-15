import TokenAll from "../../assets/Groupie.png";
import TokenAllMobile from "../../assets/mobile-token.png";

const TokenAllocation = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 text-center font-tactic">
        Token Allocation
      </h1>
      <p className="text-gray-500 text-sm sm:text-base md:text-lg text-center mb-6 sm:mb-8">
        Transparent distribution of 100 billion $LUX tokens
      </p>

      {/* Chart Image Area */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Desktop / Tablet */}
        <img
          src={TokenAll}
          alt="Token Allocation Chart"
          className="hidden sm:block object-contain w-full max-h-[700px] opacity-80"
        />
        {/* Mobile */}
        <img
          src={TokenAllMobile}
          alt="Token Allocation Chart Mobile"
          className="block sm:hidden object-contain w-full h-auto max-h-[600px]"
        />
      </div>

      <div className="mt-4 sm:mt-6 md:mt-8 border border-gray-600 rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-center space-x-2 sm:space-x-3 bg-gray-800/30 backdrop-blur-sm max-w-sm sm:max-w-md mx-auto font-tactic">
        <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-400">
          10,000,000,000
        </span>
        <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-white">
          Total Supply
        </span>
      </div>
    </div>
  );
};

export default TokenAllocation;
