import { useEffect, useState } from "react";

// Safe wrapper for framer-motion that only works on client side
let motion = {};
let AnimatePresence = null;

// Default fallback components
const createFallbackComponent = (tag) => {
  return function FallbackComponent({ children, className, style, ...props }) {
    const Component = tag || "div";
    return (
      <Component className={className} style={style} {...props}>
        {children}
      </Component>
    );
  };
};

// Initialize with fallback components
motion.div = createFallbackComponent("div");
motion.nav = createFallbackComponent("nav");
motion.button = createFallbackComponent("button");
motion.a = createFallbackComponent("a");
motion.h1 = createFallbackComponent("h1");
motion.h2 = createFallbackComponent("h2");
motion.h3 = createFallbackComponent("h3");
motion.p = createFallbackComponent("p");
motion.span = createFallbackComponent("span");
motion.section = createFallbackComponent("section");

// Fallback AnimatePresence
AnimatePresence = function FallbackAnimatePresence({ children }) {
  return children;
};

// Hook to safely use framer-motion
export function useSafeMotion() {
  const [isClient, setIsClient] = useState(false);
  const [safeMotion, setSafeMotion] = useState({ motion, AnimatePresence });

  useEffect(() => {
    // Only load framer-motion on client side
    const loadFramerMotion = async () => {
      try {
        if (typeof window !== "undefined") {
          const framerMotion = await import("framer-motion");
          setSafeMotion({
            motion: framerMotion.motion,
            AnimatePresence: framerMotion.AnimatePresence,
          });
          setIsClient(true);
        }
      } catch (error) {
        console.warn("Failed to load framer-motion, using fallbacks:", error);
        setIsClient(true);
      }
    };

    loadFramerMotion();
  }, []);

  return { ...safeMotion, isClient };
}

// Export default safe motion components
export { motion, AnimatePresence };
