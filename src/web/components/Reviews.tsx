import { useEffect, useRef } from "react";
import { reviews } from "../data/shop";

export default function Reviews() {
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
      id="reviews"
      ref={sectionRef}
      style={{ backgroundColor: "#0d0d0d", padding: "100px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Top gold line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C 30%, #C9A84C 70%, transparent)", opacity: 0.2 }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "64px" }}>
          <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "12px" }}>
            Word on the Street
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(52px, 8vw, 80px)", color: "#F5F0E8", lineHeight: 0.95 }}>
            What Clients<br />
            <span style={{ color: "#C9A84C" }}>Are Saying</span>
          </h2>
          <div style={{ marginTop: "24px", width: "80px", height: "2px", background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
        </div>

        {/* Reviews grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "2px",
        }}>
          {reviews.map((review, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                backgroundColor: "#080808",
                border: "1px solid #1a1a1a",
                padding: "36px 32px",
                position: "relative",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1a1a1a")}
            >
              {/* Gold quote mark */}
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "80px",
                color: "#C9A84C",
                lineHeight: 0.7,
                marginBottom: "20px",
                opacity: 0.4,
              }}>
                "
              </div>

              {/* Stars */}
              <div style={{ marginBottom: "16px" }}>
                {"★".repeat(review.stars).split("").map((star, si) => (
                  <span key={si} style={{ color: "#C9A84C", fontSize: "14px" }}>{star}</span>
                ))}
              </div>

              {/* Review text */}
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                fontStyle: "italic",
                color: "#aaa",
                lineHeight: 1.7,
                marginBottom: "28px",
              }}>
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#F5F0E8",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}>
                    {review.name}
                  </div>
                </div>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "10px",
                  color: "#444",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  border: "1px solid #222",
                  padding: "3px 8px",
                }}>
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating bar */}
        <div className="reveal" style={{
          marginTop: "64px",
          padding: "40px",
          backgroundColor: "#080808",
          border: "1px solid #1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "32px",
        }}>
          {[
            { platform: "Google", rating: "4.8", count: "76+ Reviews" },
            { platform: "Yelp", rating: "5.0", count: "7 Reviews" },
            { platform: "Booksy", rating: "4.9", count: "76+ Reviews" },
            { platform: "Facebook", rating: "96%", count: "Recommend" },
          ].map((r) => (
            <div key={r.platform} style={{ textAlign: "center" }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "48px",
                color: "#C9A84C",
                lineHeight: 1,
                letterSpacing: "0.05em",
              }}>
                {r.rating}
              </div>
              <div style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "12px",
                color: "#F5F0E8",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: "4px",
              }}>
                {r.platform}
              </div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                color: "#555",
                marginTop: "2px",
              }}>
                {r.count}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
