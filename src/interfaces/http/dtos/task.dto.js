"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskSchema = exports.createTaskSchema = void 0;
const zod_1 = require("zod");
exports.createTaskSchema = zod_1.z.object({
    body: zod_1.z.object({
        titulo: zod_1.z.string().min(3, "El título es obligatorio"),
        descripcion: zod_1.z.string().min(3).optional(),
        userId: zod_1.z.string(),
    }),
});
exports.updateTaskSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string(),
    }),
    body: zod_1.z.object({
        titulo: zod_1.z.string().optional(),
        descripcion: zod_1.z.string().optional(),
        estado: zod_1.z.string().optional(),
    }),
});
