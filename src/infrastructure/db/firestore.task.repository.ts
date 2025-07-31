import { Task } from "../../domain/task.entity";
import { Firestore } from "firebase-admin/firestore";
import { TaskRepository } from "../../use-cases/task.usecase";

export class FirestoreTaskRepository implements TaskRepository {
  private collection;

  constructor(firestore: Firestore) {
    this.collection = firestore.collection("tasks");
  }

  async getAll(): Promise<Task[]> {
    const snapshot = await this.collection.get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Task));
  }

  async create(data: Task): Promise<Task> {
    const docRef = await this.collection.add(data);
    return { id: docRef.id, ...data };
  }

  async update(id: string, data: Partial<Task>): Promise<Task> {
    await this.collection.doc(id).update(data);
    return { id, ...data } as Task;
  }

  async delete(id: string): Promise<boolean> {
    await this.collection.doc(id).delete();
    return true;
  }
}
