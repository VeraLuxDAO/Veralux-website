import React, { useState } from "react";
import DisconnectedState from "../components/Profile/DisconnectedState";
import ConnectedState from "../components/Profile/ConnectedState";

export default function Profile() {
  const [isConnected, setIsConnected] = useState(false);
  return (
    <section className="mt-[0px] sm:mt-[110px] px-4 sm:px-6 lg:px-8 xl:px-[120px]">
      {!isConnected ? (
        <DisconnectedState onChange={setIsConnected} visible={isConnected} />
      ) : (
        <ConnectedState />
      )}
    </section>
  );
}
