import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "../../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 sm:py-4 glass shadow-lg shadow-black/20"
          : "py-4 sm:py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-lg xs:text-xl font-bold tracking-tight text-gradient"
        >
          {PERSONAL_INFO.name.toUpperCase()}
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors uppercase tracking-widest hover:scale-105"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-slate-100 p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-slate-950 border-t border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
            ? "max-h-screen h-screen opacity-100 py-4 sm:py-6"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col space-y-3 sm:space-y-4 px-4 xs:px-6 sm:px-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base xs:text-lg font-medium text-slate-300 hover:text-blue-400 transition-colors py-2 sm:py-3 px-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="w-fit px-5 xs:px-6 py-2 xs:py-3 rounded-full bg-blue-600 text-white text-base xs:text-md font-semibold mt-2"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
