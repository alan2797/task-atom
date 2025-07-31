import { Router } from "express";
import { TaskController } from "../controllers/task.controller";
import { createTaskSchema, updateTaskSchema } from "../dtos/task.dto";
import { validate } from "../middleware/validate.middleware";
import { authMiddleware } from "../middleware/auth.middleware";

export const createTaskRouter = (controller: TaskController): Router => {
  const router = Router();
  router.get("/:id", authMiddleware, controller.getAll);
  router.post(
    "/",
    authMiddleware,
    validate(createTaskSchema),
    controller.create
  );
  router.put(
    "/:id",
    authMiddleware,
    validate(updateTaskSchema),
    controller.update
  );
  router.delete("/:id", authMiddleware, controller.delete);
  return router;
};
