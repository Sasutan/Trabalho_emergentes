import express from "express";
import cors from "cors";
import routesArmas from "./routes/armas";
// import RoutesAuth from "./routes/auth";
import RoutesClientes from "./routes/clientes";
import RoutesLogin from "./routes/login";
import RoutesTestes from "./routes/testes";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use("/armas", routesArmas);
app.use("/clientes", RoutesClientes);
app.use("/login", RoutesLogin);
app.use("/testes", RoutesTestes);
// app.use("/auth", RoutesAuth);

app.get("/", (req, res) => {
  res.send("API: Gun's Galore");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
