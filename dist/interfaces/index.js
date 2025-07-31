"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startApp = startApp;
const webserver_1 = require("../infrastructure/webserver");
const firebase_1 = require("../infrastructure/firebase");
const firestore_task_repository_1 = require("../infrastructure/db/firestore.task.repository");
const firestore_user_repository_1 = require("../infrastructure/db/firestore.user.repository");
const task_controller_1 = require("./http/controllers/task.controller");
const user_controller_1 = require("./http/controllers/user.controller");
const task_routes_1 = require("./http/routes/task.routes");
const user_routes_1 = require("./http/routes/user.routes");
const task_usecase_1 = require("../use-cases/task.usecase");
const user_usecase_1 = require("../use-cases/user.usecase");
function startApp() {
    const app = (0, webserver_1.createServer)();
    const taskRepo = new firestore_task_repository_1.FirestoreTaskRepository(firebase_1.firestore);
    const taskUseCase = new task_usecase_1.TaskUseCase(taskRepo);
    const taskController = new task_controller_1.TaskController(taskUseCase);
    const userRepo = new firestore_user_repository_1.FirestoreUserRepository(firebase_1.firestore);
    const userUseCase = new user_usecase_1.UserUseCase(userRepo);
    const userController = new user_controller_1.UserController(userUseCase);
    app.use("/tasks", (0, task_routes_1.createTaskRouter)(taskController));
    app.use("/users", (0, user_routes_1.createUserRouter)(userController));
    return app;
}
