/**
 * Comprehensive animation system for scroll-triggered animations
 * Designed to match VeraLux's futuristic theme
 */

// Base animation variants
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth feel
    },
  },
};

export const fadeInDown = {
  hidden: {
    opacity: 0,
    y: -60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -80,
    rotateY: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 80,
    rotateY: 15,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    rotateZ: -5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const slideInUp = {
  hidden: {
    opacity: 0,
    y: 100,
    clipPath: "inset(100% 0% 0% 0%)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Futuristic glow effect
export const glowIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px) brightness(0.5)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px) brightness(1)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Container variants for staggered children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// Card-specific animations
export const cardFloat = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    rotateX: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    rotateX: -2,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const cardSlide = {
  hidden: {
    opacity: 0,
    x: -50,
    rotateY: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    x: 8,
    rotateY: 2,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Text animations
export const textReveal = {
  hidden: {
    opacity: 0,
    y: 20,
    clipPath: "inset(100% 0% 0% 0%)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const titleAnimation = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Image animations
export const imageZoom = {
  hidden: {
    opacity: 0,
    scale: 1.2,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const imageSlideIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    x: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Special effects
export const holographicEffect = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    background: "linear-gradient(45deg, transparent, transparent)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    background:
      "linear-gradient(45deg, rgba(51, 102, 255, 0.1), rgba(77, 243, 255, 0.1))",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Viewport settings for intersection observer
export const defaultViewport = {
  once: true,
  amount: 0.3,
  margin: "-50px",
};

export const quickViewport = {
  once: true,
  amount: 0.1,
  margin: "-20px",
};

export const slowViewport = {
  once: true,
  amount: 0.5,
  margin: "-100px",
};
