import React from "react";

export default function Disconnectedwallet({ visible, onChange }) {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[rgba(51,102,255,0.03)] p-4 sm:p-6 border border-[rgba(254,254,254,0.25)] backdrop-blur-[25px] rounded-[12px] box-border">
      <div className="flex justify-center w-full">
        <h2
          className="w-full max-w-[530px] h-auto
           font-['Instrument_Sans'] font-medium text-lg sm:text-xl md:text-2xl leading-tight
           text-center text-white 
           flex-none order-0 self-stretch grow-0 px-4"
        >
          Connect Wallet to View
        </h2>
      </div>
      <div className="flex justify-center mb-6 w-full">
        <p
          className="w-full max-w-[530px] h-auto
           font-['Instrument_Sans'] font-normal text-sm sm:text-base leading-tight
           text-center text-[#FEFEFE] opacity-50 
           flex-none order-1 self-stretch grow-0 px-4"
        >
          You need to connect to view your dashboard.
        </p>
      </div>
      <div className="flex justify-center w-full">
        <button
          className="flex flex-row justify-center items-center p-3 gap-2 w-full max-w-[224px] h-12 text-sm sm:text-base order-1 grow-0 flex-none rounded-md bg-gradient-to-r from-[#3366FF] to-[#4DF3FF] text-white font-medium"
          onClick={() => {
            if (visible) {
              onChange(false);
            } else {
              onChange(true);
            }
          }}
        >
          Connect
        </button>
      </div>
    </div>
  );
}
