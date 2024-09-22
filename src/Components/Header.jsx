import { Link } from "react-router-dom";
import "./Header/header.css";

export default function Header() {
  return (
    <header className="sticky rounded-bl-lg rounded-br-lg top-0 z-10 p-5 flex items-center justify-between">
      <section>
        <Link to="/">
          <img
            className="w-24"
            src="/Header/header-logo.png"
            alt="Header Logo"
          />
        </Link>
      </section>
      <div className="text-slate-300 text-sm lg:text-lg flex flex-nowrap gap-2">
        <nav className="nav-item hover:text-custom-cyan">
          <Link to="/">Home</Link>
        </nav>
        <div className="nav-item hover:text-custom-cyan">
          <Link to="/certification">Certification</Link>
        </div>
        <div className="nav-item hover:text-custom-cyan">Projects</div>
        <div className="nav-item hover:text-custom-cyan">Skills</div>
        <div className="nav-item hover:text-custom-cyan">Contact</div>
      </div>
    </header>
  );
}
