export function APRThresholdCard() {
  const thresholds = [
    { label: "Pool Balance > 7.5B $LUX", apr: "150% APR", bar: "w-full" },
    { label: "Pool Balance ≤ 7.5B > 5B$LUX", apr: "112.5% APR", bar: "w-4/5" },
    { label: "Pool Balance ≤ 5B > 2.5B$LUX", apr: "75% APR", bar: "w-2/4" },
    { label: "Pool Balance ≤ 2.5B$LUX", apr: "37.5% APR", bar: "w-1/4" },
  ];

  return (
    <div className="bg-[rgba(51,102,255,0.03)] w-full backdrop-blur-[50px] border border-[rgba(254,254,254,0.25)] rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-6 font-tacticthin">
        APR Reduction Threshold
      </h3>
      <div className="space-y-6">
        {thresholds.map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-sm text-gray-300">
              <span>{item.label}</span>
              <span className="text-[#3BA7FF] text-[16px]">{item.apr}</span>
            </div>
            <div className="mt-2 w-full h-1.5 bg-gray-800 rounded">
              <div
                className={`h-[4px] bg-[linear-gradient(90deg,#3366FF_0%,#4DF3FF_100%)] rounded ${item.bar}`}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-gray-500 text-[14px] mt-6">
        APR is evaluated weekly on Sunday, 0.00 UTC based on pool’s balance
      </p>
    </div>
  );
}
