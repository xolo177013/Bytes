import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { site } from "../data/site";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      document.body.classList.toggle("scrolled", window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      document.documentElement.style.setProperty("--scroll-progress", progress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <nav className="nav shell" aria-label="Primary navigation">
          <Link className="brand" to="/" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">B</span>
            <span>{site.name}</span>
          </Link>

          <div className="desktop-nav">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/process">Process</NavLink>
            <NavLink to="/services">Services</NavLink>
            <Link className="nav-cta" to="/contact">
              Start a project ↗
            </Link>
          </div>

          <div className="mobile-nav">
            <button
              type="button"
              className={`mobile-menu-button${menuOpen ? " open" : ""}`}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
            </button>

            {menuOpen && (
              <div id="mobile-navigation" className="mobile-navigation">
                <NavLink to="/about" onClick={closeMenu}>About</NavLink>
                <NavLink to="/work" onClick={closeMenu}>Work</NavLink>
                <NavLink to="/process" onClick={closeMenu}>Process</NavLink>
                <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
                <Link
                  className="mobile-project-button"
                  to="/contact"
                  onClick={closeMenu}
                >
                  Start a project ↗
                </Link>
              </div>
            )}
          </div>
        </nav>
        <div className="scroll-progress" aria-hidden="true" />
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div>
          <strong>{site.name}</strong>
          <span>{site.location} · Software engineering agency</span>
        </div>
        <span>© {new Date().getFullYear()} Bytes</span>
        <div className="footer-links">
          <Link to="/contact">Contact ↗</Link>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
