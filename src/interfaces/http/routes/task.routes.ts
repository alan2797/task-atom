import { Router } from "express";
import { TaskController } from "../controllers/task.controller";
import { createTaskSchema, updateTaskSchema } from "../dtos/task.dto";
import { validate } from "../middleware/validate.middleware";

export const createTaskRouter = (controller: TaskController): Router => {
  const router = Router();
  router.get("/", controller.getAll);
  router.post("/", validate(createTaskSchema), controller.create);
  router.put("/:id", validate(updateTaskSchema), controller.update);
  router.delete("/:id", controller.delete);
  return router;
};
