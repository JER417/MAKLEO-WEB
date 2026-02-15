import React from "react"
import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 border-t border-border" style={{ backgroundColor: "#334052" }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8" style={{ color: "#09C2AF" }} />
              <span className="text-2xl font-bold text-white">MAKLEO</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Óptica Industrial y Distribuidora. El mejor trato, la mejor propuesta.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4">Productos</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#productos" className="hover:text-white transition-colors">
                  Lentes de Seguridad Industrial
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">
                  Goggles de Protección
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">
                  Lentes de Prescripción
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Examen de la Vista
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Lentes de Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Control de Ambliopía
                </a>
              </li>
              <li>
                <a href="#b2b" className="hover:text-white transition-colors">
                  Soluciones Corporativas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Av. Casa Blanca #401 Local #7-A</li>
              <li>Col. Misión de Casa Blanca</li>
              <li>San Nicolás de los Garza, N.L.</li>
              <li>
                <a href="mailto:contacto@makleo.com.mx" className="hover:text-white transition-colors">
                  contacto@makleo.com.mx
                </a>
              </li>
              <li>
                <a href="tel:+528114965709" className="hover:text-white transition-colors">
                  8113780983
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2026 MAKLEO. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
