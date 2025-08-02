"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Icons } from "@/components/icons";

const faqs = [
  {
    question: "¿Por qué nuestro servicio es más económico que el de los competidores?",
    answer: "Aplicamos IA en todo el proceso, lo que reduce el tiempo y costo de desarrollo en aproximadamente 80%. Esos ahorros los trasladamos a ti. En lugar de pagar por horas de programación manual, pagas por soluciones ya probadas y automatizadas."
  },
  {
    question: "¿Cómo logran entregar proyectos tan rápido?",
    answer: "Tenemos una plataforma propia de desarrollo con IA que automatiza el 90% de las tareas técnicas repetitivas. Nuestros expertos han pre-construido módulos optimizados para el mercado local."
  },
  {
    question: "¿Ofrecen soporte para usuarios no técnicos?",
    answer: "Sí, y es una de nuestras prioridades. Ofrecemos soporte en español 24/7, tutoriales en video y guías paso a paso. Durante el entrenamiento inicial te explicamos todo de manera sencilla."
  },
  {
    question: "¿Qué garantías ofrecen?",
    answer: "Garantía de satisfacción y tiempo: si no entregamos en el plazo acordado, obtienes la devolución completa. 30 días de ajustes gratuitos post-lanzamiento. Garantía de resultados: acordamos contigo indicadores de desempeño y los monitoreamos juntos."
  },
  {
    question: "¿Trabajan con empresas de cualquier tamaño o rubro?",
    answer: "Atendemos desde pequeñas empresas familiares hasta medianas empresas en crecimiento. Hemos trabajado con comercios minoristas, restaurantes, servicios profesionales, y más."
  }
];

const additionalServices = [
  {
    name: "Reportes Competitivos",
    price: "S/ 299/mes",
    description: "Análisis automático de precios y engagement versus competidores",
    icon: Icons.gauge
  },
  {
    name: "Dashboards de Salud",
    price: "S/ 349/mes", 
    description: "Alertas predictivas de inventario más tendencias locales",
    icon: Icons.stars
  },
  {
    name: "Automatización Marketing",
    price: "S/ 499/mes",
    description: "Campañas personalizadas por comportamiento de clientes",
    icon: Icons.click
  },
  {
    name: "Soporte SUNAT",
    price: "S/ 199/mes",
    description: "Alertas de impuestos más generación de facturas electrónicas",
    icon: Icons.gauge
  },
  {
    name: "Chatbot IA Avanzado",
    price: "Desde S/ 150/mes",
    description: "Asistente multicanal personalizado",
    icon: Icons.stars
  },
  {
    name: "Sistema E-commerce Standalone",
    price: "Desde S/ 900",
    description: "Tienda online completa con pagos locales",
    icon: Icons.click
  }
];

const commitments = [
  {
    title: "Entrega Garantizada",
    description: "Tu proyecto estará listo en el tiempo prometido o te devolvemos tu dinero",
    icon: Icons.click
  },
  {
    title: "Entrenamiento Incluido",
    description: "Capacitación completa en español, material de apoyo, y acompañamiento post-lanzamiento",
    icon: Icons.gauge
  },
  {
    title: "Resultados Medibles",
    description: "ROI tangible desde la primera semana con métricas claras",
    icon: Icons.stars
  },
  {
    title: "Soporte 24/7",
    description: "En español, con expertise local",
    icon: Icons.gauge
  },
  {
    title: "Cumplimiento SUNAT",
    description: "Integrado en todas nuestras soluciones",
    icon: Icons.stars
  }
];

interface FAQItemProps {
  faq: typeof faqs[0];
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-muted rounded-xl overflow-hidden bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.05),black)]">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <span className="font-medium text-white pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <Icons.click className="size-5 text-[#8c44ff]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-white/70 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQServices() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        {/* Servicios Adicionales */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-medium text-center tracking-tighter mb-6">
              Servicios Adicionales & Add-Ons
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto text-center tracking-tight">
              Expande las capacidades de tu solución digital con nuestros servicios especializados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-muted rounded-xl p-6 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.1),black)] hover:bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.15),black)] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 border border-muted rounded-lg inline-flex items-center justify-center">
                    <service.icon className="size-5" />
                  </div>
                  <div className="text-lg font-semibold text-white">{service.name}</div>
                </div>
                <div className="text-2xl font-bold text-[#8c44ff] mb-3">{service.price}</div>
                <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 border border-muted rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.1),black)]">
              <span className="text-white font-medium">Condiciones de Pago:</span>
              <span className="text-white/70 text-sm">50% anticipo + 50% al finalizar. Suscripción mensual a mes vencido.</span>
            </div>
            <div className="mt-3">
              <span className="text-[#8c44ff] font-semibold">¡Ahorra 10% con pagos adelantados de 6 meses!</span>
            </div>
          </div>
        </div>

        {/* Preguntas Frecuentes */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-medium text-center tracking-tighter mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto text-center tracking-tight">
              Resolvemos las dudas más comunes sobre nuestros servicios y proceso de trabajo.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>

        {/* Nuestro Compromiso */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-medium text-center tracking-tighter mb-6">
              Nuestro Compromiso Contigo
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto text-center tracking-tight">
              Garantías que respaldan la calidad y efectividad de nuestro trabajo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 border border-muted rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.1),black)]"
              >
                <div className="size-12 border border-muted rounded-lg inline-flex items-center justify-center mb-4 mx-auto">
                  <commitment.icon className="size-6 text-[#8c44ff]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{commitment.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{commitment.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Garantías destacadas */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 border border-[#8c44ff] rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.2),black)]">
              <div className="text-[#8c44ff] font-bold text-lg">ROI desde la Semana 1</div>
              <div className="text-white/60 text-xs mt-1">o ajustamos tu solución</div>
            </div>
            <div className="text-center p-4 border border-[#8c44ff] rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.2),black)]">
              <div className="text-[#8c44ff] font-bold text-lg">Soporte 24/7</div>
              <div className="text-white/60 text-xs mt-1">En español</div>
            </div>
            <div className="text-center p-4 border border-[#8c44ff] rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.2),black)]">
              <div className="text-[#8c44ff] font-bold text-lg">Cumplimiento SUNAT</div>
              <div className="text-white/60 text-xs mt-1">Integrado</div>
            </div>
            <div className="text-center p-4 border border-[#8c44ff] rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.2),black)]">
              <div className="text-[#8c44ff] font-bold text-lg">Consulta Gratuita</div>
              <div className="text-white/60 text-xs mt-1">100% sin costo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
