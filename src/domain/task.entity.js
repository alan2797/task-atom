"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor({ id, titulo, descripcion, estado = "P", fechaRegistro = new Date(), userId, }) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.fechaRegistro = fechaRegistro;
        this.userId = userId;
    }
}
exports.Task = Task;
