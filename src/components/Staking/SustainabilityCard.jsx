export function SustainabilityCard() {
  return (
    // <div className="bg-[#0B0E14] w-full rounded-2xl p-6 shadow-lg">
    <div className="bg-[rgba(51,102,255,0.03)] w-full border p-6 rounded-2xl shadow-lg border-[rgba(254,254,254,0.25)] backdrop-blur-[50px]">
      <div>
        <h3 className="text-xl font-semibold mb-3 font-tacticthin">
          Staking Pool Sustainability
        </h3>
        <p className="pt-2 text-gray-300 text-sm mb-4 font-[14px] font-systemUI">
          Scenario 1: 1:1000 Stakers
        </p>
      </div>
      {/* Scenario 1 */}
      <div className="mb-6">
        <div className=" text-gray-400 space-y-1">
          <p>
            Total Staked:{" "}
            <span className="text-white float-right">712.5 Million $LUX</span>
          </p>
          <p>
            Annual Rewards:{" "}
            <span className="text-white float-right">1.07B $LUX/year</span>
          </p>
          <p>
            Proof of Lifespan:{" "}
            <span className="text-green-400 float-right">19.5 years</span>
          </p>
        </div>
      </div>

      {/* Scenario 2 */}
      <p className="text-gray-300 mb-2">Scenario 2: Higher Participation</p>
      <div className="mb-6 mt-4">
        <div className="text-sm text-gray-400 space-y-1">
          <p>
            Total Staked:{" "}
            <span className="text-white float-right">5 Billion $LUX</span>
          </p>
          <p>
            Annual Rewards:{" "}
            <span className="text-white float-right">7.5B $LUX/year</span>
          </p>
          <p>
            Proof of Lifespan:{" "}
            <span className="text-yellow-400 float-right">2.78 years</span>
          </p>
        </div>
      </div>

      <p className="text-gray-200 text-[14px]">
        The Staking pool begins with 10 billion $LUX token. APR reduction
        thresholds ensure the pool’s sustainability regardless of participation
        levels.
      </p>
    </div>
  );
}
