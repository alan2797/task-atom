"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestore = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
// Ruta absoluta hacia el archivo
const serviceAccountPath = path_1.default.resolve(__dirname, "../../serviceAccountKey.json");
const serviceAccount = JSON.parse((0, fs_1.readFileSync)(serviceAccountPath, "utf8"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
});
exports.firestore = firebase_admin_1.default.firestore();
