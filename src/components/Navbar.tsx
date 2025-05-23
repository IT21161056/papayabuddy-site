import React, { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Project Scope", href: "#scope" },
    { name: "Literature", href: "#literature" },
    { name: "Research Gap", href: "#gap" },
    { name: "Solution", href: "#solution" },
    { name: "Objectives", href: "#objectives" },
    { name: "Methodology", href: "#methodology" },
    { name: "Achievements", href: "#achievements" },
    { name: "Future Work", href: "#future" },
    { name: "Downloads", href: "#downloads" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md text-gray-800" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center gap-1 sm:gap-2">
                <Leaf className={`w-5 h-5 sm:w-6 sm:h-6 ${isScrolled ? "text-green-600" : "text-white"}`} />
                <span className="font-bold text-lg sm:text-xl">PapayaBuddy</span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-8 sm:ml-10 flex items-baseline space-x-2 sm:space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`${
                      isScrolled ? "hover:text-green-600" : "hover:text-yellow-300"
                    } px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium transition-colors duration-300`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-1.5 sm:p-2 rounded-md ${
                isScrolled
                  ? "text-gray-800 hover:text-green-600 hover:bg-gray-100"
                  : "text-white hover:text-yellow-300 hover:bg-gray-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white`}
            >
              <span className="sr-only">Toggle navigation</span>
              {isOpen ? (
                <X className="block h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="block h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[calc(100vh-3.5rem)] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-green-600 block px-3 py-2 rounded-md text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
