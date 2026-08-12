import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#24313A] text-white">
      <div className="mx-auto max-w-7xl px-8 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Marca */}
          <div>
            <a href="#inicio" className="inline-flex items-center">
              <div className="relative h-20 w-44">
                <Image
                  src="/images/logo.png"
                  alt="Logo Cuidar em Casa"
                  fill
                  className="object-contain"
                />
              </div>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
              Cuidado, respeito e companhia para proporcionar
              mais segurança, tranquilidade e qualidade de vida
              no conforto do lar.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              Navegação
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-white/65">
              <li>
                <a
                  href="#inicio"
                  className="transition hover:text-white"
                >
                  Início
                </a>
              </li>

              <li>
                <a
                  href="#sobre"
                  className="transition hover:text-white"
                >
                  Sobre
                </a>
              </li>

              <li>
                <a
                  href="#cuidados"
                  className="transition hover:text-white"
                >
                  Cuidados
                </a>
              </li>

              <li>
                <a
                  href="#como-funciona"
                  className="transition hover:text-white"
                >
                  Como Funciona
                </a>
              </li>

              <li>
                <a
                  href="#contato"
                  className="transition hover:text-white"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              Entre em contato
            </h3>

            <div className="mt-6 space-y-5 text-sm">

              <div>
                <p className="text-white/45">
                  Telefone / WhatsApp
                </p>

                <a
                  href="tel:+351934598688"
                  className="mt-1 block text-white/80 transition hover:text-white"
                >
                  +351 934 598 688
                </a>
              </div>

              <div>
                <p className="text-white/45">
                  Atendimento
                </p>

                <p className="mt-1 text-white/80">
                  Região de Fafe
                </p>
              </div>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full bg-[#5D7C59] px-6 py-3 font-medium text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#6B8963] hover:shadow-lg"
              >
                Fale Conosco
                <span>→</span>
              </a>

            </div>
          </div>

        </div>

        {/* Linha final */}
        <div className="mt-14 border-t border-white/10 pt-6">

          <div className="flex flex-col gap-3 text-sm text-white/45 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} Cuidar em Casa. Todos os direitos reservados.
            </p>

            <p>
              Apoio ao domicílio de idosos
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}