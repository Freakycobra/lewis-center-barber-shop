import { useEffect, useRef } from "react";
import { barbers } from "../data/shop";

// Abstract geometric avatar for each barber
function BarberAvatar({ index, size = 80 }: { index: number; size?: number }) {
  const configs = [
    // Myron — crown / master barber
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" key="myron">
      <circle cx="40" cy="40" r="38" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 4"/>
      <circle cx="40" cy="40" r="28" fill="#111" stroke="#C9A84C" strokeWidth="1.5"/>
      {/* Crown shape */}
      <path d="M24 50 L24 36 L32 44 L40 30 L48 44 L56 36 L56 50 Z" fill="#C9A84C" opacity="0.9"/>
      <rect x="22" y="50" width="36" height="4" rx="1" fill="#C9A84C"/>
    </svg>,
    // Chance — clean lines
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" key="chance">
      <rect x="2" y="2" width="76" height="76" rx="4" stroke="#C9A84C" strokeWidth="1" strokeDasharray="3 3"/>
      <rect x="16" y="16" width="48" height="48" rx="2" fill="#111" stroke="#C9A84C" strokeWidth="1.5"/>
      {/* Fade lines */}
      <line x1="22" y1="28" x2="58" y2="28" stroke="#C9A84C" strokeWidth="3" strokeOpacity="0.3" strokeLinecap="round"/>
      <line x1="22" y1="36" x2="58" y2="36" stroke="#C9A84C" strokeWidth="2.5" strokeOpacity="0.5" strokeLinecap="round"/>
      <line x1="22" y1="44" x2="58" y2="44" stroke="#C9A84C" strokeWidth="2" strokeOpacity="0.7" strokeLinecap="round"/>
      <line x1="22" y1="52" x2="58" y2="52" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>,
    // Braxton — blend / gradient
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" key="braxton">
      <polygon points="40,4 76,22 76,58 40,76 4,58 4,22" stroke="#C9A84C" strokeWidth="1" fill="none" strokeDasharray="3 3"/>
      <polygon points="40,14 66,27 66,53 40,66 14,53 14,27" fill="#111" stroke="#C9A84C" strokeWidth="1.5"/>
      {/* Blend wave */}
      <path d="M20 45 Q30 35 40 45 Q50 55 60 45" stroke="#C9A84C" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M20 40 Q30 30 40 40 Q50 50 60 40" stroke="#C9A84C" strokeWidth="1.5" fill="none" strokeOpacity="0.6" strokeLinecap="round"/>
      <path d="M20 35 Q30 25 40 35 Q50 45 60 35" stroke="#C9A84C" strokeWidth="1" fill="none" strokeOpacity="0.3" strokeLinecap="round"/>
    </svg>,
    // Michael — precision / grid
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" key="michael">
      <circle cx="40" cy="40" r="38" stroke="#C9A84C" strokeWidth="1" strokeDasharray="2 4"/>
      <circle cx="40" cy="40" r="26" fill="#111" stroke="#C9A84C" strokeWidth="1.5"/>
      {/* Crosshair precision */}
      <line x1="40" y1="20" x2="40" y2="60" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.4"/>
      <line x1="20" y1="40" x2="60" y2="40" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.4"/>
      <circle cx="40" cy="40" r="8" stroke="#C9A84C" strokeWidth="2"/>
      <circle cx="40" cy="40" r="2" fill="#C9A84C"/>
      <line x1="40" y1="14" x2="40" y2="20" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
      <line x1="40" y1="60" x2="40" y2="66" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
      <line x1="14" y1="40" x2="20" y2="40" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
      <line x1="60" y1="40" x2="66" y2="40" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
    </svg>,
  ];
  return configs[index] || configs[0];
}

export default function Barbers() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="barbers"
      ref={sectionRef}
      style={{ backgroundColor: "#080808", padding: "100px 0", position: "relative", overflow: "hidden" }}
    >
      {/* BG ghost text */}
      <div style={{
        position: "absolute",
        bottom: "-30px",
        left: "-20px",
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(80px, 15vw, 180px)",
        color: "rgba(201,168,76,0.025)",
        userSelect: "none",
        pointerEvents: "none",
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}>
        THE TEAM
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "64px" }}>
          <div style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#C9A84C",
            marginBottom: "12px",
          }}>
            The Crew
          </div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(52px, 8vw, 80px)",
            color: "#F5F0E8",
            lineHeight: 0.95,
          }}>
            Meet Your<br />
            <span style={{ color: "#C9A84C" }}>Barbers</span>
          </h2>
          <div style={{ marginTop: "24px", width: "80px", height: "2px", background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
        </div>

        {/* Featured barber — Myron */}
        <div className="reveal" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0",
          border: "1px solid #1a1a1a",
          marginBottom: "2px",
          overflow: "hidden",
        }}>
          {/* Left: geometric visual */}
          <div style={{
            backgroundColor: "#0a0a0a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "300px",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Diagonal grid */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "repeating-linear-gradient(45deg, rgba(201,168,76,0.03) 0px, rgba(201,168,76,0.03) 1px, transparent 1px, transparent 24px)",
            }} />
            {/* Radial glow */}
            <div style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)",
            }} />
            <div style={{ position: "relative", zIndex: 2 }}>
              <BarberAvatar index={0} size={120} />
            </div>
          </div>

          {/* Right: info */}
          <div style={{ padding: "48px 40px", backgroundColor: "#0d0d0d", borderLeft: "1px solid #1a1a1a" }}>
            <div style={{
              display: "inline-block",
              border: "1px solid rgba(201,168,76,0.3)",
              padding: "3px 10px",
              marginBottom: "16px",
            }}>
              <span style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C9A84C",
              }}>
                Owner & Founder
              </span>
            </div>

            <h3 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "52px",
              color: "#F5F0E8",
              letterSpacing: "0.03em",
              lineHeight: 1,
              marginBottom: "16px",
            }}>
              Myron Byrd
            </h3>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              color: "#777",
              lineHeight: 1.7,
              marginBottom: "24px",
            }}>
              {barbers[0].bio}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {barbers[0].specialties.map((s) => (
                <span key={s} style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  border: "1px solid rgba(201,168,76,0.25)",
                  padding: "4px 10px",
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Other barbers grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2px",
        }}>
          {barbers.slice(1).map((barber, i) => (
            <div
              key={barber.name}
              className="reveal"
              style={{
                backgroundColor: "#0d0d0d",
                border: "1px solid #1a1a1a",
                padding: "32px 28px",
                transition: "background-color 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "#111";
                const glow = el.querySelector(".barber-glow") as HTMLElement;
                if (glow) glow.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.backgroundColor = "#0d0d0d";
                const glow = el.querySelector(".barber-glow") as HTMLElement;
                if (glow) glow.style.opacity = "0";
              }}
            >
              {/* Corner glow */}
              <div className="barber-glow" style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "150px",
                height: "150px",
                background: "radial-gradient(ellipse at top right, rgba(201,168,76,0.06), transparent 70%)",
                opacity: 0,
                transition: "opacity 0.4s ease",
                pointerEvents: "none",
              }} />

              <div style={{ marginBottom: "20px" }}>
                <BarberAvatar index={i + 1} size={56} />
              </div>
              <h3 style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "20px",
                fontWeight: 600,
                color: "#F5F0E8",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "6px",
              }}>
                {barber.name}
              </h3>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                color: "#C9A84C",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}>
                {barber.title}
              </div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                color: "#666",
                lineHeight: 1.6,
                marginBottom: "20px",
              }}>
                {barber.bio}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {barber.specialties.map((s) => (
                  <span key={s} style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    color: "#555",
                    border: "1px solid #222",
                    padding: "3px 8px",
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #barbers .grid-featured { grid-template-columns: 1fr !important; }
          #barbers .grid-team { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
