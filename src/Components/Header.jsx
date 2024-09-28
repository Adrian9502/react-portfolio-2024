import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-20 p-3 flex items-center justify-between">
      {/* Logo Section */}
      <section>
        <Link to="/">
          <img
            className="w-24"
            src="/Header/header-logo.png"
            alt="Header Logo"
          />
        </Link>
      </section>

      {/* Hamburger Menu Icon */}
      <div className="sm:hidden text-custom-cyan" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Navigation Section (Mobile & Desktop) */}
      <section
        className={`${
          menuOpen ? "flex flex-wrap" : "hidden"
        } sm:flex header-menu justify-center flex-col items-end sm:flex-row sm:items-center absolute sm:static top-12 right-0 text-sm p-3 sm:p-0 text-slate-300 z-10`}
      >
        <a
          href="#Introduction"
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
