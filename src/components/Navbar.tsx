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
        isScrolled
          ? "bg-white shadow-md text-gray-800"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center gap-2">
                <Leaf
                  className={`w-6 h-6 ${
                    isScrolled ? "text-green-600" : "text-white"
                  }`}
                />
                <span className="font-bold text-xl">PapayaBuddy</span>
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-12 flex items-baseline">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`${
                      isScrolled
                        ? "hover:text-green-600"
                        : "hover:text-yellow-300"
                    } px-2 py-1 text-sm font-medium transition-colors duration-300`}
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
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled
                  ? "text-gray-800 hover:text-green-600 hover:bg-gray-100"
                  : "text-white hover:text-yellow-300 hover:bg-gray-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
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
