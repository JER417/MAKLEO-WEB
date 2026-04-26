import { ImageResponse } from "next/og"

export const alt = "MAKLEO — Óptica Industrial y Distribuidora"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "1200px",
          height: "630px",
          background: "#1b2738",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "500px",
            background: "radial-gradient(ellipse at top, rgba(17,81,167,0.35) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            background: "radial-gradient(ellipse, rgba(9,194,175,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            position: "relative",
            zIndex: 1,
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 20px",
              borderRadius: "999px",
              border: "1px solid rgba(9,194,175,0.4)",
              background: "rgba(9,194,175,0.08)",
            }}
          >
            <span style={{ color: "#09C2AF", fontSize: "13px", fontWeight: 700, letterSpacing: "0.12em" }}>
              ÓPTICA INDUSTRIAL · MÉXICO
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "96px",
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-0.04em",
              lineHeight: 0.9,
              display: "flex",
            }}
          >
            MAKLEO
          </div>

          {/* Teal line */}
          <div
            style={{
              width: "80px",
              height: "3px",
              background: "linear-gradient(90deg, #09C2AF, #1EEAF9)",
              borderRadius: "2px",
              display: "flex",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: "26px",
              color: "#a0b4c8",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              maxWidth: "780px",
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            Lentes de seguridad certificados ANSI/ISEA Z87.1-2020 y NOM-017-STPS-2024
          </div>

          {/* Certifications row */}
          <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
            {["ANSI Z87.1", "NOM-017", "CE EN166"].map((cert) => (
              <div
                key={cert}
                style={{
                  padding: "6px 16px",
                  borderRadius: "8px",
                  background: "rgba(17,81,167,0.25)",
                  border: "1px solid rgba(17,81,167,0.4)",
                  color: "#7aabcc",
                  fontSize: "15px",
                  fontWeight: 600,
                  display: "flex",
                }}
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, transparent, #09C2AF 30%, #1EEAF9 60%, transparent)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  )
}
