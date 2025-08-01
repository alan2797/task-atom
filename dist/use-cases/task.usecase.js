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
exports.TaskUseCase = void 0;
class TaskUseCase {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    obtenerTareas() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskRepository.getAll();
        });
    }
    crearTarea(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskRepository.create(data);
        });
    }
    editarTarea(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskRepository.update(id, data);
        });
    }
    eliminarTarea(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.taskRepository.delete(id);
        });
    }
}
exports.TaskUseCase = TaskUseCase;
