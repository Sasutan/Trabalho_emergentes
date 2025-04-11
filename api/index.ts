import express from 'express'
import cors from 'cors'

const app = express()
const port = 3001

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send("API: Gun's Galore")
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})