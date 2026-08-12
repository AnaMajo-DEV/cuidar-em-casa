import Image from "next/image";

import { Button } from "../ui/button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#FAF9F6]"
    >
      {/* Imagem */}
      <div className="absolute inset-y-0 right-0 w-[64%]">
        <Image
          src="/images/cuidadores1.png"
          alt="Cuidadora auxiliando uma idosa"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Fade */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(
              90deg,
              #FAF9F6 0%,
              #FAF9F6 30%,
              rgba(250,249,246,.98) 40%,
              rgba(250,249,246,.92) 47%,
              rgba(250,249,246,.72) 56%,
              rgba(250,249,246,.28) 66%,
              rgba(250,249,246,0) 76%
            )
          `,
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-20 mx-auto flex min-h-[92vh] max-w-7xl items-center px-8">

        <div className="w-[52%] max-w-[720px]">

          <span className="inline-flex rounded-full bg-[#E8EFE7] px-5 py-2 text-sm font-medium tracking-wide text-[#5D7C59]">
            Atendimento Humanizado
          </span>

          <h1 className="mt-8 text-[64px] font-normal leading-[1.12] tracking-[-2px] text-[#24313A]">
            Cuidado que acolhe.
            <br />
            Presença que faz bem.
          </h1>

          <p className="mt-8 max-w-[560px] text-[20px] leading-9 text-slate-600">
            Levamos segurança, carinho e qualidade de vida para quem mais
            precisa, oferecendo atendimento domiciliar personalizado para
            idosos e suas famílias.
          </p>

          <div className="mt-12 flex gap-5">
            <Button href="#contato">
              Solicitar Atendimento
            </Button>

            <Button href="#sobre" variant="secondary">
              Saiba Mais
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}