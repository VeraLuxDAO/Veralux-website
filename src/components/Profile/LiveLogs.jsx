import React from "react";

export default function LiveLogs() {
  const logs = [
    {
      date: "Jul 29, 2025",
      type: "Vote",
      amount: "3 VP",
      status: "Confirmed",
      details: "Voted 'YES' on Proposal #27",
    },
    {
      date: "Jul 29, 2025",
      type: "Claim",
      amount: "14,234 $LUX",
      status: "Confirmed",
      details: "Claimed staking rewards",
    },
    {
      date: "Jul 29, 2025",
      type: "Stake",
      amount: "500,000 $LUX",
      status: "Confirmed",
      details: "Staked at Tier 2",
    },
    {
      date: "Jul 29, 2025",
      type: "Receive",
      amount: "250,000 $LUX",
      status: "Confirmed",
      details: "From: 0x12...ab34",
    },
    {
      date: "Jul 29, 2025",
      type: "Vote",
      amount: "3 VP",
      status: "Confirmed",
      details: "Voted 'NO' on Proposal #32",
    },
  ];

  return (
    <div className="w-full max-w-[1280px] mx-auto p-6 border border-white/10 rounded-[12px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-semibold">Live Logs</h2>
        <button className="text-blue-400 text-sm hover:underline">
          View All Logs
        </button>
      </div>
      <div className=" border border-white/10 rounded-2xl overflow-hidden shadow-md">
        <table className="w-full text-sm text-gray-300">
          <thead className="text-gray-500 text-xs uppercase bg-black/10 p-10 h-[70px]">
            <tr>
              <th className="px-6 py-3 text-left font-medium">Timestamp</th>
              <th className="px-6 py-3 text-left font-medium">Event Type</th>
              <th className="px-6 py-3 text-left font-medium">Amount</th>
              <th className="px-6 py-3 text-left font-medium">Status</th>
              <th className="px-6 py-3 text-left font-medium">Details</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, idx) => (
              <tr
                key={idx}
                className={`border-t border-white/5 ${
                  idx % 2 === 0 ? "bg-black/5" : "bg-transparent"
                }`}
              >
                <td className="px-6 py-3">{log.date}</td>
                <td className="px-6 py-3">{log.type}</td>
                <td className="px-6 py-3">{log.amount}</td>
                <td className="px-6 py-3 text-green-400">{log.status}</td>
                <td className="px-6 py-3">{log.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
