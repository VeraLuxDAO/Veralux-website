import React from "react";
import connectorDesktop from "../../assets/connector.png";
import connectorMobile from "../../assets/connector-mobile.png"; // your mobile image

const Connector = () => {
  return (
    <div className="flex w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Desktop / Tablet View */}
      <img
        src={connectorDesktop}
        alt="Connector desktop"
        className="hidden md:block w-full h-auto max-h-[375px] object-contain"
      />

      {/* Mobile View */}
      <img
        src={connectorMobile}
        alt="Connector mobile"
        className="block md:hidden w-full max-w-[192px] h-auto max-h-[594px] object-contain mx-auto"
      />
    </div>
  );
};

export default Connector;
