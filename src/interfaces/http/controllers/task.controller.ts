import { Request, Response } from "express";
import { TaskUseCase } from "../../../use-cases/task.usecase";
import { sendResponse } from "../utils/response.helper";

export class TaskController {
  constructor(private taskUseCase: TaskUseCase) {}

  getAll = async (req: Request, res: Response) => {
    try {
      const tasks = await this.taskUseCase.obtenerTareas(req.params.id);
      return sendResponse(res, 200, "Tareas obtenidas correctamente", tasks);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const task = await this.taskUseCase.crearTarea(req.body);
      return sendResponse(res, 200, "Registro creado con exito", task);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const updated = await this.taskUseCase.editarTarea(
        req.params.id,
        req.body
      );
      return sendResponse(res, 200, "Registro actualizado con exito", updated);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      await this.taskUseCase.eliminarTarea(req.params.id);
      return sendResponse(res, 200, "Registro eliminado con exito", true);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  };
}
