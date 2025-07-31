import admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE_ACCOUNT_KEY!);
// Si el private_key viene con "\n" literales hay que reemplazarlos:
serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const firestore = admin.firestore();
