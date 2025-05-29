import { PrismaClient } from "@prisma/client"
import { Router } from "express"
import { z } from 'zod'
import nodemailer from "nodemailer"

const prisma = new PrismaClient()
const router = Router()

const testeSchema = z.object({
  clienteId: z.string(),
  armaId: z.number(),
  observacoes: z.string().min(10,
    { message: "Descrição do Teste deve possuir, no mínimo, 10 caracteres" }),
  resultado: z.string().optional()
})

router.get("/", async (req, res) => {
  try {
    const testes = await prisma.teste.findMany({
      include: {
        cliente: true,
        arma: true
      },
      orderBy: { id: 'desc'}
    })
    res.status(200).json(testes)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.post("/", async (req, res) => {

  const valida = testeSchema.safeParse(req.body)
  if (!valida.success) {
    res.status(400).json({ erro: valida.error })
    return
  }  
  const { clienteId, armaId, observacoes } = valida.data

  try {
    const teste = await prisma.teste.create({
      data: { clienteId: Number(clienteId), armaId, observacoes, resultado: "" }
    })
    res.status(201).json(teste)
  } catch (error) {
    res.status(400).json(error)
  }
})

async function enviaEmail(nome: string, email: string,
  observacoes: string, resposta: string) {

  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    secure: false,
    auth: {
      user: "3bf0836e42c6c2",
      pass: "ac5ccb4cdae398"
    }
  });

  const info = await transporter.sendMail({
    from: 'ggalore@gmail.com', // sender address
    to: email, // list of receivers
    subject: "Re: Teste Gun's Galore", // Subject line
    text: resposta, // plain text body
    html: `<h3>Estimado Cliente: ${nome}</h3>
           <h3>Teste: ${observacoes}</h3>
           <h3>Resposta da Revenda: ${resposta}</h3>
           <p>Muito obrigado pelo seu contato</p>
           <p>Gun's Galore</p>`
  });

  console.log("Message sent: %s", info.messageId);
}

router.patch("/:id", async (req, res) => {
  const { id } = req.params
  const { resposta } = req.body

  if (!resposta) {
    res.status(400).json({ "erro": "Informe o resultado deste teste" })
    return
  }

  try {
    const teste = await prisma.teste.update({
      where: { id: Number(id) },
      data: { resultado: resposta, updatedAt: new Date() }
    })

    const dados = await prisma.teste.findUnique({
      where: { id: Number(id) },
      include: {
        cliente: true
      }
    })

    enviaEmail(dados?.cliente.nome as string,
      dados?.cliente.email as string,
      dados?.observacoes as string,
      resposta)

    res.status(200).json(teste)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.get("/:clienteId", async (req, res) => {
  const { clienteId } = req.params
  try {
    const testes = await prisma.teste.findMany({
      where: { clienteId: Number(clienteId) },
      include: {
        arma: true
      }
    })
    res.status(200).json(testes)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const teste = await prisma.teste.delete({
      where: { id: Number(id) }
    })
    res.status(200).json(teste)
  } catch (error) {
    res.status(400).json(error)
  }
})

export default router