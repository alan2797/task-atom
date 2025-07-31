import { Request, Response } from "express";
import { UserUseCase } from "../../../use-cases/user.usecase";
import { sendResponse } from "../utils/response.helper";

export class UserController {
  constructor(private userUseCase: UserUseCase) {}

  exists = async (req: Request, res: Response) => {
    try {
      const exists = await this.userUseCase.existeUsuario(
        req.params.email,
        res
      );
      return sendResponse(res, 200, "Usuario existe", exists);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      console.log(req.body);
      const user = await this.userUseCase.crearUsuario(req.body);
      return sendResponse(res, 200, "Usuario creado con exito", user);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  };
}
