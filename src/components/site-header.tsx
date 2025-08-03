"use client"

import Link from "next/link";
import {CodeXml, Feather, MenuIcon, Newspaper, Wallet2} from "lucide-react";
import {Drawer, DrawerContent, DrawerTrigger} from "@/components/ui/drawer";
import {ActionButton} from "@/components/action-button";

import {useState} from "react";
import Image from "next/image";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="py-4 border-b max-md:backdrop-blur-sm md:border-none sticky top-0 z-10">
      <div className="container max-md:px-4">
        <div
          className="flex items-center justify-between md:border md:p-2.5 md:rounded-xl max-w-2xl mx-auto md:backdrop-blur-sm ">
          <Link href="/">
            <div className="border size-10 rounded-lg inline-flex items-center justify-center overflow-hidden">
              <Image 
                src="/logoiama.png" 
                alt="IAMA Logo" 
                width={32} 
                height={32}
                className="object-contain"
              />
            </div>
          </Link>
          <section className="max-md:hidden">
            <nav className="flex gap-8 items-center text-sm">
              <Link href="#estadisticas" className="text-white/70 hover:text-white transition">Características</Link>
              <Link href="#paquetes" className="text-white/70 hover:text-white transition">Planes</Link>
              <Link href="#proceso" className="text-white/70 hover:text-white transition">Proceso</Link>
              <Link href="#ventajas" className="text-white/70 hover:text-white transition">Ventajas</Link>
            </nav>
          </section>
          <section className="flex max-md:gap-4 items-center">
            <ActionButton label="Consulta gratuita"/>
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger>
                <MenuIcon className="size-9 md:hidden hover:text-white/70 transition"/>
              </DrawerTrigger>
              <DrawerContent className="p-8">
                <div className="inline-flex items-center center gap-3 mt-8">
                  <div className="border size-8 rounded-lg inline-flex items-center justify-center overflow-hidden">
                    <Image 
                      src="/logoiama.png" 
                      alt="IAMA Logo" 
                      width={24} 
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <p className="font-bold">IAMA</p>
                </div>
                <div className="mt-8 mb-4">
                  <nav className="grid gap-4 items-center text-lg">
                    <Link href="#estadisticas" className="flex items-center gap-3 text-white/70 hover:text-white transition" onClick={() => setIsOpen(false)}>
                      <Feather className="size-6"/>
                      Características
                    </Link>
                    <Link href="#paquetes" className="flex items-center gap-3 text-white/70 hover:text-white transition" onClick={() => setIsOpen(false)}>
                      <CodeXml className="size-6"/>
                      Planes
                    </Link>
                    <Link href="#proceso" className="flex items-center gap-3 text-white/70 hover:text-white transition" onClick={() => setIsOpen(false)}>
                      <Wallet2 className="size-6"/>
                      Proceso
                    </Link>
                    <Link href="#ventajas" className="flex items-center gap-3 text-white/70 hover:text-white transition" onClick={() => setIsOpen(false)}>
                      <Newspaper className="size-6"/>
                      Ventajas
                    </Link>
                  </nav>
                </div>
              </DrawerContent>
            </Drawer>
          </section>
        </div>
      </div>
    </header>
  )
}
