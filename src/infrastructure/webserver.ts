import express from "express";
import cors from "cors";

export const createServer = () => {
  const app = express();
  app.use(
    cors({
      origin: process.env.WEB, // solo este origen
    })
  );
  app.use(express.json());
  return app;
};
