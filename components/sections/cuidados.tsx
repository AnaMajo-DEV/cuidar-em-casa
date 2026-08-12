"use client";

import { motion } from "framer-motion";

const cuidados = [
  {
    icon: "⌁",
    title: "Higiene Pessoal",
    description:
      "Ajudamos na higiene diária com todo carinho e respeito, promovendo bem-estar, conforto e autoestima.",
  },
  {
    icon: "✚",
    title: "Administração de Medicamentos",
    description:
      "Auxiliamos na organização e administração dos medicamentos conforme a prescrição, com atenção e responsabilidade.",
  },
  {
    icon: "♡",
    title: "Companhia em Casa",
    description:
      "Oferecemos presença acolhedora e atenciosa, conversas, leitura, jogos e momentos agradáveis para tornar o dia mais leve e feliz.",
  },
  {
    icon: "✦",
    title: "Cuidado e Atenção",
    description:
      "Estamos sempre atentos às necessidades do idoso, promovendo segurança, bem-estar e tranquilidade para toda a família.",
  },
];

export function Cuidados() {
  return (
    <section
      id="cuidados"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-8">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-center"
        >
          <span className="inline-flex rounded-full bg-[#E8EFE7] px-5 py-2 text-sm font-medium tracking-wide text-[#5D7C59]">
            Nossos Serviços
          </span>

          <h2 className="mt-7 text-[52px] font-normal leading-[1.08] tracking-[-1.8px] text-[#24313A]">
            Cuidado em cada detalhe.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-slate-600">
            Oferecemos cuidados personalizados para proporcionar mais
            segurança, conforto e qualidade de vida para idosos e suas famílias.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cuidados.map((cuidado, index) => (
            <motion.div
              key={cuidado.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group rounded-[28px] border border-[#E8EFE7] bg-[#FAF9F6] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#6B8963] hover:shadow-xl"
            >
              {/* Ícone */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DCE7D9] text-3xl text-[#5D7C59] transition duration-500 group-hover:bg-[#6B8963] group-hover:text-white">
                {cuidado.icon}
              </div>

              {/* Título */}
              <h3 className="mt-8 text-2xl font-medium leading-tight text-[#24313A]">
                {cuidado.title}
              </h3>

              {/* Descrição */}
              <p className="mt-5 text-base leading-8 text-slate-600">
                {cuidado.description}
              </p>

              {/* Detalhe */}
              <div className="mt-8 h-px w-12 bg-[#AFC2A8] transition-all duration-500 group-hover:w-20 group-hover:bg-[#6B8963]" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
