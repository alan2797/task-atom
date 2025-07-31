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
exports.FirestoreUserRepository = void 0;
class FirestoreUserRepository {
    constructor(firestore) {
        this.collection = firestore.collection("users");
    }
    existsByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const snapshot = yield this.collection.where("correo", "==", email).get();
            return !snapshot.empty;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const docRef = yield this.collection.add(data);
            return Object.assign({ id: docRef.id }, data);
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const snapshot = yield this.collection
                .where("correo", "==", email)
                .limit(1)
                .get();
            if (snapshot.empty) {
                return null;
            }
            const doc = snapshot.docs[0];
            const data = doc.data();
            return Object.assign({ id: doc.id }, data);
        });
    }
}
exports.FirestoreUserRepository = FirestoreUserRepository;
