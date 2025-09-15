import React, { memo } from "react";
import aboutImage from "../../assets/Frame 24430.png";
import image2 from "../../assets/about-header.png";
import baseImage from "../../assets/Veralux-base.png";
import coinImage from "../../assets/Veralux-coin.png";
import coinImageMobile from "../../assets/coin-mobile.png";
import baseImageMobile from "../../assets/base-mobile.png";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="text-white w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 flex justify-center text-justify overflow-visible"
    >
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 overflow-visible">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left flex flex-col justify-center items-center lg:items-start gap-4 sm:gap-6 scroll-optimized">
          <img
            src={image2}
            alt=""
            className="mx-auto lg:mx-0 mb-2 sm:mb-3 w-auto h-6 sm:h-8"
            loading="lazy"
            decoding="async"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-tactic">
            What is Veralux?
          </h2>
          <p className="text-gray-300 leading-relaxed font-medium text-sm sm:text-base md:text-lg max-w-2xl">
            VeraLux is a welcoming online space where people come together to
            create, share, and grow ideas in a safe, fair way. It's like a big
            community hub for the digital world, where you can chat, play games,
            buy or sell things, and even build new projects!
            <br /> All powered by a smart system that rewards positive
            contributions and lets everyone have a say in how it works.
            Transparent with timelocks and transaction limits to ensure your
            safety. Veralux is a place built for real people to connect and
            succeed, starting with simple tools like earning rewards for helpful
            actions and expanding to your own custom adventures.
          </p>
        </div>

        {/* Image Section */}
        {/* Desktop/Tablet Coin + Base */}
        <div
          className="hidden sm:block relative overflow-visible flex justify-center flex-col items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] hardware-accelerated"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Base comes FIRST (bottom layer) */}
          <div className="coin absolute top-[20px] sm:top-[30px] md:top-[40px] lg:top-[50px] flex -translate-x-1/2 pointer-events-none overflow-visible z-10 flex hardware-accelerated">
            <img
              src={coinImage}
              alt="Coin Front"
              className="coin-face coin-front w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px]"
              loading="lazy"
              decoding="async"
            />
            <img
              src={coinImage}
              alt="Coin Back"
              className="coin-face coin-back w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px]"
              loading="lazy"
              decoding="async"
            />
            <div className="shine-beam" style={{ height: "80%" }}></div>
          </div>
          <img
            src={baseImage}
            alt="Base"
            className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] rounded-xl animate-float relative z-0"
            loading="lazy"
            decoding="async"
          />

          {/* Coin positioned on top center of base */}
        </div>

        {/* Mobile Coin + Base */}
      </div>
    </section>
  );
};

export default memo(AboutSection);
