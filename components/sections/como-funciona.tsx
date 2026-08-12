"use client";

import { motion } from "framer-motion";

const etapas = [
  {
    number: "01",
    title: "Entre em contato",
    description:
      "Conte para nós o que você precisa e quais são as principais necessidades de quem receberá o cuidado.",
  },
  {
    number: "02",
    title: "Conversamos sobre as necessidades",
    description:
      "Entendemos a rotina, os cuidados necessários e o tipo de acompanhamento que fará mais sentido para cada família.",
  },
  {
    number: "03",
    title: "Definimos o melhor cuidado",
    description:
      "A partir dessa conversa, buscamos oferecer um atendimento personalizado, respeitando a individualidade de cada pessoa.",
  },
  {
    number: "04",
    title: "Começamos o acompanhamento",
    description:
      "Com tudo alinhado, iniciamos o atendimento no conforto do lar, com carinho, respeito e atenção.",
  },
];

export function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="bg-[#FAF9F6] px-6 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="max-w-2xl"
        >
          <span className="inline-flex rounded-full bg-[#E8EFE7] px-5 py-2 text-sm font-medium tracking-wide text-[#5D7C59]">
            Como Funciona
          </span>

          <h2 className="mt-7 text-[40px] font-normal leading-[1.08] tracking-[-1.5px] text-[#24313A] md:text-[52px] md:tracking-[-1.8px]">
            Cuidado simples,
            <br />
            do primeiro contato em diante.
          </h2>

          <p className="mt-6 max-w-xl text-[17px] leading-8 text-slate-600 md:text-lg md:leading-9">
            Cada família tem uma necessidade diferente. Por isso,
            buscamos tornar todo o processo simples, próximo e
            personalizado.
          </p>
        </motion.div>

        {/* Etapas */}
        <div className="mt-14 md:mt-20">
          {etapas.map((etapa, index) => (
            <motion.div
              key={etapa.number}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group relative grid min-w-0 grid-cols-[48px_minmax(0,1fr)] gap-4 border-t border-[#DDE6DA] py-8 md:grid-cols-[120px_1fr] md:gap-8 md:py-10"
            >
              {/* Número */}
              <div className="text-2xl font-normal tracking-tight text-[#6B8963] transition duration-300 group-hover:scale-105 md:text-3xl">
                {etapa.number}
              </div>

              {/* Conteúdo */}
              <div className="min-w-0 max-w-3xl">
                <h3 className="text-2xl font-normal leading-tight text-[#24313A] md:text-3xl">
                  {etapa.title}
                </h3>

                <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 md:mt-4 md:text-lg md:leading-8">
                  {etapa.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}