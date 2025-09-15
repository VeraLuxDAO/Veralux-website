import React from "react";

export default function StakingTable({ tiers }) {
  return (
    <div className="overflow-x-auto bg-gray-900 rounded-lg border border-gray-700 shadow-lg">
      <table className="min-w-full text-sm rounded-lg text-left text-gray-300">
        <thead className="h-[63px] text-gray-500">
          <tr>
            <th className="px-4 py-3 border-b border-gray-700 font-medium uppercase tracking-wider">
              TIER
            </th>
            <th className="px-4 py-3 border-b border-gray-700 font-medium uppercase tracking-wider">
              $LUX TOKEN REWARD
            </th>
            <th className="px-4 py-3 border-b border-gray-700 font-medium uppercase tracking-wider">
              LOCK PERIOD
            </th>
            <th className="px-4 py-3 border-b border-gray-700 font-medium uppercase tracking-wider">
              VOTING POWER (VP)
            </th>
            <th className="px-4 py-3 border-b border-gray-700 font-medium uppercase tracking-wider">
              WEEKLY REWARD $LUX
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-800 transition">
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">1</td>
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">
              250,000 $LUX
            </td>
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">
              7 Days
            </td>
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">
              1 VP
            </td>
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">
              7,212 $LUX
            </td>
          </tr>
          <tr className="hover:bg-gray-800 transition">
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">2</td>
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">
              500,000 $LUX
            </td>
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">
              14 Days
            </td>
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">
              3 VP
            </td>
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">
              14,432 $LUX
            </td>
          </tr>
          <tr className="hover:bg-gray-800 transition">
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">3</td>
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">
              1,250,000 $LUX
            </td>
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">
              30 Days
            </td>
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">
              10 VP
            </td>
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">
              36,058 $LUX
            </td>
          </tr>
          <tr className="hover:bg-gray-800 transition">
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">4</td>
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">
              5,000,000 $LUX
            </td>
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">
              30 Days
            </td>
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">
              25 VP
            </td>
            <td className="px-4 py-2 h-[41px] border-b border-gray-700">
              144,231 $LUX
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
