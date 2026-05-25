import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        fontWeight: 800,
        letterSpacing: "-0.06em",
        lineHeight: 0.9,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          backgroundImage:
            "radial-gradient(circle at 100% 0%, rgba(89,193,255,0.45), transparent 60%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          backgroundImage:
            "radial-gradient(circle at 0% 100%, rgba(167,139,250,0.35), transparent 60%)",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 24px",
        }}
      >
        <div style={{ display: "flex", fontSize: 54 }}>devpill</div>
        <div style={{ display: "flex", alignItems: "flex-end", fontSize: 54 }}>
          agency
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#59c1ff",
              marginLeft: 6,
              marginBottom: 8,
            }}
          />
        </div>
      </div>
    </div>,
    { ...size },
  );
}
