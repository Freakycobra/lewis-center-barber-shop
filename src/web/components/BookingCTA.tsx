import { shop } from "../data/shop";
import { useEffect, useRef } from "react";

export default function BookingCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.2 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#C9A84C",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background diagonal lines */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 20px)",
        pointerEvents: "none",
      }} />

      {/* Ghost text */}
      <div style={{
        position: "absolute",
        top: "50%",
        right: "-40px",
        transform: "translateY(-50%)",
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(80px, 15vw, 160px)",
        color: "rgba(0,0,0,0.06)",
        userSelect: "none",
        pointerEvents: "none",
        whiteSpace: "nowrap",
        lineHeight: 1,
      }}>
        BOOK NOW
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "40px" }}>
          <div className="reveal">
            <div style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(0,0,0,0.5)",
              marginBottom: "12px",
            }}>
              Ready to Look Sharp?
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(48px, 7vw, 80px)",
              color: "#080808",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
            }}>
              Book Your<br />
              Appointment
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              color: "rgba(0,0,0,0.6)",
              marginTop: "16px",
              maxWidth: "400px",
              lineHeight: 1.6,
            }}>
              Online booking available 24/7 through Booksy. Walk-ins always welcome during business hours.
            </p>
          </div>

          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <a
              href={shop.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#F5F0E8",
                backgroundColor: "#080808",
                padding: "18px 48px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                transition: "background-color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1a1a1a";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#080808";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Calendar icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book on Booksy
            </a>
            <a
              href={`tel:${shop.phone}`}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "rgba(0,0,0,0.7)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                justifyContent: "center",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#080808")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0,0,0,0.7)")}
            >
              {/* Phone icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.09 6.09l.99-.99a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
              </svg>
              Or call us: {shop.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
