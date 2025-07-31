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
exports.FirestoreTaskRepository = void 0;
class FirestoreTaskRepository {
    constructor(firestore) {
        this.collection = firestore.collection("tasks");
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const snapshot = yield this.collection.get();
            return snapshot.docs.map((doc) => (Object.assign({ id: doc.id }, doc.data())));
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const docRef = yield this.collection.add(data);
            return Object.assign({ id: docRef.id }, data);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.collection.doc(id).update(data);
            return Object.assign({ id }, data);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.collection.doc(id).delete();
            return true;
        });
    }
}
exports.FirestoreTaskRepository = FirestoreTaskRepository;
