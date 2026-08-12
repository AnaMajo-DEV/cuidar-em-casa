"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <div className="relative h-14 w-44">
            <Image
              src="/images/logo.png"
              alt="Logo Cuidar em Casa"
              fill
              priority
              className="object-contain"
            />
          </div>
        </a>

        {/* Menu */}
        <ul className="hidden items-center gap-10 lg:flex">

          <li>
            <a
              href="#inicio"
              className="text-[15px] font-medium text-slate-700 transition duration-300 hover:text-[#5D7C59]"
            >
              Início
            </a>
          </li>

          <li>
            <a
              href="#sobre"
              className="text-[15px] font-medium text-slate-700 transition duration-300 hover:text-[#5D7C59]"
            >
              Sobre
            </a>
          </li>

          <li>
            <a
              href="#cuidados"
              className="text-[15px] font-medium text-slate-700 transition duration-300 hover:text-[#5D7C59]"
            >
              Cuidados
            </a>
          </li>

          <li>
            <a
              href="#como-funciona"
              className="text-[15px] font-medium text-slate-700 transition duration-300 hover:text-[#5D7C59]"
            >
              Como Funciona
            </a>
          </li>

          <li>
            <a
              href="#contato"
              className="text-[15px] font-medium text-slate-700 transition duration-300 hover:text-[#5D7C59]"
            >
              Contato
            </a>
          </li>

        </ul>

        {/* Botão */}
        <a
          href="#contato"
          className="rounded-full bg-[#5D7C59] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-900/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#4B6848] hover:shadow-xl"
        >
          Fale Conosco
        </a>

      </nav>
    </header>
  );
}