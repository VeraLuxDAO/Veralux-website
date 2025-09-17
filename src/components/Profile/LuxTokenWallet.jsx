import React from "react";
import { FaRegCopy, FaLock, FaGift } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
const copy = "/assets/COIN.png";

export default function LuxTokenWallet() {
  const transactions = [
    {
      type: "Receive",
      amount: "+250,000 $LUX",
      date: "July 29, 2025",
      status: "Completed",
      icon: "receive",
    },
    {
      type: "Staked",
      amount: "-500,000 $LUX",
      date: "July 28, 2025",
      status: "Completed",
      icon: "staked",
    },
    {
      type: "Claim",
      amount: "+250,000 $LUX",
      date: "July 28, 2025",
      status: "Completed",
      icon: "claim",
    },
    {
      type: "Receive",
      amount: "+250,000 $LUX",
      date: "July 27, 2025",
      status: "Completed",
      icon: "receive",
    },
    {
      type: "Receive",
      amount: "+250,000 $LUX",
      date: "July 27, 2025",
      status: "Completed",
      icon: "receive",
    },
  ];

  const getTransactionIcon = (iconType) => {
    switch (iconType) {
      case "receive":
        return (
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <IoArrowForward className="text-white text-xs" />
          </div>
        );
      case "staked":
        return (
          <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
            <FaLock className="text-white text-xs" />
          </div>
        );
      case "claim":
        return (
          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
            <FaGift className="text-white text-xs" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto rounded-2xlbg-[rgba(51,102,255,0.03)] border border-[rgba(254,254,254,0.25)] backdrop-blur-[25px] from-[#0f172a]/80 to-[#0b1120]/80 p-4 sm:p-6 lg:p-8 shadow-lg rounded-xl">
      {/* Header */}
      <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-4 sm:mb-6 font-tacticthin">
        $LUX Token Wallet
      </h2>

      {/* <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-4 sm:gap-6 "> */}
      <div className="flex-row w-full lg:flex gap-4 sm:gap-6 ">
        {/* Left - Balance */}
        <div className="rounded-xl flex-col justify-between min-h-[200px] w-full lg:w-[40%] sm:min-h-[250px]">
          <div className="bg-black/20 p-4 sm:p-6 rounded-[12px] bg-[rgba(13,13,13,0.15)] border border-[rgba(254,254,254,0.25)] backdrop-blur-[25px]">
            <div className="mb-[32px]">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400 text-[18px]">Current Balance</p>
                </div>
                <span className="flex items-center gap-2">
                  <img src={copy} alt="copy" />
                  <h1>$LUX</h1>
                </span>
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 font-tactic">
              1,750,000
            </h3>
            <p className="text-emerald-400 text-[18px] mt-1">≈ 350.00 USD</p>
          </div>

          {/* Buttons */}
          <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3">
            <button className="px-3 sm:px-4 py-2 h-[44px] rounded-md font-medium bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:opacity-90 transition text-xs sm:text-sm">
              Buy $LUX
            </button>
            <button className="px-3 h-[44px] sm:px-4 py-2 rounded-md font-medium bg-gradient-to-r from-cyan-400 to-blue-600 text-white hover:opacity-90 transition text-xs sm:text-sm">
              Trade $LUX
            </button>
            <button className="px-3 h-[44px] sm:px-4 py-2 rounded-md font-medium border border-white/20 text-white hover:bg-white/10 transition text-xs sm:text-sm">
              Send $LUX
            </button>
            <button className="px-3 h-[44px] sm:px-4 py-2 rounded-md font-medium border border-white/20 text-white hover:bg-white/10 transition text-xs sm:text-sm">
              Receive $LUX
            </button>
          </div>
        </div>

        {/* Right - Transactions */}
        <div className="w-full lg:w-[60%] rounded-[12px]">
          <h3 className="text-white font-medium mb-3 text-sm sm:text-base">
            Transaction History
          </h3>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[rgba(192, 189, 189, 0.15)] border border-[rgba(254,254,254,0.25)] backdrop-blur-[25px]">
            <table className="w-full text-xs sm:text-sm text-left text-gray-300 h-[63px] border-b border-[rgba(254,254,254,0.25)] bg-[rgba(245, 245, 245, 0.07)]">
              <thead>
                <tr className="text-gray-500 border-b border-white/10 h-[63px]">
                  <th className="py-2 px-2 sm:px-3">TYPE</th>
                  <th className="py-2 px-2 sm:px-3">AMOUNT</th>
                  <th className="py-2 px-2 sm:px-3 hidden sm:table-cell">
                    DATE
                  </th>
                  <th className="py-2 px-2 sm:px-3">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 last:border-0 h-[41px] bg-[rgba(13,13,13,0.15)]"
                  >
                    <td className="py-2 px-2 sm:px-3">
                      <div className="flex items-center gap-2">
                        {getTransactionIcon(tx.icon)}
                        <span className="text-white">{tx.type}</span>
                      </div>
                    </td>
                    <td
                      className={`py-2 px-2 sm:px-3 h-[41px] bg-[rgba(13,13,13,0.15)] ${
                        tx.amount.startsWith("+")
                          ? "text-emerald-400"
                          : "text-red-500"
                      }`}
                    >
                      {tx.amount}
                    </td>
                    <td className="py-2 px-2 sm:px-3 hidden sm:table-cell">
                      {tx.date}
                    </td>
                    <td className="py-2 px-2 sm:px-3 text-emerald-400">
                      {tx.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
