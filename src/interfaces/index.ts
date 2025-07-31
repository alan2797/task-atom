import express from "express";
import { createServer } from "../infrastructure/webserver";
import cors from "cors";
import { firestore } from "../infrastructure/firebase";
import { FirestoreTaskRepository } from "../infrastructure/db/firestore.task.repository";
import { FirestoreUserRepository } from "../infrastructure/db/firestore.user.repository";
import { TaskController } from "./http/controllers/task.controller";
import { UserController } from "./http/controllers/user.controller";
import { createTaskRouter } from "./http/routes/task.routes";
import { createUserRouter } from "./http/routes/user.routes";
import { TaskUseCase } from "../use-cases/task.usecase";
import { UserUseCase } from "../use-cases/user.usecase";

export function startApp() {
  const app = createServer();

  const taskRepo = new FirestoreTaskRepository(firestore);
  const taskUseCase = new TaskUseCase(taskRepo);
  const taskController = new TaskController(taskUseCase);

  const userRepo = new FirestoreUserRepository(firestore);
  const userUseCase = new UserUseCase(userRepo);
  const userController = new UserController(userUseCase);

  app.use("/tasks", createTaskRouter(taskController));
  app.use("/users", createUserRouter(userController));

  return app;
}
