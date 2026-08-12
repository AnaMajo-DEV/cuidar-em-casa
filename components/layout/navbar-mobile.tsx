"use client";

import Image from "next/image";
import { useState } from "react";

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="relative z-50 w-full bg-white lg:hidden">
      <nav className="flex h-[72px] items-center justify-between px-5">
        
        {/* Logo */}
        <a href="#inicio" onClick={closeMenu} className="flex items-center">
          <div className="relative h-14 w-28">
            <Image
              src="/images/logo.png"
              alt="Logo Cuidar em Casa"
              fill
              className="object-contain"
              priority
            />
          </div>
        </a>

        {/* Botão Hamburguer */}
        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5D7C59] text-white transition-all duration-300 hover:bg-[#4B6547]"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-0.5 w-full rounded-full bg-white transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-full rounded-full bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-full rounded-full bg-white transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`overflow-hidden border-t border-[#EEF1EC] bg-white transition-all duration-300 ${
          isOpen
            ? "max-h-[420px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-5 py-4">
          
          <li>
            <a
              href="#inicio"
              onClick={closeMenu}
              className="block border-b border-[#EEF1EC] px-2 py-4 text-[15px] font-medium text-[#24313A] transition hover:text-[#5D7C59]"
            >
              Início
            </a>
          </li>

          <li>
            <a
              href="#sobre"
              onClick={closeMenu}
              className="block border-b border-[#EEF1EC] px-2 py-4 text-[15px] font-medium text-[#24313A] transition hover:text-[#5D7C59]"
            >
              Sobre
            </a>
          </li>

          <li>
            <a
              href="#cuidados"
              onClick={closeMenu}
              className="block border-b border-[#EEF1EC] px-2 py-4 text-[15px] font-medium text-[#24313A] transition hover:text-[#5D7C59]"
            >
              Cuidados
            </a>
          </li>

          <li>
            <a
              href="#como-funciona"
              onClick={closeMenu}
              className="block border-b border-[#EEF1EC] px-2 py-4 text-[15px] font-medium text-[#24313A] transition hover:text-[#5D7C59]"
            >
              Como Funciona
            </a>
          </li>

          <li>
            <a
              href="#contato"
              onClick={closeMenu}
              className="block px-2 py-4 text-[15px] font-medium text-[#24313A] transition hover:text-[#5D7C59]"
            >
              Contato
            </a>
          </li>

          <li className="pt-3">
            <a
              href="#contato"
              onClick={closeMenu}
              className="block rounded-full bg-[#5D7C59] px-5 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:bg-[#4B6547]"
            >
              Fale Conosco
            </a>
          </li>

        </ul>
      </div>
    </header>
  );
}