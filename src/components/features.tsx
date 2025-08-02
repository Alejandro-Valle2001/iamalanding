"use client";

import ProductImage from "@/assets/product-image.png";
import {animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition,} from "motion/react";
import {ComponentPropsWithoutRef, useEffect, useRef, useState} from "react";
import {Icons} from "@/components/icons";

const stats = [
  {
    icon: Icons.click,
    title: "Tiempo de Entrega: 1-8 días",
    subtitle: "vs 4-8 semanas en agencias tradicionales",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: Icons.gauge,
    title: "Desde S/ 550 inversión inicial",
    subtitle: "vs S/ 5,000+ que cobran otras agencias",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: Icons.stars,
    title: "30-40% incremento en ventas",
    subtitle: "promedio observado en el primer mes",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const packages = [
  {
    name: "STARTER PACK",
    subtitle: "Negocios sin Presencia Digital",
    price: "S/ 550",
    monthly: "S/ 185/mes",
    ideal: "60% de PYMEs peruanas",
    benefits: [
      "Hasta 30% más conversión de ventas",
      "70% menos oportunidades perdidas",
      "80% más clientes nuevos en 30 días"
    ],
    services: [
      "Sitio web básico hasta 5 páginas",
      "Google Business Profile",
      "Configuración SEO básica",
      "Integración WhatsApp Business",
      "Rebranding redes sociales"
    ]
  },
  {
    name: "GROWTH PACK",
    subtitle: "Presencia Digital Básica",
    price: "S/ 1,295",
    monthly: "S/ 555/mes",
    ideal: "30% de PYMEs peruanas",
    benefits: [
      "50% más engagement en línea",
      "40% más leads calificados",
      "50% reducción en leads perdidos"
    ],
    services: [
      "Todo lo del Starter Pack",
      "CRM integrado",
      "Chatbot inteligente 24/7",
      "Sistema de reservas online",
      "Dashboard de analytics"
    ]
  },
  {
    name: "PREMIUM PACK",
    subtitle: "Liderar Su Sector",
    price: "S/ 1,850",
    monthly: "S/ 1,110/mes",
    ideal: "10% de PYMEs peruanas",
    benefits: [
      "80% más ventas online",
      "60% mejora en retención",
      "60% ahorro en tiempo operativo",
      "35% crecimiento en ventas online"
    ],
    services: [
      "Todo lo del Growth Pack",
      "E-commerce completo",
      "CRM avanzado",
      "Automatización avanzada",
      "Soporte prioritario 24/7"
    ]
  }
];

type FeatureTabProps = (typeof stats)[number] & ComponentPropsWithoutRef<"div"> & { selected: boolean }

const FeatureTab = (props: FeatureTabProps) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;

    xPercentage.set(0);
    yPercentage.set(0);
    const {height, width} = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected]);

  return (
    <div
      className="border border-muted flex items-center p-2.5 gap-2.5 rounded-xl relative cursor-pointer hover:bg-muted/30"
      ref={tabRef}
      onClick={props.onClick}
    >
      {props.selected && (
        <motion.div
          style={{maskImage}}
          className="absolute inset-0 -m-px border border-[#A369FF] rounded-xl"
        />
      )}
      <div className="size-12 border border-muted rounded-lg inline-flex items-center justify-center">
        <props.icon className="size-5"/>
      </div>
      <div className="flex-1">
        <div className="font-medium text-sm">{props.title}</div>
        <div className="text-xs text-white/60 mt-1">{props.subtitle}</div>
      </div>
      {props.isNew && (
        <div className="text-xs rounded-full text-white px-2 py-0.5 bg-[#8c44ff] font-semibold">
          Nuevo
        </div>
      )}
    </div>
  );
};

export function Features() {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(stats[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(stats[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(stats[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };
    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, stats[index].backgroundSizeX],
      animateOptions
    );
    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), stats[index].backgroundPositionX],
      animateOptions
    );
    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), stats[index].backgroundPositionY],
      animateOptions
    );
  };

  return (
    <section className="py-20 md:py-24" id="estadisticas">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Estadísticas Clave Que Nos Respaldan
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto text-center tracking-tight mt-5">
          Resultados comprobados que demuestran por qué las empresas peruanas eligen IAMA para su transformación digital.
        </p>
        <div className="mt-10 grid lg:grid-cols-3 gap-3">
          {stats.map((stat, index) => (
            <FeatureTab
              {...stat}
              key={stat.title}
              onClick={() => handleSelectTab(index)}
              selected={selectedTab === index}
            />
          ))}
        </div>
        
        {/* Estadísticas adicionales */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 border border-muted rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.05),black)]">
            <div className="text-3xl font-bold text-[#8c44ff] mb-2">80%</div>
            <div className="text-sm text-white/70">Reducción en tiempo de desarrollo</div>
          </div>
          <div className="text-center p-6 border border-muted rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.05),black)]">
            <div className="text-3xl font-bold text-[#8c44ff] mb-2">90%</div>
            <div className="text-sm text-white/70">Automatización del proceso</div>
          </div>
          <div className="text-center p-6 border border-muted rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.05),black)]">
            <div className="text-3xl font-bold text-[#8c44ff] mb-2">70%</div>
            <div className="text-sm text-white/70">Reducción de leads perdidos</div>
          </div>
        </div>
        <motion.div className="border border-muted rounded-xl p-2.5 mt-3">
          <div className="aspect-video bg-cover border border-muted rounded-lg"
            style={{
              backgroundPosition: backgroundPosition.get(),
              backgroundSize: backgroundSize.get(),
              backgroundImage: `url(${ProductImage.src})`,
            }}
          ></div>
        </motion.div>
        
        {/* Paquetes de Servicios */}
        <div className="mt-20" id="paquetes">
          <h2 className="text-4xl md:text-5xl font-medium text-center tracking-tighter mb-6">
            Paquetes de Servicios & Impacto Medible
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto text-center tracking-tight mb-12">
            Soluciones personalizadas para cada etapa de tu transformación digital. Cada paquete incluye implementación rápida, soporte continuo y mejoras mensurables desde el primer día.
          </p>
          <div className="grid lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div key={index} className="border border-muted rounded-xl p-6 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.1),black)] h-full">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{pkg.subtitle}</p>
                  <p className="text-xs text-white/50 mb-4">Ideal para: {pkg.ideal}</p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{pkg.price}</div>
                    <div className="text-sm text-white/60">{pkg.monthly}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Impacto Garantizado:</h4>
                  <ul className="space-y-2">
                    {pkg.benefits.map((benefit, i) => (
                      <li key={i} className="text-xs text-white/70 flex items-start">
                        <span className="text-[#8c44ff] mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Servicios Incluidos:</h4>
                  <ul className="space-y-2">
                    {pkg.services.map((service, i) => (
                      <li key={i} className="text-xs text-white/60 flex items-start">
                        <span className="text-white/40 mr-2">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
