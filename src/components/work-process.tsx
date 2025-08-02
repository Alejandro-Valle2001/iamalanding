"use client";

import { motion } from "motion/react";
import { Icons } from "@/components/icons";

const processSteps = [
  {
    step: "01",
    title: "Descubrimiento",
    duration: "30 minutos",
    description: "Empezamos con un diálogo sencillo. Te pediremos completar un breve cuestionario y nos reuniremos para entender tus objetivos de negocio, público objetivo y puntos de dolor actuales.",
    icon: Icons.click
  },
  {
    step: "02", 
    title: "Desarrollo",
    duration: "1-3 días",
    description: "Nuestro equipo IAMA diseña y construye tu solución digital empleando nuestra plataforma de IA que automatiza el 90% del desarrollo. En 24-72 horas tendrás un primer prototipo funcional.",
    icon: Icons.gauge
  },
  {
    step: "03",
    title: "Lanzamiento y Entrenamiento", 
    duration: "1 día",
    description: "Implementamos la solución en producción y te asistimos en el lanzamiento oficial. Incluimos una sesión de capacitación personalizada de 30 minutos vía videollamada.",
    icon: Icons.stars
  },
  {
    step: "04",
    title: "Soporte Continuo",
    duration: "Ilimitado", 
    description: "Brindamos soporte dedicado 24/7 para resolver cualquier duda. Monitoreamos tus sistemas en tiempo real y realizamos revisiones trimestrales de estrategia contigo.",
    icon: Icons.gauge
  }
];

const comparisons = [
  {
    aspect: "Velocidad de Entrega",
    traditional: "4-8 semanas por proyecto",
    iama: "1-8 días – Soluciones rápidas"
  },
  {
    aspect: "Costo Inicial", 
    traditional: "aproximadamente S/ 5,000+ solo el sitio web",
    iama: "Desde S/ 550 todo incluido"
  },
  {
    aspect: "Tecnología",
    traditional: "Desarrollo manual propenso a errores",
    iama: "Plataforma IA propia con precisión y rapidez"
  },
  {
    aspect: "Enfoque Local",
    traditional: "Plantillas genéricas globales", 
    iama: "Soluciones Perú-specific adaptadas a mercado local"
  },
  {
    aspect: "Soporte & Mantenimiento",
    traditional: "Costos extra por soporte limitado",
    iama: "Soporte 24/7 incluido, mantenimiento continuo"
  },
  {
    aspect: "Personalización",
    traditional: "Plantillas genéricas",
    iama: "Soluciones para peruanos"
  }
];

export function WorkProcess() {
  return (
    <section className="py-20 md:py-24" id="proceso">
      <div className="container">
        {/* Proceso de Trabajo */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter mb-6">
            Proceso de Trabajo Sin Complicaciones
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto text-center tracking-tight">
            Nuestro proceso optimizado garantiza resultados rápidos sin la complejidad de las agencias tradicionales.
          </p>
        </div>

        {/* Timeline de proceso */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* Línea conectora */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-[#8c44ff] via-[#8c44ff] to-transparent hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Contenido */}
                <div className="flex-1 text-center md:text-left">
                  <div className="border border-muted rounded-xl p-6 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.1),black)]">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                      <div className="size-10 border border-muted rounded-lg inline-flex items-center justify-center">
                        <step.icon className="size-5" />
                      </div>
                      <div>
                        <div className="text-sm text-[#8c44ff] font-semibold">Paso {step.step}</div>
                        <div className="text-lg font-semibold text-white">{step.title}</div>
                      </div>
                    </div>
                    <div className="text-sm text-white/50 mb-3">Duración: {step.duration}</div>
                    <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Círculo central */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="size-12 bg-[#8c44ff] rounded-full border-4 border-black flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                </div>

                {/* Espacio para balancear */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Por Qué Elegir IAMA - Comparativa */}
        <div className="mt-20" id="ventajas">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-medium text-center tracking-tighter mb-6">
              Por Qué Elegir IAMA
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto text-center tracking-tight">
              Más rápido, más económico y más efectivo que las agencias tradicionales.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-muted rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.2),black)]">
                  <th className="text-left p-4 border-b border-muted text-white font-semibold">Aspecto</th>
                  <th className="text-left p-4 border-b border-muted text-white font-semibold">Agencias Tradicionales</th>
                  <th className="text-left p-4 border-b border-muted text-[#8c44ff] font-semibold">IAMA</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comparison, index) => (
                  <tr key={index} className="border-b border-muted last:border-b-0">
                    <td className="p-4 text-white font-medium">{comparison.aspect}</td>
                    <td className="p-4 text-white/60 text-sm">{comparison.traditional}</td>
                    <td className="p-4 text-white text-sm font-medium">{comparison.iama}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
