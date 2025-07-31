"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskRouter = void 0;
const express_1 = require("express");
const task_dto_1 = require("../dtos/task.dto");
const validate_middleware_1 = require("../middleware/validate.middleware");
const createTaskRouter = (controller) => {
    const router = (0, express_1.Router)();
    router.get("/", controller.getAll);
    router.post("/", (0, validate_middleware_1.validate)(task_dto_1.createTaskSchema), controller.create);
    router.put("/:id", (0, validate_middleware_1.validate)(task_dto_1.updateTaskSchema), controller.update);
    router.delete("/:id", controller.delete);
    return router;
};
exports.createTaskRouter = createTaskRouter;
