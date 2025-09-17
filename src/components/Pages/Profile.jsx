import React, { useState } from "react";
import DisconnectedState from "../Profile/DisconnectedState";
import ConnectedState from "../Profile/ConnectedState";

export default function Profile() {
  const [isConnected, setIsConnected] = useState(false);
  return (
    <section className="pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 px-4 sm:px-6 lg:px-8 xl:px-[120px]">
      {!isConnected ? (
        <DisconnectedState onChange={setIsConnected} visible={isConnected} />
      ) : (
        <ConnectedState />
      )}
    </section>
  );
}
