"use client";

import { motion } from "motion/react";
import { Icons } from "@/components/icons";

const processSteps = [
  {
    step: "01",
    title: "Descubrimiento",
    duration: "30 minutos",
    description: "Comenzamos con una llamada de 30 minutos donde analizamos tu negocio actual. Completarás un cuestionario estratégico para identificar oportunidades de crecimiento y definir objetivos claros y medibles.",
    icon: Icons.click
  },
  {
    step: "02", 
    title: "Desarrollo",
    duration: "2 a 7 días",
    description: "Nuestro equipo especializado diseña y construye tu solución digital usando IA avanzada que automatiza el 100% del proceso. Tendrás un prototipo funcional listo para probar en un par de días.",
    icon: Icons.gauge
  },
  {
    step: "03",
    title: "Lanzamiento y Entrenamiento", 
    duration: "1 día",
    description: "Ponemos tu solución en vivo y te acompañamos en cada detalle del lanzamiento. Recibes capacitación personalizada de 30 minutos para que domines todas las funciones desde el primer día.",
    icon: Icons.stars
  },
  {
    step: "04",
    title: "Soporte Continuo",
    duration: "Ilimitado", 
    description: "Soporte dedicado 24/7 para que nunca te quedes solo. Monitoreamos tu rendimiento en tiempo real y realizamos revisiones estratégicas para optimizar constantemente tus resultados.",
    icon: Icons.gauge
  }
];

const comparisons = [
  {
    aspect: "Velocidad",
    traditional: "4 a 8 semanas por proyecto",
    iama: "Listo en máximo 8 días"
  },
  {
    aspect: "Inversión", 
    traditional: "Mínimo S/ 5,000 solo por el sitio web",
    iama: "Solo S/ 550 por la solución completa"
  },
  {
    aspect: "Tecnología",
    traditional: "Desarrollo manual propenso a errores",
    iama: "Inteligencia Artificial que automatiza 100% del proceso"
  },
  {
    aspect: "Enfoque",
    traditional: "Plantillas globales genéricas", 
    iama: "Diseñado específicamente para el mercado peruano"
  },
  {
    aspect: "Soporte",
    traditional: "Te cobran extra por cada modificación",
    iama: "Soporte garantizado 24/7"
  },
  {
    aspect: "Personalización",
    traditional: "Soluciones rígidas que no se adaptan",
    iama: "Completamente flexible según tu negocio"
  }
];

export function WorkProcess() {
  return (
    <section className="py-20 md:py-24" id="proceso">
      <div className="container">
        {/* Proceso de Trabajo */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter mb-6">
            Tu transformación digital en 4 pasos
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto text-center tracking-tight">
            Metodología probada que entrega resultados en días, no meses. Sin reuniones interminables ni complicaciones innecesarias.
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
              IAMA vs. Agencias tradicionales
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto text-center tracking-tight">
              La nueva generación de servicios digitales: resultados más rápidos a una fracción del costo.
            </p>
          </div>

          <div className="overflow-x-auto max-w-4xl mx-auto">
            <table className="w-full border-collapse border border-muted rounded-xl overflow-hidden table-fixed">
              <thead>
                <tr className="bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.2),black)]">
                  <th className="text-left p-3 border-b border-muted text-white font-semibold text-sm w-1/5">Aspecto</th>
                  <th className="text-left p-3 border-b border-muted text-[#8c44ff] font-semibold text-sm w-2/5">IAMA</th>
                  <th className="text-left p-3 border-b border-muted text-white font-semibold text-sm w-2/5">Agencias tradicionales</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comparison, index) => (
                  <tr key={index} className="border-b border-muted last:border-b-0">
                    <td className="p-3 text-white font-medium text-sm">{comparison.aspect}</td>
                    <td className="p-3 text-white text-xs font-medium">{comparison.iama}</td>
                    <td className="p-3 text-white/60 text-xs">{comparison.traditional}</td>
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
