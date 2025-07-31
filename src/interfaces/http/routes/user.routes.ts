import { Router } from "express";
import { UserController } from "../controllers/user.controller";

export const createUserRouter = (controller: UserController): Router => {
  const router = Router();
  router.get("/exists/:email", controller.exists);
  router.post("/", controller.create);
  return router;
};
