"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Mission", href: "#mission" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-5">

        {/* Logo */}

        <Link href="#home">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Chef <span className="text-yellow-500">Joshua</span>
            </h1>

            <p className="text-xs uppercase tracking-[4px] text-gray-300">
              Luxury Dining
            </p>
          </div>
        </Link>

        {/* Desktop */}

        <ul className="hidden md:flex gap-10">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white hover:text-yellow-500 transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Button */}

        <a
          href="#contact"
          className="hidden md:block bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full transition"
        >
          Book Now
        </a>

        {/* Mobile */}

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-8 py-5 text-white hover:bg-yellow-500 hover:text-black transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}