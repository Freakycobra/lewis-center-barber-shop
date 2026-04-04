import { useEffect, useRef } from "react";
import { barbers } from "../data/shop";

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
          {/* Left: big emoji/avatar */}
          <div style={{
            backgroundColor: "#111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "280px",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              inset: 0,
              background: "repeating-linear-gradient(45deg, rgba(201,168,76,0.03) 0px, rgba(201,168,76,0.03) 1px, transparent 1px, transparent 20px)",
            }} />
            <div style={{ position: "relative", textAlign: "center" }}>
              <div style={{ fontSize: "80px", marginBottom: "8px" }}>✂️</div>
              <div style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C9A84C",
              }}>
                The Master Barber
              </div>
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
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#111")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0d0d0d")}
            >
              <div style={{ fontSize: "36px", marginBottom: "20px" }}>{barber.emoji}</div>
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
