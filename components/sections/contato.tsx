"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function Contato() {
  const [enviando, setEnviando] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setEnviando(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const dados = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      telefone: formData.get("telefone"),
      mensagem: formData.get("mensagem"),
    };

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem");
      }

      setStatus("Mensagem enviada com sucesso! Em breve entraremos em contato.");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus(
        "Não foi possível enviar a mensagem. Tente novamente ou fale conosco pelo WhatsApp."
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section
      id="contato"
      className="bg-[#6B8963] px-8 py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-medium tracking-wide text-white">
            Fale Conosco
          </span>

          <h2 className="mt-7 max-w-xl text-[52px] font-normal leading-[1.08] tracking-[-1.8px] text-white">
            Vamos conversar sobre o cuidado que você procura.
          </h2>

          <p className="mt-7 max-w-lg text-lg leading-9 text-white/80">
            Estamos aqui para ouvir você, entender suas necessidades e
            encontrar juntos a melhor forma de oferecer cuidado,
            segurança e tranquilidade.
          </p>

          <div className="mt-10">
            <Button
              href="https://wa.me/351934598688?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20domiciliar%20da%20Cuidar%20em%20Casa."
              className="bg-[#4B6547] text-white shadow-lg shadow-black/15 hover:-translate-y-1 hover:bg-[#3F583B] hover:shadow-xl"
            >
              Falar pelo WhatsApp
            </Button>
          </div>
        </motion.div>

        {/* Formulário */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="rounded-[32px] bg-white p-8 shadow-2xl md:p-10"
        >
          <h3 className="text-3xl font-normal text-[#24313A]">
            Entre em contato
          </h3>

          <p className="mt-3 text-base leading-7 text-slate-500">
            Preencha os dados abaixo e fale com a nossa equipe.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            <div>
              <label
                htmlFor="nome"
                className="mb-2 block text-sm font-medium text-[#24313A]"
              >
                Nome
              </label>

              <input
                id="nome"
                name="nome"
                type="text"
                required
                placeholder="Seu nome"
                className="w-full rounded-2xl border border-[#DDE6DA] bg-[#FAF9F6] px-5 py-4 text-sm text-[#24313A] outline-none transition placeholder:text-slate-400 focus:border-[#6B8963] focus:ring-2 focus:ring-[#6B8963]/10"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#24313A]"
              >
                E-mail
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="seuemail@exemplo.com"
                className="w-full rounded-2xl border border-[#DDE6DA] bg-[#FAF9F6] px-5 py-4 text-sm text-[#24313A] outline-none transition placeholder:text-slate-400 focus:border-[#6B8963] focus:ring-2 focus:ring-[#6B8963]/10"
              />
            </div>

            <div>
              <label
                htmlFor="telefone"
                className="mb-2 block text-sm font-medium text-[#24313A]"
              >
                Telefone
              </label>

              <input
                id="telefone"
                name="telefone"
                type="tel"
                required
                placeholder="(00) 00000-0000"
                className="w-full rounded-2xl border border-[#DDE6DA] bg-[#FAF9F6] px-5 py-4 text-sm text-[#24313A] outline-none transition placeholder:text-slate-400 focus:border-[#6B8963] focus:ring-2 focus:ring-[#6B8963]/10"
              />
            </div>

            <div>
              <label
                htmlFor="mensagem"
                className="mb-2 block text-sm font-medium text-[#24313A]"
              >
                Como podemos ajudar?
              </label>

              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                required
                placeholder="Conte um pouco sobre o que você precisa..."
                className="w-full resize-none rounded-2xl border border-[#DDE6DA] bg-[#FAF9F6] px-5 py-4 text-sm text-[#24313A] outline-none transition placeholder:text-slate-400 focus:border-[#6B8963] focus:ring-2 focus:ring-[#6B8963]/10"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
            >
              {enviando ? "Enviando..." : "Enviar mensagem"}
            </Button>

            {status && (
              <p className="text-center text-sm font-medium text-[#5D7C59]">
                {status}
              </p>
            )}

          </form>
        </motion.div>

      </div>
    </section>
  );
}