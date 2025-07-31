import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No existe el token" });
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({ message: "token invalido" });
  }

  try {
    const secret = process.env.JWT_SECRET!;
    const decoded = jwt.verify(token, secret);

    // Puedes guardar los datos del token en req.user
    (req as any).user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token no valido" });
  }
};
