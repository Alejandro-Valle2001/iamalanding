"use client";

import BackgroundStars from "@/assets/stars.png";
import {motion, useScroll, useTransform} from "motion/react";
import {useRef, useState} from "react";
import {ActionButton} from "./action-button";

interface ContactFormData {
  nombre: string;
  empresa: string;
  telefono: string;
  paquete: string;
}

export function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    empresa: '',
    telefono: '',
    paquete: 'Starter Pack'
  });
  
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: [`start end`, "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se puede integrar con un servicio de email o CRM
    console.log('Formulario enviado:', formData);
    alert('¡Gracias! Te contactaremos en las próximas 24 horas.');
  };

  return (
    <motion.section
      animate={{backgroundPositionX: BackgroundStars.width}}
      transition={{duration: 120, repeat: Infinity, ease: "linear"}}
      className="py-20 md:py-24 relative overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${BackgroundStars.src})`,
        backgroundPositionY,
      }}
      ref={sectionRef}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]"/>
      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          {/* Título principal */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter mb-6">
              Comienza Hoy Mismo
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-medium mb-4">
              ¿Listo para transformar tu empresa? Agenda tu consulta gratuita y descubre cómo podemos digitalizar tu negocio en días, no meses.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8c44ff] rounded-full text-white font-semibold text-sm">
              ✨ Oferta Especial: Consulta inicial GRATUITA más presupuesto personalizado en 24h
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Formulario de contacto */}
            <div className="border border-muted rounded-xl p-6 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.1),black)]">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                Solicita Tu Demo Gratuita
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Nombre *</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-muted rounded-lg bg-black/50 text-white placeholder-white/40 focus:border-[#8c44ff] focus:outline-none"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Empresa *</label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-muted rounded-lg bg-black/50 text-white placeholder-white/40 focus:border-[#8c44ff] focus:outline-none"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Teléfono *</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-muted rounded-lg bg-black/50 text-white placeholder-white/40 focus:border-[#8c44ff] focus:outline-none"
                    placeholder="+51 999 999 999"
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Paquete de Interés</label>
                  <select
                    name="paquete"
                    value={formData.paquete}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-muted rounded-lg bg-black/50 text-white focus:border-[#8c44ff] focus:outline-none"
                  >
                    <option value="Starter Pack">Starter Pack - S/ 550</option>
                    <option value="Growth Pack">Growth Pack - S/ 1,295</option>
                    <option value="Premium Pack">Premium Pack - S/ 1,850</option>
                    <option value="Servicios Adicionales">Servicios Adicionales</option>
                    <option value="Consulta General">Consulta General</option>
                  </select>
                </div>
                <div className="pt-2">
                  <ActionButton label="Solicitar Demo Gratuita" />
                </div>
              </form>
            </div>

            {/* Información de contacto */}
            <div className="space-y-6">
              <div className="border border-muted rounded-xl p-6 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.05),black)]">
                <h3 className="text-xl font-semibold text-white mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8 border border-muted rounded-lg inline-flex items-center justify-center">
                      <span className="text-[#8c44ff] text-sm">✉</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-white/60 text-sm">iama@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="size-8 border border-muted rounded-lg inline-flex items-center justify-center">
                      <span className="text-[#8c44ff] text-sm">📱</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">WhatsApp</div>
                      <div className="text-white/60 text-sm">+51 944 123 456</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="size-8 border border-muted rounded-lg inline-flex items-center justify-center">
                      <span className="text-[#8c44ff] text-sm">📍</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Ubicación</div>
                      <div className="text-white/60 text-sm">Lima, Perú</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="size-8 border border-muted rounded-lg inline-flex items-center justify-center">
                      <span className="text-[#8c44ff] text-sm">🕒</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">Horario</div>
                      <div className="text-white/60 text-sm">Lun-Vie 9AM-6PM, Sáb 9AM-1PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mensaje final con garantías */}
              <div className="text-center p-6 border border-[#8c44ff] rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.2),black)]">
                <div className="text-2xl font-bold text-white mb-2">
                  &ldquo;Transformamos tu negocio con tecnología hecha en Perú, para peruanos&rdquo;
                </div>
                <div className="text-white/60 text-sm mt-4">
                  © 2025 IAMA - Lima, Perú | Diseñado con ❤️ para potenciar PYMEs peruanos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
