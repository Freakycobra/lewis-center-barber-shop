import { useState, useEffect } from "react";
import { shop } from "../data/shop";

function ScissorsLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Barber pole inspired logo mark */}
      <rect x="14" y="2" width="4" height="28" rx="2" fill="#C9A84C" opacity="0.2"/>
      {/* Scissors */}
      <circle cx="8" cy="8" r="3.5" stroke="#C9A84C" strokeWidth="1.8" fill="none"/>
      <circle cx="8" cy="24" r="3.5" stroke="#C9A84C" strokeWidth="1.8" fill="none"/>
      <line x1="27" y1="5" x2="10.5" y2="21.5" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="20" y1="20" x2="27" y2="27" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="10.5" y1="10.5" x2="15" y2="15" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Barbers", href: "#barbers" },
    { label: "Reviews", href: "#reviews" },
    { label: "Hours", href: "#hours" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(8,8,8,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid #222222" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <ScissorsLogo />
              <div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "18px", letterSpacing: "0.1em", color: "#C9A84C", lineHeight: 1 }}>
                  LCBS
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px", color: "#888", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Est. 2003
                </div>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#888",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
              >
                {link.label}
              </a>
            ))}
            <a
              href={shop.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#080808",
                backgroundColor: "#C9A84C",
                padding: "8px 20px",
                textDecoration: "none",
                transition: "background-color 0.2s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E8C76A")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A84C")}
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "none" }}
            className="mobile-menu-btn"
            aria-label="Menu"
          >
            <div style={{ width: "24px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "5px", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <div style={{ width: "16px", height: "2px", backgroundColor: "#C9A84C", marginBottom: "5px", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <div style={{ width: "24px", height: "2px", backgroundColor: "#C9A84C", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            borderTop: "1px solid #222",
            paddingBottom: "16px",
            backgroundColor: "rgba(8,8,8,0.98)",
          }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 0",
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "14px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#F5F0E8",
                  textDecoration: "none",
                  borderBottom: "1px solid #1a1a1a",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={shop.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                marginTop: "16px",
                padding: "12px",
                textAlign: "center",
                fontFamily: "'Oswald', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#080808",
                backgroundColor: "#C9A84C",
                textDecoration: "none",
              }}
            >
              Book Now
            </a>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
