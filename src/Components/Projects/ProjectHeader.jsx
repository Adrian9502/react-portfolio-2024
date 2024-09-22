import { Link } from "react-router-dom";
import ".././Header/header.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ProjectHeader() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
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
        <Link to={-1}>
          <nav className="nav-item hover:text-custom-cyan">Back</nav>
        </Link>
      </section>
    </header>
  );
}
