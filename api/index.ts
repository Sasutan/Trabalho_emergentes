import express from "express";
import cors from "cors";
import routesArmas from "./routes/armas";
import authRoutes from "./routes/auth";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use("/armas", routesArmas);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API: Gun's Galore");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
