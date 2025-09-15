import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import VectorIcon from "../assets/Vector.svg";
import { FaDiscord, FaXTwitter, FaTelegram, FaYoutube } from "react-icons/fa6";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHoveringTop, setIsHoveringTop] = useState(false);

  // Set initial active section based on current pathname
  useEffect(() => {
    const currentPath = window.location.pathname;
    const currentLink = navLinks.find((link) => link.href === currentPath);
    if (currentLink) {
      setActiveSection(currentLink.section);
    }
  }, []);

  const navLinks = [
    { name: "About Us", href: "/", section: "about" },
    { name: "Stake", href: "/stake", section: "stake" },
    { name: "Governance", href: "/governance", section: "governance" },
    { name: "Airdrop", href: "/airdrop", section: "airdrop" },
    { name: "Lifelogs", href: "/lifelogs", section: "lifelogs" },
    { name: "Profile", href: "/profile", section: "profile" },
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

  // Auto-hide navbar and track active section on scroll
  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollPos = currentScrollY + 100;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);

      // Only process if there's significant scroll movement (reduces jitter)
      if (scrollDifference > 5) {
        // Auto-hide navbar logic (but keep visible if menu is open or hovering top)
        if (!menuOpen && !isHoveringTop) {
          if (currentScrollY > lastScrollY && currentScrollY > 150) {
            // Scrolling down & past 150px - hide navbar with slight delay
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setIsVisible(false), 150);
          } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
            // Scrolling up OR near top - show navbar immediately
            if (timeoutId) clearTimeout(timeoutId);
            setIsVisible(true);
          }
        } else {
          // Always keep navbar visible when menu is open or hovering top
          if (timeoutId) clearTimeout(timeoutId);
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }

      // Active section detection (separate from visibility logic)
      const sections = document.querySelectorAll("[data-section]");

      if (sections.length > 0) {
        let currentSection = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPos >= sectionTop &&
            scrollPos < sectionTop + sectionHeight
          ) {
            currentSection = section.getAttribute("data-section");
          }
        });

        if (currentSection && currentSection !== activeSection) {
          setActiveSection(currentSection);
        }
      }
    };

    // Optimized throttling with cleanup
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
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [activeSection, lastScrollY, menuOpen, isHoveringTop]);

  // Mouse move handler for top hover detection
  useEffect(() => {
    const handleMouseMove = (e) => {
      const isNearTop = e.clientY <= 80; // Within 80px of top
      if (isNearTop !== isHoveringTop) {
        setIsHoveringTop(isNearTop);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHoveringTop]);

  const scrollToTop = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl text-white transition-all duration-300 ease-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-75"
      }`}
      style={{
        background: `linear-gradient(135deg, 
          rgba(13, 13, 13, 0.95) 0%, 
          rgba(20, 25, 40, 0.95) 50%, 
          rgba(13, 13, 13, 0.95) 100%)`,
        boxShadow: `0 8px 32px rgba(77, 243, 255, 0.1), 
                    0 4px 16px rgba(51, 102, 255, 0.1)`,
      }}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18 xl:h-20">
          {/* Logo - Enhanced Circular Design */}
          <div
            onClick={scrollToTop}
            className="flex-shrink-0 cursor-pointer group"
          >
            <div className="relative">
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-13 lg:h-13 xl:w-14 xl:h-14 rounded-full bg-gradient-to-r from-[#3366FF] via-[#4DF3FF] to-[#3366FF] p-0.5 transition-all duration-300 group-hover:from-[#2952CC] group-hover:to-[#3DD1E6] shadow-lg group-hover:shadow-2xl group-hover:shadow-cyan-500/30 transform group-hover:scale-110 group-hover:rotate-3">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-1.5 sm:p-2 md:p-2.5">
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

          {/* Desktop Navigation - Ultra Responsive */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-1 xl:space-x-2 2xl:space-x-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`relative px-2.5 lg:px-3 xl:px-4 py-2 lg:py-2.5 rounded-xl font-medium text-xs lg:text-sm xl:text-base transition-all duration-300 group whitespace-nowrap ${
                      activeSection === link.section
                        ? "text-white bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 shadow-lg shadow-blue-500/20"
                        : "text-gray-300 hover:text-white hover:bg-white/5 hover:backdrop-blur-sm"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Social Links - Premium Design */}
            <div className="ml-6 xl:ml-8 flex items-center space-x-2 lg:space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative p-2 lg:p-2.5 rounded-xl border transition-all duration-300 group transform hover:scale-110 hover:-translate-y-1 ${social.bgColor} ${social.borderColor} ${social.hoverBg}`}
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
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${social.color}10, ${social.color}20)`,
                        boxShadow: `0 8px 25px ${social.color}30`,
                      }}
                    ></div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Tablet Navigation - Compact but Beautiful */}
          <div className="hidden md:flex lg:hidden items-center space-x-3">
            <div className="flex items-center space-x-1">
              {navLinks.slice(0, 4).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                    activeSection === link.section
                      ? "text-blue-400 bg-blue-500/15 border border-blue-400/30"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            {/* Tablet social icons */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-1.5 rounded-lg transition-all duration-300 hover:scale-110 ${social.bgColor} ${social.hoverBg}`}
                    title={social.name}
                  >
                    <IconComponent
                      className="w-3.5 h-3.5"
                      style={{ color: social.color }}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Connect Button - Responsive & Beautiful */}
          <div className="hidden md:flex items-center">
            <button className="relative px-3 md:px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 xl:py-3 rounded-xl font-semibold text-xs md:text-sm lg:text-base bg-gradient-to-r from-[#3366FF] to-[#4DF3FF] hover:from-[#2952CC] hover:to-[#3DD1E6] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-105 hover:-translate-y-0.5 overflow-hidden group whitespace-nowrap">
              <span className="relative z-10">Connect</span>
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              {/* Shine effect */}
              <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700"></div>
            </button>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <button
            className="md:hidden relative p-2.5 rounded-xl text-white transition-all duration-300 hover:bg-white/10 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Premium Glass Design */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full backdrop-blur-2xl border-t border-white/10 overflow-hidden">
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
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="relative z-10 space-y-6">
              {/* Navigation Links - Clean Grid */}
              <div className="space-y-2">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`block px-4 py-4 rounded-2xl font-medium transition-all duration-300 group ${
                      activeSection === link.section
                        ? "text-white bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 shadow-lg shadow-blue-500/20"
                        : "text-gray-300 hover:text-white hover:bg-white/5 hover:backdrop-blur-sm border border-transparent hover:border-white/10"
                    }`}
                    onClick={() => setMenuOpen(false)}
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
                  </a>
                ))}
              </div>

              {/* Social Links - Colorful & Appealing */}
              <div className="space-y-4">
                <h3 className="text-gray-400 text-sm font-semibold tracking-wider uppercase">
                  Follow Us
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative flex flex-col items-center p-4 rounded-2xl border transition-all duration-300 group hover:scale-105 hover:-translate-y-1 ${social.bgColor} ${social.borderColor} ${social.hoverBg}`}
                        style={{
                          boxShadow: `0 4px 20px ${social.color}15`,
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
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Connect Button - Full Width Beauty */}
              <button className="relative w-full py-4 rounded-2xl font-bold text-base bg-gradient-to-r from-[#3366FF] to-[#4DF3FF] hover:from-[#2952CC] hover:to-[#3DD1E6] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-[1.02] overflow-hidden group">
                <span className="relative z-10">Connect Wallet</span>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                {/* Shine effect */}
                <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
