import { User } from "../domain/user.entity";
import jwt from "jsonwebtoken";
import { Response } from "express";

export interface UserRepository {
  existsByEmail(email: string): Promise<boolean>;
  findByEmail(email: string): Promise<User | null>;
  create(data: User): Promise<User>;
}

export class UserUseCase {
  constructor(private userRepository: UserRepository) {}

  async existeUsuario(email: string, res: Response) {
    console.log(email);
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      return 404;
    }

    const payload = { id: user.id, correo: user.correo };
    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "15m",
    });

    return token;
  }

  async crearUsuario(data: User) {
    const user = await this.userRepository.create(data);
    const payload = { id: user.id, correo: user.correo };
    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "15m",
    });
    return token;
  }
}
