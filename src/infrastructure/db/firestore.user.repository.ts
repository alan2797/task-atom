import { User } from "../../domain/user.entity";
import { Firestore } from "firebase-admin/firestore";
import { UserRepository } from "../../use-cases/user.usecase";

export class FirestoreUserRepository implements UserRepository {
  private collection;

  constructor(firestore: Firestore) {
    this.collection = firestore.collection("users");
  }

  async existsByEmail(email: string): Promise<boolean> {
    const snapshot = await this.collection.where("correo", "==", email).get();
    return !snapshot.empty;
  }

  async create(data: User): Promise<User> {
    const docRef = await this.collection.add(data);
    return { id: docRef.id, ...data };
  }

  async findByEmail(email: string): Promise<User | null> {
    const snapshot = await this.collection
      .where("correo", "==", email)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return null;
    }

    const doc = snapshot.docs[0];
    const data = doc.data() as Omit<User, "id">;

    return {
      id: doc.id,
      ...data,
    };
  }
}
