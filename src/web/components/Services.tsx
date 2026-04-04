import { useEffect, useRef } from "react";
import { services, shop } from "../data/shop";

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
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
                (e.currentTarget as HTMLElement).style.backgroundColor = "#111111";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#0d0d0d";
              }}
            >
              {/* Gold top accent on hover */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, #C9A84C, transparent)",
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
                className="service-top-accent"
              />

              <div style={{ fontSize: "28px", marginBottom: "16px" }}>{service.icon}</div>

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
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E8C76A")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A84C")}
          >
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

      <style>{`
        .service-card:hover .service-top-accent {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
