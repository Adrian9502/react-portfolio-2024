import { Link } from "react-router-dom";
import "./Header/header.css";

export default function Header() {
  return (
    <header className="sticky rounded-bl-lg rounded-br-lg top-0 left-0 right-0 z-20 p-3 flex items-center justify-between">
      <section>
        <Link to="/">
          <img
            className="w-24"
            src="/Header/header-logo.png"
            alt="Header Logo"
          />
        </Link>
      </section>
      <section className="text-slate-300 text-sm lg:text-base flex flex-nowrap gap-2">
        <nav className="nav-item hover:text-custom-cyan">Home</nav>
        <nav className="nav-item hover:text-custom-cyan">Certification</nav>
        <nav className="nav-item hover:text-custom-cyan">Projects</nav>
        <nav className="nav-item hover:text-custom-cyan">Skills</nav>
        <nav className="nav-item hover:text-custom-cyan">Contact</nav>
      </section>
    </header>
  );
}
