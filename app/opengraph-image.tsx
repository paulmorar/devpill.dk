import { ImageResponse } from "next/og";

export const alt = "Devpill — Boutique IT consultancy in Copenhagen";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        backgroundColor: "#05060a",
        color: "white",
        fontFamily: "system-ui",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          backgroundImage:
            "radial-gradient(circle at 85% 10%, rgba(89,193,255,0.40), transparent 55%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          backgroundImage:
            "radial-gradient(circle at 0% 100%, rgba(167,139,250,0.30), transparent 55%)",
        }}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: 0.85,
            fontWeight: 800,
            letterSpacing: "-0.06em",
          }}
        >
          <div style={{ display: "flex", fontSize: 56 }}>devpill</div>
          <div
            style={{ display: "flex", alignItems: "flex-end", fontSize: 56 }}
          >
            agency
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                backgroundColor: "#59c1ff",
                marginLeft: 8,
                marginBottom: 10,
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 92,
            fontWeight: 600,
            letterSpacing: "-0.045em",
            lineHeight: 0.98,
          }}
        >
          <div style={{ display: "flex" }}>The IT consultancy</div>
          <div style={{ display: "flex", color: "#cbd5e1" }}>
            that delivers more
          </div>
          <div
            style={{
              display: "flex",
              backgroundImage:
                "linear-gradient(120deg,#59c1ff,#a78bfa,#34d399)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            for less.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#94a3b8",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                backgroundColor: "#34d399",
                marginRight: 12,
              }}
            />
            Open for clients · 2026
          </div>
          <div style={{ display: "flex" }}>Copenhagen · Remote EU</div>
        </div>
      </div>
    </div>,
    { ...size },
  );
}
