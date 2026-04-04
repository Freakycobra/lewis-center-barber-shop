import { shop } from "../data/shop";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#040404", borderTop: "1px solid #1a1a1a", padding: "48px 0 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "40px", marginBottom: "48px" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ fontSize: "24px" }}>💈</span>
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
            {["#services", "#barbers", "#reviews", "#hours"].map((href) => (
              <a key={href} href={href} style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#555", textDecoration: "none", marginBottom: "10px", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                {href.replace("#", "").charAt(0).toUpperCase() + href.replace("#", "").slice(1)}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "20px" }}>
              Contact
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#555", lineHeight: 2 }}>
              <a href={`tel:${shop.phone}`} style={{ color: "#555", textDecoration: "none", display: "block" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                📞 {shop.phone}
              </a>
              <span style={{ display: "block" }}>📍 {shop.address}</span>
              <span style={{ display: "block" }}>{shop.city}</span>
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
                display: "inline-block",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E8C76A")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A84C")}
            >
              ✂️ Book on Booksy
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
