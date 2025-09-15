import { RuleCard } from "./RuleCard";
import {
  CheckCircle,
  XCircle,
  Info,
  SquareCheckBig,
  Coins,
  Hourglass,
} from "lucide-react";

export default function StakingRules() {
  return (
    <section className="w-full text-white py-[120px] flex flex-col items-center">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center font-tactic">
        Staking Rules
      </h2>
      <p className="mt-6 text-gray-300 text-lg text-center max-w-3xl">
        Below is a table of the four staking tiers, showing LUX tokens required,
        value at launch, lock periods, voting power, and weekly rewards at
        <span className="text-white font-semibold"> 150% APR</span>.
      </p>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
        <RuleCard
          icon={<SquareCheckBig size={36} className="text-[#3BA7FF]" />}
          title="Voting Power"
          items={[
            { type: "check", text: "Earned after completing the lock period." },
            { type: "check", text: "Higher tiers earn more voting Power." },
            { type: "x", text: "Resets to zero upon unstaking." },
            {
              type: "info",
              text: "New lock period required to regain VP even if tokens are restaked.",
            },
          ]}
        />

        <RuleCard
          icon={<Coins size={36} className="text-[#3BA7FF]" />}
          title="Reward Eligibility"
          items={[
            { type: "check", text: "Minimum 7-day stake required." },
            { type: "check", text: "First reward after 14 days of Staking." },
            {
              type: "check",
              text: "Weekly reward based on tier and current APR.",
            },
            { type: "info", text: "Rewards require manual claims." },
            { type: "info", text: "Claims restricted to once every 24 hours." },
          ]}
        />

        <RuleCard
          icon={<Hourglass size={36} className="text-[#3BA7FF]" />}
          title="Reward Accumulation"
          items={[
            { type: "check", text: "Rewards accumulate for up to 4 weeks." },
            {
              type: "x",
              text: "Unclaimed rewards after 4 weeks are forfeited.",
            },
            {
              type: "check",
              text: "Forfeited rewards are returned to the staking pool.",
            },
            { type: "info", text: "Unstaking pays out the unclaimed rewards." },
            { type: "info", text: "Unstaking resets voting power to 0." },
          ]}
        />
      </div>
    </section>
  );
}
