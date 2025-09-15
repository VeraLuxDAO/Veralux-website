import React from "react";
import cube from "../../assets/3DCUBE.png";

const VeraluxSolutions = () => {
  return (
    <section
      id="solutions"
      className="text-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 flex justify-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full max-w-7xl gap-8 sm:gap-12 lg:gap-16">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start flex-shrink-0">
          <img
            src={cube}
            alt="Veralux Illustration"
            className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[465px] object-contain animate-spinInfinite"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 w-full p-4 sm:p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center lg:text-left font-tactic">
            <span className="text-blue-700">Veralux</span> Solutions
          </h2>
          <p className="text-gray-300 leading-relaxed font-medium text-sm sm:text-base md:text-lg text-center lg:text-left mb-6 sm:mb-8">
            Bridging creators, builders, institutions, marketplace & gamers in
            one social hub.
          </p>

          <ul className="py-4 sm:py-6 space-y-3 text-sm sm:text-base md:text-lg">
            <li className="flex items-start">
              <span className="text-blue-400 font-semibold mr-2 mt-1">✓</span>
              <div>
                <span className="font-semibold text-blue-400">
                  For Creators:
                </span>
                <span className="text-gray-300">
                  {" "}
                  Monetize work, collaborate, retain ownership
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 font-semibold mr-2 mt-1">✓</span>
              <div>
                <span className="font-semibold text-blue-400">For Gamers:</span>
                <span className="text-gray-300">
                  {" "}
                  Trade assets, earn rewards, shape games
                </span>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 font-semibold mr-2 mt-1">✓</span>
              <div>
                <span className="font-semibold text-blue-400">
                  For Builders/Institutions:
                </span>
                <span className="text-gray-300">
                  {" "}
                  Fund projects, access talent, govern
                </span>
              </div>
            </li>
          </ul>

          <div className="p-4 sm:p-6 border border-gray-700 rounded-lg text-sm sm:text-base bg-gray-800/40 backdrop-blur-sm">
            <p className="leading-relaxed text-gray-300">
              It's all connected, so your actions in one area (like earning rep
              from a game) boost you in others (like getting better deals in the
              marketplace). This creates a vibrant community where ideas grow,
              people collaborate, and everyone benefits from transparency and
              fairness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeraluxSolutions;
