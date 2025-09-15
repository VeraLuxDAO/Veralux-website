import React from "react";
import HeroSection from "../components/About/HeroSection";
import AboutSection from "../components/About/AboutSection";
import VeraluxFeatures from "../components/About/VeraluxFeatures";
import Connector from "../components/About/Connector";
import Tokenomics from "../components/About/Tokenomics";
import FeatureCard from "../components/About/FeatureCard";
import TokenAllocation from "../components/About/TokenAllocation";
import TeamSection from "../components/About/Team";

const About = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <VeraluxFeatures />
      <Connector />
      <Tokenomics />
      <FeatureCard />
      <TokenAllocation />
      <TeamSection />
    </div>
  );
};

export default About;
