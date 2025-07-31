import admin from "firebase-admin";
import { readFileSync } from "fs";
import path from "path";

// Ruta absoluta hacia el archivo
const serviceAccountPath = path.resolve(
  __dirname,
  "../../serviceAccountKey.json"
);
const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, "utf8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const firestore = admin.firestore();
