"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const response_helper_1 = require("../utils/response.helper");
class TaskController {
    constructor(taskUseCase) {
        this.taskUseCase = taskUseCase;
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const tasks = yield this.taskUseCase.obtenerTareas();
                return (0, response_helper_1.sendResponse)(res, 200, "Tareas obtenidas correctamente", tasks);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const task = yield this.taskUseCase.crearTarea(req.body);
                return (0, response_helper_1.sendResponse)(res, 200, "Registro creado con exito", task);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const updated = yield this.taskUseCase.editarTarea(req.params.id, req.body);
                return (0, response_helper_1.sendResponse)(res, 200, "Registro actualizado con exito", updated);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.taskUseCase.eliminarTarea(req.params.id);
                return (0, response_helper_1.sendResponse)(res, 200, "Registro eliminado con exito", true);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
    }
}
exports.TaskController = TaskController;
