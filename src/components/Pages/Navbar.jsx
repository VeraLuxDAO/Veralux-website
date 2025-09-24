import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaDiscord, FaXTwitter, FaTelegram, FaYoutube } from "react-icons/fa6";

// Using public assets path for Next.js
const Logo = "/assets/logo.png";
const VectorIcon = "/assets/Vector.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Mobile menu animation variants - Optimized for responsiveness
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.98,
      transition: {
        duration: 0.15,
        ease: [0.4, 0.0, 0.2, 1], // Material Design easing
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0.0, 0.2, 1],
        staggerChildren: 0.03, // Reduced from 0.08
        delayChildren: 0.02, // Reduced from 0.1
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      scale: 0.99,
      transition: {
        duration: 0.15,
        ease: [0.4, 0.0, 1, 1], // Fast exit
        staggerChildren: 0.02,
        staggerDirection: -1,
      },
    },
  };

  const menuItemVariants = {
    hidden: {
      opacity: 0,
      x: -15,
      y: 8,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.25, // Reduced from 0.5
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      x: -10,
      y: 5,
      scale: 0.98,
      transition: {
        duration: 0.12, // Faster exit
        ease: [0.4, 0.0, 1, 1],
      },
    },
  };

  const socialItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 15,
      rotateY: -8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.3, // Reduced from 0.6
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 10,
      rotateY: 8,
      transition: {
        duration: 0.15, // Faster exit
        ease: [0.4, 0.0, 1, 1],
      },
    },
  };

  const floatingParticleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4, // Reduced from 0.8
        ease: "easeOut",
        delay: 0.1, // Reduced from 0.3
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.15, // Faster exit
      },
    },
  };

  // Set initial active section based on current pathname
  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentLink = navLinks.find((link) => link.href === currentPath);
    if (currentLink) {
      setActiveSection(currentLink.section);
    }
  }, []);

  // Auto-hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);

      // Only process if there's significant scroll movement (reduces jitter)
      if (scrollDifference > 5) {
        if (!menuOpen) {
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down & past 100px - hide navbar
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
            // Scrolling up OR near top - show navbar
            setIsVisible(true);
          }
        } else {
          // Always keep navbar visible when menu is open
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    // Throttled scroll handler for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [lastScrollY, menuOpen]);

  const navLinks = [
    { name: "About Us", href: "/", section: "about", disabled: false },
    { name: "Stake", href: "/stake", section: "stake", disabled: true },
    {
      name: "Governance",
      href: "/governance",
      section: "governance",
      disabled: true,
    },
    { name: "Airdrop", href: "/airdrop", section: "airdrop", disabled: true },
    {
      name: "Lifelogs",
      href: "/lifelogs",
      section: "lifelogs",
      disabled: true,
    },
    { name: "Profile", href: "/profile", section: "profile", disabled: true },
  ];

  const socialLinks = [
    {
      name: "Discord",
      href: "https://discord.gg/gWTFWwaVbD",
      icon: FaDiscord,
      color: "#5865F2",
      bgColor: "bg-[#5865F2]/10",
      hoverBg: "hover:bg-[#5865F2]/20",
      borderColor: "border-[#5865F2]/30",
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/VeraLux_LUX",
      icon: FaXTwitter,
      color: "#1DA1F2",
      bgColor: "bg-[#1DA1F2]/10",
      hoverBg: "hover:bg-[#1DA1F2]/20",
      borderColor: "border-[#1DA1F2]/30",
    },
    {
      name: "Telegram",
      href: "https://t.me/VeraLux_Official",
      icon: FaTelegram,
      color: "#0088CC",
      bgColor: "bg-[#0088CC]/10",
      hoverBg: "hover:bg-[#0088CC]/20",
      borderColor: "border-[#0088CC]/30",
    },
  ];

  const scrollToTop = () => {
    navigate("/");
    if (typeof document !== "undefined") {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    setMenuOpen(false);
  };

  const handleTooltipShow = (featureName, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    // Determine if tooltip should appear above or below
    const showAbove = spaceBelow < 100 && spaceAbove > 100;

    // Calculate center position of the button and move tooltip LEFT
    const buttonCenterX = rect.left + rect.width / 2;
    const tooltipOffsetLeft = 70; // Move 70px to the left
    const targetX = buttonCenterX - tooltipOffsetLeft;

    // Ensure tooltip doesn't go off-screen (assuming tooltip width ~200px)
    const tooltipWidth = 200;
    const minX = tooltipWidth / 2 + 10; // 10px margin from edge
    const maxX = window.innerWidth - tooltipWidth / 2 - 10;
    const adjustedX = Math.max(minX, Math.min(maxX, targetX));

    setTooltipPosition({
      x: adjustedX,
      y: showAbove ? rect.top - 8 : rect.bottom + 8,
      showAbove: showAbove,
    });
    setActiveTooltip(featureName);

    // Auto-hide after 3 seconds on mobile (click) or keep for hover
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        setActiveTooltip(null);
      }, 3000);
    }
  };

  const handleTooltipHide = () => {
    // Only hide on desktop hover, mobile uses click
    if (window.innerWidth >= 1024) {
      setActiveTooltip(null);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 navbar-consistent transition-all duration-300 ease-out transform py-2 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      style={{
        background: "transparent", // Fully transparent
        borderBottom: "1px solid rgba(110, 248, 255, 0.1)", // Electric blue border
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Section: Logo */}
          <div className="flex-shrink-0">
            <div onClick={scrollToTop} className="cursor-pointer group">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-[#3366FF] via-[#4DF3FF] to-[#3366FF] p-0.5 transition-all duration-300 group-hover:from-[#2952CC] group-hover:to-[#3DD1E6] shadow-lg group-hover:shadow-2xl group-hover:shadow-cyan-500/30 transform group-hover:scale-110 group-hover:rotate-3">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-1.5 sm:p-2">
                    <img
                      src={VectorIcon}
                      alt="VeraLux"
                      className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </div>
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 animate-pulse transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Center Section: Main Navigation - Responsive */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav className="flex items-center space-x-2 sm:space-x-4 lg:space-x-8">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.disabled ? (
                    <button
                      onClick={(e) => handleTooltipShow(link.name, e)}
                      onMouseEnter={(e) => handleTooltipShow(link.name, e)}
                      onMouseLeave={handleTooltipHide}
                      className="relative px-2 sm:px-3 lg:px-4 py-2 lg:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 group whitespace-nowrap text-[#48d8ff]/100"
                    >
                      <span className="relative z-10">{link.name}</span>
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className={`relative px-2 sm:px-3 lg:px-4 py-2 lg:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 group whitespace-nowrap ${
                        activeSection === link.section
                          ? "text-[#6EF8FF] bg-gradient-to-r from-[#6EF8FF]/20 to-[#6EF8FF]/10 border border-[#6EF8FF]/30 shadow-lg shadow-[#6EF8FF]/20"
                          : "text-[#6EF8FF] hover:text-white hover:bg-[#6EF8FF]/10 hover:backdrop-blur-sm"
                      }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      {/* Hover effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#6EF8FF]/10 to-[#6EF8FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right Section: Social Links - Responsive */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative p-2 lg:p-2.5 rounded-lg border transition-all duration-300 group transform hover:scale-110 hover:-translate-y-1 ${social.bgColor} ${social.borderColor} ${social.hoverBg}`}
                  title={social.name}
                  style={{
                    boxShadow: `0 4px 12px ${social.color}20`,
                  }}
                >
                  <IconComponent
                    className="w-3.5 lg:w-4 h-3.5 lg:h-4 transition-all duration-300 group-hover:scale-110"
                    style={{ color: social.color }}
                  />
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${social.color}10, ${social.color}20)`,
                      boxShadow: `0 8px 25px ${social.color}30`,
                    }}
                  ></div>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <button
            className="md:hidden relative p-2.5 rounded-xl text-[#6EF8FF] transition-all duration-300 hover:bg-[#6EF8FF]/10 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
                  menuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
                  menuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Premium Glass Design with Animations */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full backdrop-blur-2xl border-t border-white/10 overflow-hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className="relative px-4 py-6"
              style={{
                background: `linear-gradient(135deg, 
                rgba(13, 13, 13, 0.98) 0%, 
                rgba(20, 25, 40, 0.98) 30%,
                rgba(15, 20, 35, 0.98) 70%, 
                rgba(13, 13, 13, 0.98) 100%)`,
              }}
            >
              {/* Enhanced Animated background elements */}
              <motion.div
                className="absolute inset-0 opacity-30"
                variants={floatingParticleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div
                  className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, 10, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, -15, 0],
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                {/* Simplified floating particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-40"
                    style={{
                      left: `${25 + i * 35}%`,
                      top: `${20 + (i % 2) * 60}%`,
                    }}
                    animate={{
                      y: [-5, 5, -5],
                      opacity: [0.2, 0.5, 0.2],
                      scale: [0.9, 1.1, 0.9],
                    }}
                    transition={{
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>

              <motion.div
                className="relative z-10 space-y-6"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Navigation Links - Clean Grid */}
                <motion.div className="space-y-2" variants={menuVariants}>
                  {navLinks.map((link, index) =>
                    link.disabled ? (
                      <motion.button
                        key={index}
                        onClick={(e) => handleTooltipShow(link.name, e)}
                        className="block px-4 py-4 rounded-2xl font-medium transition-all duration-300 group text-gray-500 hover:text-gray-400 border border-transparent w-full text-left"
                        variants={menuItemVariants}
                        whileHover={{
                          scale: 1.02,
                          x: 5,
                          transition: { duration: 0.15, ease: "easeOut" }, // Faster hover
                        }}
                        whileTap={{
                          scale: 0.98,
                          transition: { duration: 0.08 }, // Faster tap
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{link.name}</span>
                          <span className="text-xs opacity-60">
                            Coming Soon
                          </span>
                        </div>
                      </motion.button>
                    ) : (
                      <motion.a
                        key={index}
                        href={link.href}
                        className={`block px-4 py-4 rounded-2xl font-medium transition-all duration-300 group ${
                          activeSection === link.section
                            ? "text-white bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 shadow-lg shadow-blue-500/20"
                            : "text-gray-300 hover:text-white hover:bg-white/5 hover:backdrop-blur-sm border border-transparent hover:border-white/10"
                        }`}
                        onClick={() => setMenuOpen(false)}
                        variants={menuItemVariants}
                        whileHover={{
                          scale: 1.02,
                          x: 5,
                          transition: { duration: 0.15, ease: "easeOut" }, // Faster hover
                        }}
                        whileTap={{
                          scale: 0.98,
                          transition: { duration: 0.08 }, // Faster tap
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{link.name}</span>
                          <svg
                            className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </motion.a>
                    )
                  )}
                </motion.div>

                {/* Social Links - Colorful & Appealing */}
                <motion.div className="space-y-4" variants={menuItemVariants}>
                  <motion.h3
                    className="text-gray-400 text-sm font-semibold tracking-wider uppercase"
                    variants={menuItemVariants}
                  >
                    Follow Us
                  </motion.h3>
                  <motion.div
                    className="grid grid-cols-3 gap-4"
                    variants={menuVariants}
                  >
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`relative flex flex-col items-center p-4 rounded-2xl border transition-all duration-300 group ${social.bgColor} ${social.borderColor} ${social.hoverBg}`}
                          style={{
                            boxShadow: `0 4px 20px ${social.color}15`,
                          }}
                          variants={socialItemVariants}
                          whileHover={{
                            scale: 1.08, // Slightly reduced
                            y: -3, // Reduced movement
                            rotateY: 3, // Reduced rotation
                            transition: {
                              duration: 0.2, // Faster hover
                              ease: "easeOut",
                            },
                          }}
                          whileTap={{
                            scale: 0.96,
                            transition: { duration: 0.08 }, // Faster tap
                          }}
                        >
                          <IconComponent
                            className="w-6 h-6 mb-2 transition-all duration-300 group-hover:scale-110"
                            style={{ color: social.color }}
                          />
                          <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                            {social.name}
                          </span>
                          {/* Animated glow */}
                          <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              background: `linear-gradient(135deg, ${social.color}10, ${social.color}25)`,
                              boxShadow: `0 8px 30px ${social.color}25`,
                            }}
                          ></div>
                        </motion.a>
                      );
                    })}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Beautiful Tooltip for Coming Soon Features */}
      <AnimatePresence>
        {activeTooltip && (
          <motion.div
            className="fixed z-[9999] pointer-events-none"
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y,
              transform: tooltipPosition.showAbove
                ? "translate(-50%, -100%)"
                : "translate(-50%, 0)",
            }}
            initial={{
              opacity: 0,
              y: tooltipPosition.showAbove ? 10 : -10,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: tooltipPosition.showAbove ? 8 : -8,
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 400,
              duration: 0.2,
            }}
          >
            {/* Tooltip arrow */}
            {tooltipPosition.showAbove ? (
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            ) : (
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800"></div>
            )}

            <div className="relative bg-gray-800/95 backdrop-blur-lg rounded-lg px-3 py-2 shadow-xl border border-gray-600/40 min-w-[140px] max-w-[200px]">
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg"></div>

              {/* Content */}
              <div className="relative z-10 flex items-center gap-2">
                {/* Animated clock icon */}
                <motion.div
                  className="flex-shrink-0 w-4 h-4 text-blue-400"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg
                    className="w-full h-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </motion.div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="text-white font-medium text-xs truncate">
                    {activeTooltip}
                  </div>
                  <div className="text-blue-300 text-xs">Coming Soon</div>
                </div>

                {/* Sparkle animation */}
                <motion.div
                  className="flex-shrink-0 w-3 h-3 text-yellow-400"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    className="w-full h-full"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0l3.09 6.26L22 9l-6.91 2.74L12 18l-3.09-6.26L2 9l6.91-2.74L12 0z" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
