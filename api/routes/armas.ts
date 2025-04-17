import { PrismaClient, tipoArmas } from "@prisma/client"
import { Router } from "express";
import { z } from "zod";

const prisma = new PrismaClient()
const router = Router()

const armaSchema = z.object({
  nome: z.string(),
  calibre : z.string(),
  preco: z.number(),
  numDisparos: z.number(),
  fabricanteId: z.number(),
  foto: z.string(),
  tipoArma: z.nativeEnum(tipoArmas),
})

router.get('/', async (req, res) => {
    try {
        const armas = await prisma.arma.findMany({
            include: {
                fabricante: true,
            },
        })
        res.status(200).json(armas)
    } catch (error) {
        res.status(500).json({ erro: error})
    }
})

router.post('/', async (req, res) => {

    const valida = armaSchema.safeParse(req.body)
    if (!valida.success) {
        res.status(400).json({ erro: valida.error })
        return
    }

    const { nome, calibre, numDisparos, fabricanteId, foto, preco, tipoArma } = valida.data
  
    try {
        const armas = await prisma.arma.create({
            data: {
                nome,
                calibre,
                preco,
                numDisparos,
                fabricanteId,
                foto,
                tipoArma,
            },
        })
        res.status(201).json(armas)
    }
    catch (error) {
        res.status(400).json({ error })
    }
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params
  
    try {
      const armas = await prisma.arma.delete({
        where: { id: Number(id) }
      })
      res.status(200).json(armas)
    } catch (error) {
      res.status(400).json({ erro: error })
    }
  })

router.put('/:id', async (req, res) => {
    const { id } = req.params
    
    const valida = armaSchema.safeParse(req.body)
    if (!valida.success) {
        res.status(400).json({ erro: valida.error })
        return
    }

    const { nome, calibre, numDisparos, fabricanteId, foto, preco, tipoArma } = valida.data

    try {
        const armas = await prisma.arma.update({
            where: { id: Number(id) },
            data: {
                nome,
                calibre,
                numDisparos,
                fabricanteId,
                foto,
                preco,
                tipoArma,
            },
        })
        res.status(200).json(armas)
    }
    catch (error) {
        res.status(400).json({ error })
    }
})

export default router