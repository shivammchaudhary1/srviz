import express from "express";
import { config } from "../envs/env.js";
import { connectToDatabase } from "../db/db.js";
import { mainRoutes } from "../../routes/main.routes.js";
import cors from "cors";

export const initializeExpress = () => {
  const app = express();

  // middleware
  app.use(express.json());
  app.use(cors());
  mainRoutes(app);

  // open routes
  app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the API" });
  });

  app.listen(config.port, async () => {
    try {
      await connectToDatabase();
      console.log(`Server is running on http://localhost:${config.port}`);
    } catch (error) {
      console.error("Failed to start server:", error);
    }
  });

  return app;
};
