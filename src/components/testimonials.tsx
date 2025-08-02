"use client"

import Avatar1 from "@/assets/avatars/avatar-1.png";
import Avatar2 from "@/assets/avatars/avatar-2.png";
import Avatar3 from "@/assets/avatars/avatar-3.png";
import Avatar4 from "@/assets/avatars/avatar-4.png";
import {motion} from "motion/react";
import Image, {StaticImageData} from "next/image";

const TESTIMONIALS = [
  {
    text: "En solo 3 días tenía mi tienda online funcionando. Las ventas aumentaron un 40% en el primer mes y ahora puedo atender pedidos incluso fuera de horario. ¡Superó mis expectativas!",
    name: "María Gonzales",
    position: "Boutique Moda Lima - Cliente Growth Pack",
    avatarImg: Avatar1,
  },
  {
    text: "El soporte en español y la capacitación fueron fundamentales. No soy experto en tecnología y aun así en una semana ya dominaba mi nueva plataforma. Ahora gestiono todo sin problemas y he ahorrado muchísimo tiempo.",
    name: "Carlos Mendoza",
    position: "Servicios Técnicos CMR - Cliente Premium Pack",
    avatarImg: Avatar2,
  },
  {
    text: "El chatbot AI redujo consultas no atendidas en 70%. ¡Invaluable para mi negocio!",
    name: "Ana Torres",
    position: "Clínica Dental San Borja - Cliente Premium Pack",
    avatarImg: Avatar3,
  },
  {
    text: "IAMA transformó completamente nuestra presencia digital. Pasamos de ser invisibles online a liderar nuestro sector local en menos de un mes.",
    name: "Roberto Silva",
    position: "Restaurante Don Roberto - Cliente Growth Pack",
    avatarImg: Avatar4,
  },
] satisfies Array<{
  text: string,
  name: string,
  position: string,
  avatarImg: StaticImageData
}>

export function Testimonials() {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">Lo Que Dicen Nuestros Clientes</h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto text-center tracking-tight mt-5">
          Testimonios reales de empresarios peruanos que han transformado sus negocios con IAMA.
        </p>
        <div className="flex overflow-hidden mt-10 mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{x: '-50%'}}
            animate={{x: '0'}}
            transition={{
              repeat: Infinity,
              duration: 50,
              ease: "linear",
            }}
            className="flex flex-none gap-5"
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
              <div
                key={index}
                className="border border-muted p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.3),black)] max-w-xs md:max-w-md flex-none"
              >
                <p className="text-lg md:text-2xl tracking-tight">{testimonial.text}</p>
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light after:rounded-lg before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                    <Image
                      src={testimonial.avatarImg}
                      alt={testimonial.name}
                      className="size-11 rounded-lg grayscale"
                    />
                  </div>
                  <div>
                    <p>{testimonial.name}</p>
                    <p className="text-white/50 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
