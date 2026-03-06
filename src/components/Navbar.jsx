import React, { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { PERSONAL_INFO } from "../../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = useMemo(() => {
    return [
      { name: "Home", href: "/", isRoute: true },
      { name: "Projects", href: "/projects", isRoute: true },
    ];
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navClass = scrolled ? "nav-shell nav-shell-scrolled" : "nav-shell";

  return (
    <header className={navClass}>
      <div className="section-wrap nav-inner">
        <Link to="/" className="brand-mark" onClick={() => setIsOpen(false)}>
          {PERSONAL_INFO.name}
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) =>
            link.isRoute ? (
              <Link key={link.name} to={link.href}>
                {link.name}
              </Link>
            ) : (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ),
          )}
          <Link to="/lets-talk" className="nav-cta">
            Let&apos;s Talk
          </Link>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={isOpen ? "mobile-nav open" : "mobile-nav"}
      >
        <div className="section-wrap mobile-nav-inner">
          {links.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ),
          )}
          <Link
            to="/lets-talk"
            className="nav-cta"
            onClick={() => setIsOpen(false)}
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
