import "dotenv/config";
import { startApp } from "./interfaces";

const PORT = process.env.PORT || 3000;
const app = startApp();

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
