import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-sm backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">SkyGrid Studio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-white">
          <li>
            <a href="#services" className="hover:text-primary transition">
              Services
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-primary transition">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden text-white">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="backdrop-blur-md px-6 py-4 space-y-4 text-white font-medium border-t border-white/10">
          <li>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block hover:text-primary transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={() => setIsOpen(false)}
              className="block hover:text-primary transition"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block hover:text-primary transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
