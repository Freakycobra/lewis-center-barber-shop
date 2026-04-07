import { useEffect, useRef } from "react";
import { shop } from "../data/shop";

export default function HoursLocation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <section
      id="hours"
      ref={sectionRef}
      style={{ backgroundColor: "#080808", padding: "100px 0", position: "relative" }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C 30%, #C9A84C 70%, transparent)", opacity: 0.15 }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "64px" }}>
          <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px" }}>
            Find Us
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(52px, 8vw, 80px)", color: "#F5F0E8", lineHeight: 0.95 }}>
            Hours &<br />
            <span style={{ color: "#C9A84C" }}>Location</span>
          </h2>
          <div style={{ marginTop: "24px", width: "80px", height: "2px", background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
          {/* Hours */}
          <div className="reveal" style={{ backgroundColor: "#0d0d0d", border: "1px solid #1a1a1a", padding: "48px 40px" }}>
            <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "32px", display: "flex", alignItems: "center", gap: "10px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              Business Hours
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {shop.hours.map((h) => {
                const isToday = h.day === today;
                const isClosed = h.time === "Closed";
                return (
                  <div
                    key={h.day}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 0",
                      borderBottom: "1px solid #1a1a1a",
                      backgroundColor: isToday ? "rgba(201,168,76,0.04)" : "transparent",
                      paddingLeft: isToday ? "12px" : "0",
                      paddingRight: isToday ? "12px" : "0",
                      marginLeft: isToday ? "-12px" : "0",
                      marginRight: isToday ? "-12px" : "0",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      {isToday && (
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#C9A84C", display: "inline-block", flexShrink: 0 }} />
                      )}
                      <span style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontSize: "14px",
                        fontWeight: isToday ? 600 : 400,
                        color: isToday ? "#F5F0E8" : "#666",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}>
                        {h.day}
                        {isToday && <span style={{ color: "#C9A84C", marginLeft: "6px", fontSize: "10px" }}>TODAY</span>}
                      </span>
                    </div>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      color: isClosed ? "#333" : (isToday ? "#C9A84C" : "#888"),
                      textDecoration: isClosed ? "line-through" : "none",
                    }}>
                      {h.time}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Location info + map */}
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <div style={{ backgroundColor: "#0d0d0d", border: "1px solid #1a1a1a", padding: "48px 40px", flex: 1 }}>
              <h3 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "32px", display: "flex", alignItems: "center", gap: "10px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Find Us
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                <div>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "11px", color: "#444", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px" }}>
                    Address
                  </div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#F5F0E8", lineHeight: 1.5 }}>
                    {shop.address}<br />
                    {shop.city}
                  </div>
                  <a
                    href="https://maps.google.com/?q=Lewis+Center+Barber+Shop+1550+Lewis+Center+Rd+Lewis+Center+OH"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "'Oswald', sans-serif", fontSize: "11px", color: "#C9A84C", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "8px", display: "inline-flex", alignItems: "center", gap: "6px" }}
                  >
                    Get Directions
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </a>
                </div>

                <div>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "11px", color: "#444", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px" }}>
                    Phone
                  </div>
                  <a href={`tel:${shop.phone}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "20px", color: "#F5F0E8", textDecoration: "none", letterSpacing: "0.02em" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#F5F0E8")}
                  >
                    {shop.phone}
                  </a>
                </div>

                <div>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "11px", color: "#444", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>
                    Book Online
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
                      padding: "12px 28px",
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
                      <rect x="3" y="4" width="18" height="18" rx="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    Book on Booksy
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded map */}
            <div style={{ border: "1px solid #1a1a1a", overflow: "hidden", height: "200px" }}>
              <iframe
                title="Lewis Center Barber Shop Location"
                width="100%"
                height="200"
                style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg)" }}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.5!2d-83.0185!3d40.1844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388e1a9e2f1a3d%3A0x0!2sLewis+Center+Barber+Shop!5e0!3m2!1sen!2sus!4v1"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #hours .grid-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
