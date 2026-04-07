import { useEffect, useRef } from "react";
import { services, shop } from "../data/shop";

// SVG icon map — no emojis
const ServiceIcons: Record<string, JSX.Element> = {
  "Classic Haircut": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
      <line x1="20" y1="4" x2="8.12" y2="15.88"/>
      <line x1="14.47" y1="14.48" x2="20" y2="20"/>
      <line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
  ),
  "Fade": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <line x1="3" y1="9" x2="21" y2="9" strokeOpacity="0.4"/>
      <line x1="3" y1="15" x2="21" y2="15" strokeOpacity="0.7"/>
      <line x1="3" y1="19" x2="21" y2="19"/>
    </svg>
  ),
  "Beard Trim & Shape": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 7c0 5.523-3.582 10-8 10S4 12.523 4 7"/>
      <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
      <line x1="9" y1="21" x2="15" y2="21"/>
    </svg>
  ),
  "Haircut + Beard Combo": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7c0 3.87-2.686 6-7 6s-7-2.13-7-6a7 7 0 0 1 7-7z"/>
      <path d="M8 15c-2 1-3 2.5-3 4h14c0-1.5-1-3-3-4"/>
      <line x1="9" y1="9" x2="9" y2="9" strokeWidth="2.5"/>
      <line x1="15" y1="9" x2="15" y2="9" strokeWidth="2.5"/>
    </svg>
  ),
  "Kids Cut": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="5"/>
      <path d="M7 13c-2 1.5-3 3-3 4h16c0-1-1-2.5-3-4"/>
      <path d="M9 7.5c1-1 3-1 4 0"/>
    </svg>
  ),
  "Line Up / Edge Up": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12" strokeOpacity="0.5"/>
      <path d="M3 18 L10 18 L10 14 L14 14 L14 18 L21 18"/>
    </svg>
  ),
  "Hot Towel Shave": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l4 4-1.5 8.5L12 20l5.5-3.5L16 8l4-4"/>
      <path d="M8 8h8"/>
      <path d="M7 5c1-1 3-1 4 0s3 1 4 0"/>
    </svg>
  ),
  "Military Cut": (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 7v5c0 5 3.9 9.7 9 11 5.1-1.3 9-6 9-11V7z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
};

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        backgroundColor: "#0d0d0d",
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background text */}
      <div style={{
        position: "absolute",
        top: "50%",
        right: "-60px",
        transform: "translateY(-50%) rotate(90deg)",
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "120px",
        color: "rgba(201,168,76,0.03)",
        letterSpacing: "0.1em",
        userSelect: "none",
        pointerEvents: "none",
        whiteSpace: "nowrap",
      }}>
        PRECISION
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Section header */}
        <div className="reveal" style={{ marginBottom: "64px" }}>
          <div style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#C9A84C",
            marginBottom: "12px",
          }}>
            What We Do
          </div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(52px, 8vw, 80px)",
            color: "#F5F0E8",
            lineHeight: 0.95,
            letterSpacing: "0.02em",
          }}>
            Services &<br />
            <span style={{ color: "#C9A84C" }}>Pricing</span>
          </h2>
          <div style={{
            marginTop: "24px",
            width: "80px",
            height: "2px",
            background: "linear-gradient(90deg, #C9A84C, transparent)",
          }} />
        </div>

        {/* Services grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1px",
          border: "1px solid #1a1a1a",
          backgroundColor: "#1a1a1a",
        }}>
          {services.map((service, i) => (
            <div
              key={service.name}
              className="reveal"
              style={{
                backgroundColor: "#0d0d0d",
                padding: "32px 28px",
                position: "relative",
                cursor: "default",
                transition: "background-color 0.3s ease",
                animationDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "#111111";
                const accent = el.querySelector(".svc-accent") as HTMLElement;
                if (accent) accent.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "#0d0d0d";
                const accent = el.querySelector(".svc-accent") as HTMLElement;
                if (accent) accent.style.opacity = "0";
              }}
            >
              {/* Gold top accent on hover */}
              <div className="svc-accent" style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, #C9A84C, transparent)",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }} />

              {/* SVG icon */}
              <div style={{ marginBottom: "20px" }}>
                {ServiceIcons[service.name] || (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                )}
              </div>

              <div style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "12px",
                marginBottom: "10px",
              }}>
                <h3 style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#F5F0E8",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                }}>
                  {service.name}
                </h3>
                <span style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "22px",
                  color: "#C9A84C",
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}>
                  {service.price}
                </span>
              </div>

              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                color: "#666",
                lineHeight: 1.6,
              }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA below services */}
        <div className="reveal" style={{
          marginTop: "48px",
          display: "flex",
          alignItems: "center",
          gap: "24px",
          flexWrap: "wrap",
        }}>
          <a
            href={shop.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#080808",
              backgroundColor: "#C9A84C",
              padding: "14px 32px",
              textDecoration: "none",
              transition: "background-color 0.2s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E8C76A")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A84C")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            Book Your Appointment
          </a>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            color: "#555",
          }}>
            Walk-ins also welcome · Call {shop.phone}
          </span>
        </div>
      </div>
    </section>
  );
}
