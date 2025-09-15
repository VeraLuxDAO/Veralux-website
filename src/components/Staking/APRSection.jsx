import { APRThresholdCard } from "./APRThresholdCard";
import { SustainabilityCard } from "./SustainabilityCard";

export default function APRSection() {
  return (
    <section className="w-full text-white flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-0">
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4 font-tactic">
        APR & Sustainability
      </h2>
      <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-base md:text-lg text-center max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl px-4">
        Veralux aligns yield and longevity by offering meaningful APR that
        supports contributors, creators, and community ecosystems.
      </p>

      {/* Cards */}
      <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 w-full max-w-7xl">
        <APRThresholdCard />
        <SustainabilityCard />
      </div>
    </section>
  );
}
