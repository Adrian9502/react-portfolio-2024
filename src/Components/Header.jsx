import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header/header.css";

export default function Header() {
  // State to track if the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu open/close state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky shadow-sm shadow-custom-cyan sm:shadow-none top-0 left-0 right-0 z-20 p-3 flex items-center justify-between">
      {/* Logo Section: Clicking the logo navigates to the home page */}
      <section>
        <Link to="/">
          <img
            className="w-24"
            src="/Header/header-logo.png"
            alt="Header Logo"
          />
        </Link>
      </section>

      {/* Hamburger Menu Icon for mobile view */}
      <div className="sm:hidden text-custom-cyan" onClick={toggleMenu}>
        {/* Display FaTimes (close icon) when menu is open, else FaBars (menu icon) */}
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Navigation Section: Visible on both mobile (when open) and desktop */}
      <section
        className={`${
          menuOpen ? "flex flex-wrap shadow-sm shadow-custom-cyan" : "hidden"
        } sm:flex bg-[#000319] sm:bg-transparent justify-center items-end sm:flex-row sm:items-center absolute sm:static top-16 right-0 left-0 text-sm text-slate-300 z-10`}
      >
        {/* Navigation Links */}
        <a
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="nav-item hover:text-custom-cyan sm:text-base"
        >
          Home
        </a>
        <a
          href="#About"
          className="nav-item hover:text-custom-cyan sm:text-base"
        >
          About
        </a>
        <a
          href="#Skills"
          className="nav-item hover:text-custom-cyan sm:text-base"
        >
          Skills
        </a>
        <a
          href="#Projects"
          className="nav-item hover:text-custom-cyan sm:text-base"
        >
          Projects
        </a>
        <a
          href="#Certification"
          className="nav-item hover:text-custom-cyan sm:text-base"
        >
          Certification
        </a>
        <a
          href="#Contact"
          className="nav-item hover:text-custom-cyan sm:text-base"
        >
          Contact
        </a>
      </section>
    </header>
  );
}
