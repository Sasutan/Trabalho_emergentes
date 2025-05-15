import express, { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const router = express.Router();

interface User {
  email: string;
  password: string;
}

const users: User[] = [];

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

router.post("/register", async (req: Request, res: Response) => {
  const { email, password }: { email: string; password: string } = req.body;

  const existingUser = users.find((u) => u.email === email);
  if (existingUser)
    return res.status(400).json({ message: "User already exists." });

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });

  res.json({ message: "User registered successfully." });
});

// Login route
router.post("/login", async (req: Request, res: Response) => {
  const { email, password }: { email: string; password: string } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) return res.status(404).json({ message: "User not found." });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid)
    return res.status(401).json({ message: "Invalid credentials." });

  const token = jwt.sign({ email: user.email }, SECRET, { expiresIn: "1h" });

  res.json({ message: "Login successful.", token });
});

// Password recovery email sender route
router.post("/recover-password", async (req: Request, res: Response) => {
  const { email }: { email: string } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) return res.status(404).json({ message: "User not found." });

  const token = jwt.sign({ email: user.email }, SECRET, { expiresIn: "15m" });

  const mailOptions = {
    from: "your.email@gmail.com",
    to: email,
    subject: "Password Recovery",
    html: `<p>Click <a href="http://localhost:3000/reset-password/${token}">here</a> to reset your password.</p>`,
  };

  await transporter.sendMail(mailOptions);

  res.json({ message: "Password recovery email sent." });
});

// New password route
router.post(
  "/reset-password/:token",
  async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.params;
    const { newPassword }: { newPassword: string } = req.body;

    try {
      const decoded = jwt.verify(token, SECRET) as JwtPayload;

      const user = users.find((u) => u.email === decoded.email);
      if (!user) return res.status(404).json({ message: "User not found." });

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;

      res.json({ message: "Password updated successfully." });
    } catch (err) {
      res.status(400).json({ message: "Invalid or expired token." });
    }
  }
);

export default router;
