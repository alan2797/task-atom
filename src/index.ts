import express from "express";
import cors from "cors";
import { startApp } from "./interfaces";
import "dotenv/config";

const PORT = process.env.PORT || 3000;
const app = startApp();

app.use(cors());

app.use(express.json()); // parsea body JSON
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
