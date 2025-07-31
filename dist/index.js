"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const interfaces_1 = require("./interfaces");
const PORT = process.env.PORT || 3000;
const app = (0, interfaces_1.startApp)();
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
