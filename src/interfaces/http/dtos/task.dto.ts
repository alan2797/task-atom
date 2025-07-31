import { z } from "zod";

export const createTaskSchema = z.object({
  body: z.object({
    titulo: z.string().min(3, "El título es obligatorio"),
    descripcion: z.string().min(3).optional(),
    userId: z.string(),
  }),
});

export const updateTaskSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
  body: z.object({
    titulo: z.string().optional(),
    descripcion: z.string().optional(),
    estado: z.string().optional(),
  }),
});
