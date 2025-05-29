import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { z } from "zod";

const prisma = new PrismaClient();
const router = Router();


const clienteSchema = z.object({
  nome: z.string().min(10, { message: "Nome deve ter pelo menos 10 caracteres." }),
  email: z.string().email(),
  senha: z.string(),
  licencaEsp: z.string().optional()
})



//registro de clientes
router.get("/", async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany()
    res.status(200).json(clientes);
  } catch (error) {
    res.status(400).json({error});
}});

function validaSenha(senha: string){
  const mensa: string[] = [];

  if (senha.length < 8) {
    mensa.push("A senha deve ter pelo menos 8 caracteres.");
  }

  let minusc = 0;
  let maiusc = 0;
  let num = 0;
  let simbolos = 0;

  for (const letra of senha) {
    if ((/[a-z]/).test(letra)) {
      minusc++
    }
    else if ((/[A-Z]/).test(letra)) {
      maiusc++
    }
    else if ((/[0-9]/).test(letra)) {
      num++
    } else {
      simbolos++
    }
  }

  if (minusc == 0)  {
    mensa.push("A senha deve conter pelo menos uma letra minúscula.");
  }

  if (maiusc == 0) {
    mensa.push("A senha deve conter pelo menos uma letra maiúscula.");
  }

  if (num == 0) {
    mensa.push("A senha deve conter pelo menos um número.");
  }

  if (simbolos == 0) {
    mensa.push("A senha deve conter pelo menos um símbolo.");
  }

  return mensa
}

router.post("/registro", async (req, res) => {
  const valida = clienteSchema.safeParse(req.body)
  if (!valida.success) {
    res.status(400).json({ error: valida.error });
    return;
  }


  const emailExistente = await prisma.cliente.findFirst({
    where: { email: valida.data.email }
  });
  if (emailExistente) {
    res.status(400).json({ error: "Já existe uma conta com este e-mail." });
    return;
  }

  const erros = validaSenha(valida.data.senha);
  if (erros.length > 0) {
    res.status(400).json({ error: erros.join("; ") });
    return;
  }

  const salt = bcrypt.genSaltSync(12);
  const senhaHash = bcrypt.hashSync(valida.data.senha, salt);

  const { nome, email, licencaEsp } = valida.data;
  try {
    const cliente = await prisma.cliente.create({
      data: {
        nome,
        email,
        senha: senhaHash,
        licencaEsp,
      },
    });
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error });
  }
})

router.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const cliente = await prisma.cliente.findFirst({
      where: { id: Number(id) }
    })
    res.status(200).json(cliente)
  } catch (error) {
    res.status(400).json(error)
  }
})


router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const valida = clienteSchema.partial().safeParse(req.body); 
  if (!valida.success) {
    res.status(400).json({ error: valida.error });
    return;
  }

  try {
    let dadosAtualizados = { ...valida.data };
    if (dadosAtualizados.senha) {
      const erros = validaSenha(dadosAtualizados.senha);
      if (erros.length > 0) {
        res.status(400).json({ error: erros.join("; ") });
        return;
      }
      const salt = bcrypt.genSaltSync(12);
      dadosAtualizados.senha = bcrypt.hashSync(dadosAtualizados.senha, salt);
    }

    const cliente = await prisma.cliente.update({
      where: { id: Number(id) },
      data: dadosAtualizados,
    });
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.cliente.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error });
  }
});

export default router