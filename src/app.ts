import express from "express";
// import { createApp } from './../../ngl-app/backend/src/app';
import { router } from "./route";

export function createApp() {
  const app = express();
  app.use(express.json());
  app.use("/api", router);

  return app;
}
