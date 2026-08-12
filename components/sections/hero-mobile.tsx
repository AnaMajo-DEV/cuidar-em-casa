"use client";

import { motion } from "framer-motion";

import { Button } from "../ui/button";

export function HeroMobile() {
  return (
    <section
      id="inicio"
      className="bg-[#FAF9F6] px-6 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="mx-auto max-w-xl"
      >
        <span className="inline-flex w-fit rounded-full bg-[#E8EFE7] px-5 py-2 text-sm font-medium tracking-wide text-[#5D7C59]">
          Atendimento Humanizado
        </span>

        <h1 className="mt-7 text-[46px] font-normal leading-[1.08] tracking-[-1.5px] text-[#24313A]">
          Cuidado que acolhe.
          <br />
          Presença que faz bem.
        </h1>

        <p className="mt-7 text-[17px] leading-8 text-slate-600">
          Levamos segurança, carinho e qualidade de vida para quem mais
          precisa, oferecendo atendimento domiciliar personalizado para
          idosos e suas famílias.
        </p>

        <div className="mt-9 flex flex-col gap-4">
          <Button href="#contato">
            Solicitar Atendimento
          </Button>

          <Button href="#sobre" variant="secondary">
            Saiba Mais
          </Button>
        </div>
      </motion.div>
    </section>
  );
}