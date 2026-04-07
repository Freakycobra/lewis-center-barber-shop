import { Suspense, lazy } from "react";
import { shop } from "../data/shop";

const BarberPole3D = lazy(() => import("./BarberPole3D"));

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        backgroundColor: "#080808",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background grid pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        zIndex: 0,
      }} />

      {/* Radial glow left */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "5%",
        width: "700px",
        height: "700px",
        background: "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
        zIndex: 0,
        pointerEvents: "none",
      }} />

      {/* Radial glow right */}
      <div style={{
        position: "absolute",
        bottom: "0%",
        right: "10%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 70%)",
        zIndex: 0,
        pointerEvents: "none",
      }} />

      {/* Large ghost text background */}
      <div style={{
        position: "absolute",
        bottom: "-20px",
        left: "-20px",
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(120px, 22vw, 280px)",
        color: "rgba(201,168,76,0.03)",
        letterSpacing: "0.05em",
        lineHeight: 1,
        userSelect: "none",
        zIndex: 0,
        whiteSpace: "nowrap",
      }}>
        LCBS
      </div>

      {/* 3D Barber Pole — right side */}
      <div style={{
        position: "absolute",
        right: "4%",
        top: "50%",
        transform: "translateY(-50%)",
        width: "clamp(200px, 28vw, 380px)",
        height: "clamp(400px, 70vh, 700px)",
        zIndex: 1,
        opacity: 0.9,
      }}>
        <Suspense fallback={null}>
          <BarberPole3D />
        </Suspense>
      </div>

      {/* Content */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "120px 24px 80px",
        position: "relative",
        zIndex: 2,
        width: "100%",
      }}>
        <div style={{ maxWidth: "660px" }}>
          {/* Badge */}
          <div className="animate-fade-up" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid rgba(201,168,76,0.3)",
            padding: "6px 14px",
            marginBottom: "32px",
          }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#C9A84C", display: "inline-block" }} />
            <span style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C9A84C",
            }}>
              Lewis Center, OH · Est. 2003
            </span>
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-up-delay-1" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(72px, 12vw, 130px)",
            lineHeight: 0.9,
            color: "#F5F0E8",
            marginBottom: "8px",
            letterSpacing: "0.02em",
          }}>
            The Cut
          </h1>
          <h1 className="animate-fade-up-delay-1 gold-shimmer" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(72px, 12vw, 130px)",
            lineHeight: 0.9,
            marginBottom: "32px",
            letterSpacing: "0.02em",
            display: "block",
          }}>
            You Deserve.
          </h1>

          {/* Subline */}
          <p className="animate-fade-up-delay-2" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "#888",
            lineHeight: 1.6,
            marginBottom: "48px",
            maxWidth: "520px",
          }}>
            Premium fades, classic cuts, and precision beard work — delivered by Lewis Center's most trusted barbers since 2003.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href={shop.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "15px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#080808",
                backgroundColor: "#C9A84C",
                padding: "16px 36px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                transition: "background-color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#E8C76A";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#C9A84C";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Scissor SVG */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
                <line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/>
                <line x1="8.12" y1="8.12" x2="12" y2="12"/>
              </svg>
              Book Your Cut
            </a>
            <a
              href={`tel:${shop.phone}`}
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#F5F0E8",
                border: "1px solid #333",
                padding: "16px 36px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                transition: "border-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#C9A84C";
                e.currentTarget.style.color = "#C9A84C";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#333";
                e.currentTarget.style.color = "#F5F0E8";
              }}
            >
              {/* Phone SVG */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.09 6.09l.99-.99a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
              </svg>
              {shop.phone}
            </a>
          </div>

          {/* Stats row */}
          <div className="animate-fade-up-delay-3" style={{
            marginTop: "72px",
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
            paddingTop: "32px",
            borderTop: "1px solid #1a1a1a",
          }}>
            {[
              { value: "21+", label: "Years Serving" },
              { value: "4.9", label: "Booksy Rating" },
              { value: "5.0", label: "Yelp Rating" },
              { value: "4", label: "Barbers on Staff" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "32px",
                  color: "#C9A84C",
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  color: "#555",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, #C9A84C 30%, #C9A84C 70%, transparent)",
        opacity: 0.3,
      }} />

      <style>{`
        @media (max-width: 900px) {
          #home .pole-3d { display: none !important; }
        }
      `}</style>
    </section>
  );
}
