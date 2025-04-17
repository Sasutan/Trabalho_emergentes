import express from 'express'
import cors from 'cors'
import routesArmas from './routes/armas'

const app = express()
const port = 3001

app.use(express.json())
app.use(cors())

app.use('/armas', routesArmas)

app.get('/', (req, res) => {
  res.send("API: Gun's Galore")
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})