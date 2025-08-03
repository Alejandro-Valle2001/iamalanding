"use client";

import BackgroundStars from "@/assets/stars.png";
import {motion, useScroll, useTransform} from "motion/react";
import {useRef} from "react";
import {ActionButton} from "./action-button";
import Image from "next/image";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: [`start end`, "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      animate={{backgroundPositionX: BackgroundStars.width}}
      transition={{duration: 120, repeat: Infinity, ease: "linear"}}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${BackgroundStars.src})`,
        backgroundPositionY,
      }}
      ref={sectionRef}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]"/>
      {/* Llama Astronauta */}
      <Image 
        src="/llamaastro.png" 
        alt="Llama Astronauta" 
        width={384}
        height={384}
        className="absolute size-64 md:size-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain z-10"
      />
      {/* Rings + Mini planets Logic */}
      <motion.div
        animate={{rotate: "1turn"}}
        transition={{duration: 60, repeat: Infinity, ease: "linear"}}
        className="absolute size-[344px] md:size-[580px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute size-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"/>
        <div className="absolute size-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
        <div
          className="absolute size-5 border border-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
          <div className="size-2 bg-white rounded-full"/>
        </div>
      </motion.div>
      <motion.div
        animate={{rotate: "-1turn"}}
        transition={{duration: 60, repeat: Infinity, ease: "linear"}}
        className="absolute size-[444px] md:size-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
      />
      <motion.div
        animate={{rotate: "1turn"}}
        transition={{duration: 90, repeat: Infinity, ease: "linear"}}
        className="absolute size-[544px] md:size-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute size-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"/>
        <div className="absolute size-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"/>
      </motion.div>
      {/* Hero Section Content Logic */}
      <div className="container relative mt-16">
        <h1
          className="text-8xl md:text-[168px] md:leading-none font-semibold bg-white tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,0.5))] bg-clip-text text-transparent text-center relative z-0 -mt-12 md:-mt-20">
          IAMA
        </h1>
        <div className="max-w-4xl mx-auto mt-36 md:mt-44 relative z-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-4">
            Transformación digital con IA
          </h2>
          <p className="text-lg md:text-xl text-white/90 text-center font-medium mb-6">
          Llevamos tu negocio al mundo digital en menos de 8 días para que incrementes tus ventas y escales tu empresa.          </p>
        </div>
        <div className="flex justify-center mt-8 relative z-20">
          <ActionButton label="Consulta gratuita"/>
        </div>
      </div>
    </motion.section>
  );
}
