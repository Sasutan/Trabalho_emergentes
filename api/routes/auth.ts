import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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


const SECRET = "your_jwt_secret_key";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "your.email@gmail.com",
    pass: "your_password",
  },
});

interface JwtPayload {
  email: string;
}

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

// login de clientes
router.post("/login", async (req, res) => {
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


// router.post("/register", async (req , res) => {
//   const { email, password }: { email: string; password: string } = req.body;

//   const existingUser = users.find((u) => u.email === email);
//   if (existingUser)
//     return res.status(400).json({ message: "User already exists." });

//   const hashedPassword = await bcrypt.hash(password, 10);
//   users.push({ email, password: hashedPassword });

//   res.json({ message: "User registered successfully." });
// });

// // Login route
// router.post("/login", async (req: Request, res: Response) => {
//   const { email, password }: { email: string; password: string } = req.body;

//   const user = users.find((u) => u.email === email);
//   if (!user) return res.status(404).json({ message: "User not found." });

//   const isPasswordValid = await bcrypt.compare(password, user.password);
//   if (!isPasswordValid)
//     return res.status(401).json({ message: "Invalid credentials." });

//   const token = jwt.sign({ email: user.email }, SECRET, { expiresIn: "1h" });

//   res.json({ message: "Login successful.", token });
// });

// // Password recovery email sender route
// router.post("/recover-password", async (req: Request, res: Response) => {
//   const { email }: { email: string } = req.body;

//   const user = users.find((u) => u.email === email);
//   if (!user) return res.status(404).json({ message: "User not found." });

//   const token = jwt.sign({ email: user.email }, SECRET, { expiresIn: "15m" });

//   const mailOptions = {
//     from: "your.email@gmail.com",
//     to: email,
//     subject: "Password Recovery",
//     html: `<p>Click <a href="http://localhost:3000/reset-password/${token}">here</a> to reset your password.</p>`,
//   };

//   await transporter.sendMail(mailOptions);

//   res.json({ message: "Password recovery email sent." });
// });

// // New password route
// router.post(
//   "/reset-password/:token",
//   async (req: Request, res: Response, next: NextFunction) => {
//     const { token } = req.params;
//     const { newPassword }: { newPassword: string } = req.body;

//     try {
//       const decoded = jwt.verify(token, SECRET) as JwtPayload;

//       const user = users.find((u) => u.email === decoded.email);
//       if (!user) return res.status(404).json({ message: "User not found." });

//       const hashedPassword = await bcrypt.hash(newPassword, 10);
//       user.password = hashedPassword;

//       res.json({ message: "Password updated successfully." });
//     } catch (err) {
//       res.status(400).json({ message: "Invalid or expired token." });
//     }
//   }
// );

export default router;
