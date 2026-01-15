export function DifferentiatorBanner() {
  return (
    <section className="py-16 relative overflow-hidden" style={{ backgroundColor: "#115796" }}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #1EEAF9 0px, #1EEAF9 1px, transparent 1px, transparent 20px)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div
            className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-2"
            style={{ backgroundColor: "#09C2AF", color: "#FFFFFF" }}
          >
            Único en México
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white text-balance leading-tight">
            La única distribuidora especializada en óptica industrial del país
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty leading-relaxed">
            Experiencia exclusiva, catálogo especializado y asesoría técnica profesional que no encontrarás en ningún
            otro lugar.
          </p>
        </div>
      </div>
    </section>
  )
}
