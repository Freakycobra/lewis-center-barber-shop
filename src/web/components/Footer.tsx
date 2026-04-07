import { shop } from "../data/shop";

function BarberPoleMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pole body */}
      <rect x="13" y="2" width="6" height="28" rx="3" fill="#C9A84C" opacity="0.15"/>
      {/* Spiral stripes */}
      <path d="M13 6 Q16 8 19 6" stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M13 10 Q16 12 19 10" stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M13 14 Q16 16 19 14" stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M13 18 Q16 20 19 18" stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M13 22 Q16 24 19 22" stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Top/bottom caps */}
      <rect x="11" y="1" width="10" height="4" rx="2" fill="#C9A84C" opacity="0.5"/>
      <rect x="11" y="27" width="10" height="4" rx="2" fill="#C9A84C" opacity="0.5"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#040404", borderTop: "1px solid #1a1a1a", padding: "48px 0 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "40px", marginBottom: "48px" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <BarberPoleMark />
              <div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "22px", letterSpacing: "0.1em", color: "#C9A84C" }}>
                  Lewis Center Barber Shop
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#444", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Est. 2003 · Lewis Center, OH
                </div>
              </div>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#444", maxWidth: "280px", lineHeight: 1.7 }}>
              Premier barbershop serving Lewis Center and the surrounding communities for over 21 years.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px" }}>
              Quick Links
            </div>
            {[
              { href: "#services", label: "Services" },
              { href: "#barbers", label: "Barbers" },
              { href: "#reviews", label: "Reviews" },
              { href: "#hours", label: "Hours & Location" },
            ].map(({ href, label }) => (
              <a key={href} href={href} style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#555", textDecoration: "none", marginBottom: "10px", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                {label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px" }}>
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href={`tel:${shop.phone}`} style={{ display: "flex", alignItems: "center", gap: "8px", color: "#555", textDecoration: "none", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.09 6.09l.99-.99a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                </svg>
                {shop.phone}
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "#555", fontFamily: "'DM Sans', sans-serif", fontSize: "13px" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>{shop.address}<br />{shop.city}</span>
              </div>
            </div>
          </div>

          {/* Book CTA */}
          <div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px" }}>
              Book Now
            </div>
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
                padding: "12px 24px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E8C76A")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A84C")}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
                <line x1="20" y1="4" x2="8.12" y2="15.88"/>
                <line x1="14.47" y1="14.48" x2="20" y2="20"/>
                <line x1="8.12" y1="8.12" x2="12" y2="12"/>
              </svg>
              Book on Booksy
            </a>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#333", marginTop: "12px" }}>
              Walk-ins also welcome
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #111", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#333" }}>
            © 2026 Lewis Center Barber Shop · All rights reserved
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#222" }}>
            1550 Lewis Center Rd · Lewis Center, OH 43035
          </div>
        </div>
      </div>
    </footer>
  );
}
