import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#05060a",
        color: "white",
        fontFamily: "system-ui",
        fontWeight: 800,
        fontSize: 22,
        letterSpacing: "-0.06em",
        borderRadius: 6,
      }}
    >
      d
      <div
        style={{
          width: 5,
          height: 5,
          borderRadius: 999,
          backgroundColor: "#59c1ff",
          marginLeft: 1,
          marginTop: 10,
        }}
      />
    </div>,
    { ...size },
  );
}
