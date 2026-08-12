import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { nome, email, telefone, mensagem } = body;

    if (!nome || !email || !telefone || !mensagem) {
      return NextResponse.json(
        {
          error: "Preencha todos os campos.",
        },
        {
          status: 400,
        }
      );
    }

    await resend.emails.send({
      from: "Cuidar em Casa <noreply@cuidaremcasa.com>",
      to: ["contato.cuidaremcasa@outlook.com"],
      subject: `Novo contato pelo site - ${nome}`,
      replyTo: email,
      html: `
        <h2>Novo contato pelo site</h2>

        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>

        <h3>Mensagem</h3>
        <p>${mensagem}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);

    return NextResponse.json(
      {
        error: "Não foi possível enviar a mensagem.",
      },
      {
        status: 500,
      }
    );
  }
}