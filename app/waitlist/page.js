"use client";

import { useState, useEffect } from "react";

export default function WaitlistPage() {
  const [isClient, setIsClient] = useState(false);
  const [components, setComponents] = useState({
    NavbarForNextJS: null,
    WaitlistStandalone: null,
  });

  useEffect(() => {
    // Dynamically import components only on client side
    const loadComponents = async () => {
      try {
        const [navbarModule, waitlistModule] = await Promise.all([
          import("./NavbarForNextJS"),
          import("./WaitlistStandalone"),
        ]);

        setComponents({
          NavbarForNextJS: navbarModule.default,
          WaitlistStandalone: waitlistModule.default,
        });
        setIsClient(true);
      } catch (error) {
        console.error("Error loading components:", error);
        setIsClient(true); // Still set to true to show error state
      }
    };

    loadComponents();
  }, []);

  if (
    !isClient ||
    !components.NavbarForNextJS ||
    !components.WaitlistStandalone
  ) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading Waitlist...</p>
        </div>
      </div>
    );
  }

  const { NavbarForNextJS, WaitlistStandalone } = components;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950">
      <NavbarForNextJS />
      <WaitlistStandalone />
    </div>
  );
}
