"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="sobre"
      className="bg-[#FAF9F6] py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 lg:grid-cols-2">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <span className="inline-flex rounded-full bg-[#E8EFE7] px-5 py-2 text-sm font-medium tracking-wide text-[#5D7C59]">
            Sobre a Cuidar em Casa
          </span>

          <h2 className="mt-7 max-w-2xl text-[52px] font-normal leading-[1.08] tracking-[-1.8px] text-[#24313A]">
            Cuidar de quem sempre cuidou de nós.
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-9 text-slate-600">
            Na Cuidar em Casa, acreditamos que o cuidado vai muito além
            da assistência. É estar presente, oferecer segurança e
            proporcionar mais tranquilidade para idosos e suas famílias.
          </p>

          <p className="mt-5 max-w-xl text-lg leading-9 text-slate-600">
            Nosso trabalho é realizado com carinho, respeito e
            profissionalismo, sempre buscando preservar a autonomia,
            o bem-estar e a qualidade de vida de cada pessoa.
          </p>
        </motion.div>

        {/* Propósito */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[40px] bg-[#E8EFE7]/50 blur-2xl" />

          <div className="relative rounded-[32px] bg-[#6B8963] p-10 shadow-xl transition duration-500 hover:-translate-y-1 hover:shadow-2xl">

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-3xl">
              ♡
            </div>

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
              Nosso Propósito
            </span>

            <h3 className="mt-5 text-3xl font-normal leading-tight text-white">
              Amor, respeito e profissionalismo em cada cuidado.
            </h3>

            <p className="mt-6 text-lg leading-8 text-white/85">
              Cuidar de quem sempre cuidou de nós, oferecendo apoio
              humanizado e uma presença que faz diferença todos os dias.
            </p>

            <div className="mt-8 h-px w-20 bg-white/40" />

            <p className="mt-6 text-sm font-medium tracking-wide text-white/75">
              APOIO AO DOMICÍLIO DE IDOSOS
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
