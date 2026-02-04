import React, { useState, useEffect } from "react";
import logo from "../assets/yetkenya/logo.png";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSidebar]);

  const handleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Our Purpose", href: "#purpose" },
    { name: "Industry & Market", href: "#industry-market" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/95 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-gray-500"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="flex-shrink-0"
          >
            <a href="/" className="flex items-center">
              <img
                className="h-20 w-auto object-contain"
                src={logo}
                alt="YET Kenya Logo"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 ${
                  location.hash === link.href ||
                  (location.hash === "" && link.href === "#home")
                    ? "text-theme_color bg-theme_color/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden xl:flex items-center">
            <a
              href="#contact-us"
              className="px-6 py-2.5 bg-theme_color hover:bg-theme_color/90 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-theme_color/30"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleSidebar}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {showSidebar ? (
              <X className="w-6 h-6 text-theme_color" />
            ) : (
              <Menu className="w-6 h-6 text-theme_color" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay - full screen */}
      {showSidebar && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-md z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Navigation Panel - full screen slide from right */}
      <div
        className={`lg:hidden fixed inset-0 bg-gray-950 z-50 transition-transform duration-300 ease-in-out ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-screen bg-gray-950">
          {/* Header with close button */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
            <div className="text-xl font-bold text-white">Menu</div>
            <button
              onClick={closeSidebar}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-7 h-7 text-theme_color" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-10 overflow-y-auto">
            <div className="space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={closeSidebar}
                  className={`block px-6 py-4 rounded-xl text-lg font-medium transition-all duration-200 ${
                    location.hash === link.href ||
                    (location.hash === "" && link.href === "#home")
                      ? "text-theme_color bg-theme_color/15 border border-theme_color/30"
                      : "text-gray-200 hover:text-white hover:bg-white/10 border border-transparent"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>

          {/* CTA at bottom */}
          <div className="px-6 pb-10 pt-6 border-t border-gray-800">
            <a
              href="#contact-us"
              onClick={closeSidebar}
              className="block w-full py-4 bg-theme_color hover:bg-theme_color/90 text-white text-center font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-theme_color/30 text-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;