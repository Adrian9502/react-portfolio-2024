import "./Header/header.css";
export default function Header() {
  return (
    <header className="sticky top-0 z-20 p-5 flex items-center justify-between">
      <section>
        <img className="h-8" src="/Header/header-logo.png" alt="Header Logo" />
      </section>
      <div className="text-slate-300 flex gap-2">
        <nav className="nav-item hover:text-custom-cyan">Home</nav>
        <div className="nav-item hover:text-custom-cyan">Certification</div>
        <div className="nav-item hover:text-custom-cyan">Projects</div>
        <div className="nav-item hover:text-custom-cyan">Skills</div>
        <div className="nav-item hover:text-custom-cyan">Contact</div>
      </div>
    </header>
  );
}
