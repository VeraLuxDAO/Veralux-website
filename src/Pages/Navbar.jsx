import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import VectorIcon from "../assets/Vector.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      // Get all sections with data-section attribute
      const sections = document.querySelectorAll("[data-section]");

      if (sections.length === 0) {
        // If no sections found, just return without error
        return;
      }

      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("data-section");
        }
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Add throttling to improve performance
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

    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [activeSection]);

  const scrollToTop = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50  backdrop-blur-md text-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[120px] py-3 sm:py-6 bg-[rgba(13,13,13,0.15)] shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div onClick={scrollToTop} className="flex-shrink-0 cursor-pointer">
          {/* Mobile Logo - Circular Container with Icon Only */}
          <div className="block sm:hidden">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3366FF] to-[#4DF3FF] p-0.5 hover:from-[#2952CC] hover:to-[#3DD1E6] transition-all duration-200 shadow-lg">
              <div className="w-full h-full rounded-full bg-[rgba(13,13,13,0.9)] flex items-center justify-center p-1.5">
                {/* Actual VeraLux Vector Icon */}
                <img
                  src={VectorIcon}
                  alt="VeraLux Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Desktop Logo - Full Logo */}
          <div className="hidden sm:block">
            <img
              src={Logo}
              alt="Veralux Logo"
              className="h-10 md:h-12 w-auto"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm xl:text-base font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={`transition-colors duration-200 px-3 py-2 rounded-md ${
                  activeSection === link.section
                    ? "text-blue-400 font-semibold bg-blue-400/10"
                    : "text-white hover:text-blue-400 hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Connect Button */}
        <button className="hidden lg:block bg-gradient-to-r from-[#3366FF] to-[#4DF3FF] hover:from-[#2952CC] hover:to-[#3DD1E6] transition-all duration-200 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer w-56">
          Connect
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none p-2 hover:bg-white/10 rounded-md transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-darkblue/95 backdrop-blur-md border-t border-white/10 shadow-xl">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === link.section
                      ? "text-blue-400 font-semibold bg-blue-400/10 border border-blue-400/20"
                      : "text-white hover:text-blue-400 hover:bg-white/5"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Connect Button */}
            <div className="pt-4 border-t border-white/10">
              <button className="w-full bg-gradient-to-r from-[#3366FF] to-[#4DF3FF] hover:from-[#2952CC] hover:to-[#3DD1E6] transition-all duration-200 px-6 py-3 rounded-lg font-medium text-white shadow-lg">
                Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
