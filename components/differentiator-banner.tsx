"use client"

export function DifferentiatorBanner() {
  return (
    <section className="relative py-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1151A7 0%, #2c3d50 60%, #22303f 100%)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 20px)",
      }} />
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at right center, rgba(9,194,175,0.1) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(9,194,175,0.15)", color: "#09C2AF", border: "1px solid rgba(9,194,175,0.25)" }}>
              Única en México
            </div>
            <h2 className="reveal" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(36px, 5vw, 56px)", color: "#FFFFFF", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Graduación óptica<br />
              <span style={{ color: "#09C2AF" }}>dentro del EPP certificado.</span>
            </h2>
          </div>

          <div className="reveal reveal-right grid grid-cols-2 gap-4 max-w-sm w-full">
            {[
              { n: "ANSI/ISEA", sub: "Z87.1-2020" },
              { n: "NOM-017",   sub: "STPS-2024" },
              { n: "CE",        sub: "EN166:2002" },
              { n: "CSA",       sub: "Z94.3" },
            ].map((c) => (
              <div key={c.n} className="px-4 py-3 rounded-xl"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "17px", color: "#FFFFFF" }}>{c.n}</div>
                <div style={{ fontSize: "11px", color: "#a0b4c8", marginTop: "2px" }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}