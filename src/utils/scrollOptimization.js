/**
 * Scroll performance optimization utilities
 */

// Throttle function to limit scroll event frequency
export const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Debounce function for scroll events
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// Optimized scroll handler with passive event listeners
export const addOptimizedScrollListener = (element, handler, options = {}) => {
  const optimizedHandler = throttle(handler, options.throttle || 16); // ~60fps

  element.addEventListener("scroll", optimizedHandler, {
    passive: true,
    capture: false,
    ...options,
  });

  return () => element.removeEventListener("scroll", optimizedHandler);
};

// Intersection Observer for lazy loading and visibility-based optimizations
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    rootMargin: "50px",
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Performance monitoring for scroll events
export const monitorScrollPerformance = () => {
  let lastScrollTime = 0;
  let frameCount = 0;

  const measurePerformance = () => {
    const now = performance.now();
    const delta = now - lastScrollTime;

    if (delta > 16.67) {
      // More than 60fps
      console.warn(
        `Scroll performance issue: ${delta.toFixed(2)}ms frame time`
      );
    }

    lastScrollTime = now;
    frameCount++;
  };

  return addOptimizedScrollListener(window, measurePerformance, {
    throttle: 0,
  });
};

// Optimize element for scroll performance
export const optimizeElementForScroll = (element) => {
  if (!element) return;

  // Add CSS optimization classes
  element.classList.add("hardware-accelerated", "scroll-optimized");

  // Set CSS properties for better performance
  element.style.willChange = "transform";
  element.style.contain = "layout style paint";
  element.style.transform = "translateZ(0)";
};

// Remove optimization when element is out of view
export const removeScrollOptimization = (element) => {
  if (!element) return;

  element.style.willChange = "auto";
  element.style.contain = "none";
  element.style.transform = "none";
};
