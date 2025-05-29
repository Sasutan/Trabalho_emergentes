import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const prisma = new PrismaClient();
const router = Router();


router.post("/", async (req, res) => {
  const { email, senha } = req.body;

  const mensagemErro = "Email ou senha inválidos.";

  if (!email || !senha) {
    res.status(400).json({ erro: mensagemErro });
    return
  }

  try {
    const cliente = await prisma.cliente.findFirst({
      where: { email }
    });

    if (cliente == null) {
      res.status(404).json({ erro: mensagemErro });
      return
    }

    if (bcrypt.compareSync(senha, cliente.senha)) {
       const token = jwt.sign({
        clienteLogadoID: cliente.id,
        clienteLogadoEmail: cliente.email,
        },
          process.env.JWT_KEY as string,
          { expiresIn: "1h" }
        )

        res.status(200).json({
          id: cliente.id,
          email: cliente.email,
          token
        })

       } else {
        res.status(400).json({ erro: mensagemErro });
       }
    } catch (error) {
      res.status(400).json(error)
    }
  
})

export default router;