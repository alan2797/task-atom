import { Task } from "../domain/task.entity";

export interface TaskRepository {
  getAll(id: string): Promise<Task[]>;
  create(data: Task): Promise<Task>;
  update(id: string, data: Partial<Task>): Promise<Task>;
  delete(id: string): Promise<boolean>;
}

export class TaskUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async obtenerTareas(id: string) {
    return await this.taskRepository.getAll(id);
  }

  async crearTarea(data: Task) {
    return await this.taskRepository.create(data);
  }

  async editarTarea(id: string, data: Partial<Task>) {
    return await this.taskRepository.update(id, data);
  }

  async eliminarTarea(id: string) {
    return await this.taskRepository.delete(id);
  }
}
