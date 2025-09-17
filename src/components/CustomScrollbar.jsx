import React, { useEffect, useState, useCallback } from "react";

const CustomScrollbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [dragThumbPosition, setDragThumbPosition] = useState(null);
  const [isNearScrollbar, setIsNearScrollbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Calculate scroll metrics
  const updateScrollMetrics = useCallback(() => {
    if (typeof document === "undefined" || typeof window === "undefined")
      return;

    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    setScrollHeight(documentHeight);
    setScrollPosition(currentScroll);

    // Show scrollbar only if content is scrollable
    setIsVisible(documentHeight > windowHeight);
  }, []);

  // Handle scroll events
  const handleScroll = useCallback(() => {
    updateScrollMetrics();
    setIsScrolling(true);

    // Hide scrolling indicator after scroll ends
    const scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 50); // Ultra-fast timeout for instant response

    return () => clearTimeout(scrollTimeout);
  }, [updateScrollMetrics]);

  // Calculate thumb position and height
  const getThumbMetrics = () => {
    if (typeof window === "undefined") return { top: 0, height: 0 };
    const windowHeight = window.innerHeight;
    const documentHeight = scrollHeight;
    const scrollTop = scrollPosition;

    if (documentHeight <= windowHeight) return { top: 0, height: 0 };

    const thumbHeight = Math.max(
      (windowHeight / documentHeight) * windowHeight,
      30
    );

    // Use drag position if currently dragging, otherwise calculate from scroll
    let thumbTop;
    if (isDragging && dragThumbPosition !== null) {
      thumbTop = dragThumbPosition; // Use immediate drag position
    } else {
      const maxTop = windowHeight - thumbHeight;
      thumbTop = (scrollTop / (documentHeight - windowHeight)) * maxTop;
    }

    return {
      top: thumbTop,
      height: thumbHeight,
    };
  };

  // Handle thumb drag
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);

    const startMouseY = e.clientY;
    const startScrollTop = scrollPosition;
    const windowHeight = window.innerHeight;
    const documentHeight = scrollHeight;
    const maxScroll = documentHeight - windowHeight;
    const thumbHeight = Math.max(
      (windowHeight / documentHeight) * windowHeight,
      30
    );
    const trackHeight = windowHeight - thumbHeight;

    const handleMouseMove = (e) => {
      // EXACT 1:1 movement - mouse moves 1px, thumb moves 1px
      const mouseDelta = e.clientY - startMouseY;

      // Calculate new thumb position IMMEDIATELY (no waiting for scroll)
      const currentThumbTop = (startScrollTop / maxScroll) * trackHeight;
      const newThumbTop = Math.max(
        0,
        Math.min(trackHeight, currentThumbTop + mouseDelta)
      );

      // Update thumb position instantly
      setDragThumbPosition(newThumbTop);

      // Calculate scroll position DIRECTLY from thumb position (not from delta)
      const scrollRatio = newThumbTop / trackHeight;
      const newScrollTop = Math.max(
        0,
        Math.min(maxScroll, scrollRatio * maxScroll)
      );

      // Apply scroll INSTANTLY with direct DOM manipulation
      if (typeof document !== "undefined") {
        document.documentElement.scrollTop = newScrollTop;
        document.body.scrollTop = newScrollTop; // For Safari compatibility
      }

      // Force immediate state update to prevent any mismatch
      setScrollPosition(newScrollTop);
    };

    const handleMouseUp = (e) => {
      setIsDragging(false);
      setDragThumbPosition(null); // Clear drag position
      if (typeof document !== "undefined") {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      }

      // Check if mouse is still near scrollbar after drag
      const currentMouseX = window.innerWidth - e.clientX;
      setIsNearScrollbar(currentMouseX <= 100);
    };

    if (typeof document !== "undefined") {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };

  // Handle click on scrollbar track
  const handleTrackClick = (e) => {
    if (e.target === e.currentTarget) {
      // Use direct mouse position for cursor following
      const windowHeight = window.innerHeight;
      const documentHeight = scrollHeight;
      const maxScroll = documentHeight - windowHeight;

      // Calculate thumb height for accurate positioning
      const thumbHeight = Math.max(
        (windowHeight / documentHeight) * windowHeight,
        30
      );
      const trackHeight = windowHeight - thumbHeight;

      // Get mouse position relative to viewport and position thumb center at cursor
      const mouseY = e.clientY;
      const constrainedMouseY = Math.max(
        thumbHeight / 2,
        Math.min(windowHeight - thumbHeight / 2, mouseY)
      );
      const thumbTop = constrainedMouseY - thumbHeight / 2;

      // Convert to scroll position
      const scrollRatio = thumbTop / trackHeight;
      const newScrollTop = scrollRatio * maxScroll;

      // Instant scroll for track clicks too
      if (typeof document !== "undefined") {
        document.documentElement.scrollTop = newScrollTop;
        document.body.scrollTop = newScrollTop;
      }

      // Force immediate state update
      setScrollPosition(newScrollTop);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
        return;

      if (typeof document === "undefined" || typeof window === "undefined")
        return;

      switch (e.key) {
        case "Home":
          e.preventDefault();
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
          break;
        case "End":
          e.preventDefault();
          const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
          document.documentElement.scrollTop = maxScroll;
          document.body.scrollTop = maxScroll;
          break;
        case "PageUp":
          e.preventDefault();
          const currentScrollUp =
            document.documentElement.scrollTop || document.body.scrollTop;
          const newScrollUp = Math.max(
            0,
            currentScrollUp - window.innerHeight * 0.8
          );
          document.documentElement.scrollTop = newScrollUp;
          document.body.scrollTop = newScrollUp;
          break;
        case "PageDown":
          e.preventDefault();
          const currentScrollDown =
            document.documentElement.scrollTop || document.body.scrollTop;
          const maxScrollDown =
            document.documentElement.scrollHeight - window.innerHeight;
          const newScrollDown = Math.min(
            maxScrollDown,
            currentScrollDown + window.innerHeight * 0.8
          );
          document.documentElement.scrollTop = newScrollDown;
          document.body.scrollTop = newScrollDown;
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768; // Tailwind 'md' breakpoint
      const isMobileUserAgent =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      setIsMobile(isTouchDevice || isSmallScreen || isMobileUserAgent);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Mouse proximity detection for auto-hide (desktop only)
  useEffect(() => {
    // Skip mouse detection on mobile devices
    if (isMobile) return;

    let animationFrame = null;

    const handleMouseMove = (e) => {
      // Cancel previous frame to optimize performance
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(() => {
        const rightEdgeDistance = window.innerWidth - e.clientX;
        const proximityThreshold = 100; // Show scrollbar when mouse is within 100px of right edge

        const shouldShow = rightEdgeDistance <= proximityThreshold;
        if (shouldShow !== isNearScrollbar) {
          setIsNearScrollbar(shouldShow);
        }
      });
    };

    const handleMouseLeave = () => {
      // Hide scrollbar when mouse leaves the window
      setIsNearScrollbar(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isNearScrollbar, isMobile]);

  // Setup event listeners
  useEffect(() => {
    updateScrollMetrics();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateScrollMetrics);

    // Update on content changes
    let observer;
    if (typeof document !== "undefined") {
      observer = new MutationObserver(updateScrollMetrics);
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollMetrics);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [handleScroll, updateScrollMetrics]);

  // Don't render scrollbar on mobile devices or when content doesn't scroll
  if (!isVisible || isMobile) return null;

  const { top, height } = getThumbMetrics();

  // Determine if scrollbar should be shown
  const shouldShowScrollbar =
    isNearScrollbar || isScrolling || isDragging || isHovering;

  return (
    <div
      className={`custom-scrollbar ${shouldShowScrollbar ? "show" : "hide"}`}
      onClick={handleTrackClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      role="scrollbar"
      aria-valuenow={Math.round(
        (scrollPosition / (scrollHeight - window.innerHeight)) * 100
      )}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        width: "12px", // Fixed width to prevent layout shift
        height: "100vh",
        zIndex: 10000,
        pointerEvents: shouldShowScrollbar ? "auto" : "none",
        transform: `translateX(${
          shouldShowScrollbar ? "0px" : "12px"
        }) translateZ(0)`,
        transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
        opacity: shouldShowScrollbar ? 1 : 0,
      }}
    >
      <div
        className={`custom-scrollbar-thumb ${isDragging ? "animate-glow" : ""}`}
        style={{
          position: "absolute",
          top: `${top}px`,
          right: "0px",
          width: "100%",
          height: `${height}px`,
          transform: "translateZ(0)",
          cursor: isDragging ? "grabbing" : "grab",
          transition: "none", // No transitions for maximum speed
        }}
        onMouseDown={handleMouseDown}
        title={`Scroll position: ${Math.round(
          (scrollPosition / (scrollHeight - window.innerHeight)) * 100
        )}%`}
      />
    </div>
  );
};

export default CustomScrollbar;
