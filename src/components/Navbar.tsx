import React, { useState, useEffect } from "react";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    {
      name: "Project Scope",
      href: "#scope",
      dropdown: [
        { name: "Literature Survey", href: "#literature" },
        { name: "Research Gap", href: "#gap" },
        { name: "Research Problem & Solution", href: "#solution" },
        { name: "Research Objectives", href: "#objectives" },
        { name: "Methodology", href: "#methodology" },
        { name: "Technologies", href: "#technologies" },
      ]
    },
    {
      name: "Downloads",
      href: "#downloads",
      dropdown: [
        { name: "Presentation", href: "#presentation" },
        { name: "Documents", href: "#documents" },
      ]
    },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const handleDropdownClick = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-md text-gray-800" 
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a 
                href="#home" 
                className="flex items-center gap-2 transition-transform hover:scale-105"
              >
                <Leaf 
                  className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300 ${
                    isScrolled ? "text-green-600" : "text-white"
                  }`} 
                />
                <span className="font-bold text-xl sm:text-2xl tracking-tight">
                  PapayaBuddy
                </span>
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownClick(item.name)}
                        className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center ${
                          isScrolled 
                            ? "hover:text-green-600" 
                            : "hover:text-yellow-300"
                        } ${
                          activeSection === item.href.substring(1) 
                            ? isScrolled 
                              ? "text-green-600" 
                              : "text-yellow-300"
                            : ""
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                        <div className="py-1" role="menu">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm ${
                                isScrolled 
                                  ? "text-gray-700 hover:bg-green-50 hover:text-green-600" 
                                  : "text-gray-700 hover:bg-gray-50"
                              }`}
                              role="menuitem"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                        isScrolled 
                          ? "hover:text-green-600" 
                          : "hover:text-yellow-300"
                      } ${
                        activeSection === item.href.substring(1) 
                          ? isScrolled 
                            ? "text-green-600" 
                            : "text-yellow-300"
                          : ""
                      }`}
                    >
                      {item.name}
                      {activeSection === item.href.substring(1) && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-100 transition-transform duration-300" />
                      )}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-800 hover:text-green-600 hover:bg-gray-100"
                  : "text-white hover:text-yellow-300 hover:bg-gray-700/50"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white`}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle navigation</span>
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
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? "max-h-[calc(100vh-4rem)] opacity-100 visible" 
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm" : "bg-gray-900/95 backdrop-blur-sm"
        } shadow-lg`}>
          {navItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => handleDropdownClick(item.name)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                      isScrolled
                        ? "text-gray-800 hover:text-green-600 hover:bg-gray-100"
                        : "text-white hover:text-yellow-300 hover:bg-gray-700/50"
                    } ${openDropdown === item.name ? (isScrolled ? "text-green-600" : "text-yellow-300") : ""}`}
                  >
                    {item.name}
                  </button>
                  {openDropdown === item.name && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                            isScrolled
                              ? "text-gray-600 hover:text-green-600 hover:bg-gray-100"
                              : "text-gray-300 hover:text-yellow-300 hover:bg-gray-700/50"
                          }`}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    isScrolled
                      ? "text-gray-800 hover:text-green-600 hover:bg-gray-100"
                      : "text-white hover:text-yellow-300 hover:bg-gray-700/50"
                  } ${activeSection === item.href.substring(1) ? (isScrolled ? "text-green-600" : "text-yellow-300") : ""}`}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
